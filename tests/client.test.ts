import { describe, it, expect, vi, beforeEach } from "vitest";
import { LayerSwapApi, LayerSwapApiError } from "../src/index";

function mockFetch(status: number, body: unknown) {
  return vi.fn<Parameters<typeof fetch>, ReturnType<typeof fetch>>().mockResolvedValue({
    ok: status >= 200 && status < 300,
    status,
    json: () => Promise.resolve(body),
  } as Response);
}

describe("LayerSwapApi", () => {
  let fetchSpy: ReturnType<typeof mockFetch>;

  beforeEach(() => {
    fetchSpy = mockFetch(200, { data: [], error: null });
    vi.stubGlobal("fetch", fetchSpy);
  });

  // ---- Config ----

  it("uses default base URL", async () => {
    const api = new LayerSwapApi({ apiKey: "key" });
    await api.getNetworks();
    expect(fetchSpy).toHaveBeenCalledWith(
      "https://api.layerswap.io/api/v2/networks",
      expect.anything()
    );
  });

  it("uses custom base URL and strips trailing slash", async () => {
    const api = new LayerSwapApi({ apiKey: "key", baseUrl: "https://custom.api.io/" });
    await api.getNetworks();
    expect(fetchSpy).toHaveBeenCalledWith(
      "https://custom.api.io/api/v2/networks",
      expect.anything()
    );
  });

  it("sends X-LS-APIKEY header", async () => {
    const api = new LayerSwapApi({ apiKey: "my-secret-key" });
    await api.getNetworks();
    expect(fetchSpy).toHaveBeenCalledWith(
      expect.any(String),
      expect.objectContaining({
        headers: expect.objectContaining({ "X-LS-APIKEY": "my-secret-key" }),
      })
    );
  });

  // ---- Response unwrapping ----

  it("unwraps data from API response", async () => {
    const networks = [{ name: "ETHEREUM_MAINNET" }];
    fetchSpy = mockFetch(200, { data: networks, error: null });
    vi.stubGlobal("fetch", fetchSpy);
    const api = new LayerSwapApi({ apiKey: "key" });
    const result = await api.getNetworks();
    expect(result).toEqual(networks);
  });

  // ---- Error handling ----

  it("throws LayerSwapApiError on API error response", async () => {
    fetchSpy = mockFetch(400, {
      data: null,
      error: { code: "BAD_REQUEST", message: "Invalid params" },
    });
    vi.stubGlobal("fetch", fetchSpy);
    const api = new LayerSwapApi({ apiKey: "key" });
    await expect(api.getNetworks()).rejects.toThrow(LayerSwapApiError);
    await expect(api.getNetworks()).rejects.toMatchObject({
      statusCode: 400,
      errorCode: "BAD_REQUEST",
      message: "Invalid params",
    });
  });

  it("throws on non-ok status without error body", async () => {
    fetchSpy = mockFetch(500, { data: null, error: null });
    vi.stubGlobal("fetch", fetchSpy);
    const api = new LayerSwapApi({ apiKey: "key" });
    await expect(api.getNetworks()).rejects.toThrow(LayerSwapApiError);
  });

  it("throws on null data", async () => {
    fetchSpy = mockFetch(200, { data: null, error: null });
    vi.stubGlobal("fetch", fetchSpy);
    const api = new LayerSwapApi({ apiKey: "key" });
    await expect(api.getNetworks()).rejects.toThrow("empty data");
  });

  // ---- Route discovery ----

  it("getSources sends query params", async () => {
    const api = new LayerSwapApi({ apiKey: "key" });
    await api.getSources({
      destinationNetwork: "STARKNET_MAINNET",
      destinationToken: "ETH",
      networkTypes: ["evm", "starknet"],
    });
    const url = fetchSpy.mock.calls[0]![0] as string;
    expect(url).toContain("destination_network=STARKNET_MAINNET");
    expect(url).toContain("destination_token=ETH");
    expect(url).toContain("network_types=evm%2Cstarknet");
  });

  it("getSources works with no params", async () => {
    const api = new LayerSwapApi({ apiKey: "key" });
    await api.getSources();
    const url = fetchSpy.mock.calls[0]![0] as string;
    expect(url).toBe("https://api.layerswap.io/api/v2/sources");
  });

  it("getDestinations sends query params", async () => {
    const api = new LayerSwapApi({ apiKey: "key" });
    await api.getDestinations({
      sourceNetwork: "ETHEREUM_MAINNET",
      sourceToken: "USDC",
    });
    const url = fetchSpy.mock.calls[0]![0] as string;
    expect(url).toContain("source_network=ETHEREUM_MAINNET");
    expect(url).toContain("source_token=USDC");
  });

  it("getNetworks with networkTypes filter", async () => {
    const api = new LayerSwapApi({ apiKey: "key" });
    await api.getNetworks({ networkTypes: ["evm"] });
    const url = fetchSpy.mock.calls[0]![0] as string;
    expect(url).toContain("network_types=evm");
  });

  // ---- Quote & limits ----

  it("getLimits sends correct query params", async () => {
    fetchSpy = mockFetch(200, {
      data: { min_amount: 0.001, max_amount: 10 },
      error: null,
    });
    vi.stubGlobal("fetch", fetchSpy);
    const api = new LayerSwapApi({ apiKey: "key" });
    const result = await api.getLimits({
      sourceNetwork: "ETHEREUM_MAINNET",
      sourceToken: "ETH",
      destinationNetwork: "STARKNET_MAINNET",
      destinationToken: "ETH",
      amount: 1,
    });
    const url = fetchSpy.mock.calls[0]![0] as string;
    expect(url).toContain("/api/v2/limits");
    expect(url).toContain("source_network=ETHEREUM_MAINNET");
    expect(url).toContain("amount=1");
    expect(result.min_amount).toBe(0.001);
  });

  it("getQuote unwraps quote from response", async () => {
    const quote = { receive_amount: 0.99, total_fee: 0.01 };
    fetchSpy = mockFetch(200, {
      data: { quote, refuel: null, reward: null },
      error: null,
    });
    vi.stubGlobal("fetch", fetchSpy);
    const api = new LayerSwapApi({ apiKey: "key" });
    const result = await api.getQuote({
      sourceNetwork: "ETHEREUM_MAINNET",
      sourceToken: "ETH",
      destinationNetwork: "STARKNET_MAINNET",
      destinationToken: "ETH",
      amount: 1,
      refuel: true,
    });
    const url = fetchSpy.mock.calls[0]![0] as string;
    expect(url).toContain("refuel=true");
    expect(result.receive_amount).toBe(0.99);
  });

  it("getDetailedQuote returns array", async () => {
    const quotes = [{ avg_completion_milliseconds: 120000, min_amount: 0.001, max_amount: 10, path: [] }];
    fetchSpy = mockFetch(200, { data: quotes, error: null });
    vi.stubGlobal("fetch", fetchSpy);
    const api = new LayerSwapApi({ apiKey: "key" });
    const result = await api.getDetailedQuote({
      sourceNetwork: "ETHEREUM_MAINNET",
      sourceToken: "ETH",
      destinationNetwork: "STARKNET_MAINNET",
      destinationToken: "ETH",
      amount: 1,
    });
    const url = fetchSpy.mock.calls[0]![0] as string;
    expect(url).toContain("/api/v2/detailed_quote");
    expect(result).toEqual(quotes);
  });

  // ---- Swap lifecycle ----

  it("createSwap sends POST with correct body", async () => {
    const swapResponse = { swap: { id: "abc" }, deposit_actions: [], quote: {} };
    fetchSpy = mockFetch(200, { data: swapResponse, error: null });
    vi.stubGlobal("fetch", fetchSpy);
    const api = new LayerSwapApi({ apiKey: "key" });
    await api.createSwap({
      sourceNetwork: "ETHEREUM_MAINNET",
      sourceToken: "ETH",
      destinationNetwork: "STARKNET_MAINNET",
      destinationToken: "ETH",
      amount: 0.1,
      destinationAddress: "0xabc",
      sourceAddress: "0xdef",
      refuel: true,
      slippage: "1.5",
      referenceId: "ref-123",
    });
    expect(fetchSpy).toHaveBeenCalledWith(
      "https://api.layerswap.io/api/v2/swaps",
      expect.objectContaining({ method: "POST" })
    );
    const body = JSON.parse(fetchSpy.mock.calls[0]![1]!.body as string);
    expect(body.source_network).toBe("ETHEREUM_MAINNET");
    expect(body.destination_address).toBe("0xabc");
    expect(body.source_address).toBe("0xdef");
    expect(body.refuel).toBe(true);
    expect(body.slippage).toBe("1.5");
    expect(body.reference_id).toBe("ref-123");
  });

  it("getSwaps sends address query param", async () => {
    const api = new LayerSwapApi({ apiKey: "key" });
    await api.getSwaps({ address: "0xabc", page: 2, includeExpired: true });
    const url = fetchSpy.mock.calls[0]![0] as string;
    expect(url).toContain("address=0xabc");
    expect(url).toContain("page=2");
    expect(url).toContain("include_expired=true");
  });

  it("getSwap uses swap ID in path", async () => {
    fetchSpy = mockFetch(200, {
      data: { swap: { id: "swap-123" }, deposit_actions: [], quote: {} },
      error: null,
    });
    vi.stubGlobal("fetch", fetchSpy);
    const api = new LayerSwapApi({ apiKey: "key" });
    await api.getSwap("swap-123");
    const url = fetchSpy.mock.calls[0]![0] as string;
    expect(url).toContain("/api/v2/swaps/swap-123");
  });

  it("getSwapByTransactionHash uses hash in path", async () => {
    fetchSpy = mockFetch(200, {
      data: { swap: { id: "s1" }, deposit_actions: [], quote: {} },
      error: null,
    });
    vi.stubGlobal("fetch", fetchSpy);
    const api = new LayerSwapApi({ apiKey: "key" });
    await api.getSwapByTransactionHash("0xtxhash");
    const url = fetchSpy.mock.calls[0]![0] as string;
    expect(url).toContain("/api/v2/swaps/by_transaction_hash/0xtxhash");
  });

  it("getDepositActions sends source_address param", async () => {
    const api = new LayerSwapApi({ apiKey: "key" });
    await api.getDepositActions("swap-1", "0xsender");
    const url = fetchSpy.mock.calls[0]![0] as string;
    expect(url).toContain("/api/v2/swaps/swap-1/deposit_actions");
    expect(url).toContain("source_address=0xsender");
  });

  it("speedUpDeposit sends POST with transaction_id", async () => {
    fetchSpy = mockFetch(200, { data: {}, error: null });
    vi.stubGlobal("fetch", fetchSpy);
    const api = new LayerSwapApi({ apiKey: "key" });
    await api.speedUpDeposit("swap-1", "0xtxhash");
    const url = fetchSpy.mock.calls[0]![0] as string;
    expect(url).toContain("/api/v2/swaps/swap-1/deposit_speedup");
    const body = JSON.parse(fetchSpy.mock.calls[0]![1]!.body as string);
    expect(body.transaction_id).toBe("0xtxhash");
  });

  // ---- Status ----

  it("health calls correct endpoint", async () => {
    fetchSpy = mockFetch(200, { data: {}, error: null });
    vi.stubGlobal("fetch", fetchSpy);
    const api = new LayerSwapApi({ apiKey: "key" });
    await api.health();
    const url = fetchSpy.mock.calls[0]![0] as string;
    expect(url).toContain("/api/v2/health");
  });

  it("getTransactionStatus sends correct params", async () => {
    fetchSpy = mockFetch(200, {
      data: { network: "ETHEREUM_MAINNET", transaction_id: "0xhash", is_found: true, is_completed: false },
      error: null,
    });
    vi.stubGlobal("fetch", fetchSpy);
    const api = new LayerSwapApi({ apiKey: "key" });
    const result = await api.getTransactionStatus({
      network: "ETHEREUM_MAINNET",
      transactionId: "0xhash",
    });
    const url = fetchSpy.mock.calls[0]![0] as string;
    expect(url).toContain("network=ETHEREUM_MAINNET");
    expect(url).toContain("transaction_id=0xhash");
    expect(result.is_found).toBe(true);
  });

  // ---- POST Content-Type ----

  it("POST requests include Content-Type header", async () => {
    fetchSpy = mockFetch(200, { data: {}, error: null });
    vi.stubGlobal("fetch", fetchSpy);
    const api = new LayerSwapApi({ apiKey: "key" });
    await api.speedUpDeposit("s1", "tx1");
    expect(fetchSpy).toHaveBeenCalledWith(
      expect.any(String),
      expect.objectContaining({
        headers: expect.objectContaining({ "Content-Type": "application/json" }),
      })
    );
  });
});
