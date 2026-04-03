/**
 * Integration tests — hit the real LayerSwap API to detect response shape changes.
 *
 * These tests validate that the API still returns data matching our type definitions.
 * They do NOT create swaps or mutate any state — only read-only GET endpoints are called.
 *
 * Run with:
 *   LAYERSWAP_API_KEY="..." npm test -- tests/integration.test.ts
 *
 * Skipped automatically when LAYERSWAP_API_KEY is not set.
 */
import { describe, it, expect } from "vitest";
import { LayerSwapApi } from "../src/index";
import type {
  LsNetwork,
  LsToken,
  LsRoute,
  LsLimits,
  LsQuote,
  LsDetailedQuote,
} from "../src/index";

const API_KEY = process.env["LAYERSWAP_API_KEY"] ?? "";
const canRun = API_KEY.length > 0;

// Known route for testing — ETH on Ethereum → Starknet
const SOURCE_NETWORK = "ETHEREUM_MAINNET";
const SOURCE_TOKEN = "ETH";
const DEST_NETWORK = "STARKNET_MAINNET";
const DEST_TOKEN = "ETH";

function createApi(): LayerSwapApi {
  return new LayerSwapApi({ apiKey: API_KEY });
}

// ---- Shape validators ----

function assertToken(token: LsToken, label: string) {
  expect(token, `${label}: token is defined`).toBeDefined();
  expect(typeof token.symbol, `${label}.symbol`).toBe("string");
  expect(typeof token.logo, `${label}.logo`).toBe("string");
  expect(typeof token.decimals, `${label}.decimals`).toBe("number");
  expect(typeof token.price_in_usd, `${label}.price_in_usd`).toBe("number");
  expect(typeof token.precision, `${label}.precision`).toBe("number");
  expect(typeof token.listing_date, `${label}.listing_date`).toBe("string");
  expect(
    token.contract === null || typeof token.contract === "string",
    `${label}.contract`
  ).toBe(true);
}

function assertNetwork(network: LsNetwork, label: string) {
  expect(network, `${label}: network is defined`).toBeDefined();
  expect(typeof network.name, `${label}.name`).toBe("string");
  expect(typeof network.display_name, `${label}.display_name`).toBe("string");
  expect(typeof network.logo, `${label}.logo`).toBe("string");
  expect(typeof network.type, `${label}.type`).toBe("string");
  expect(typeof network.transaction_explorer_template, `${label}.transaction_explorer_template`).toBe("string");
  expect(typeof network.account_explorer_template, `${label}.account_explorer_template`).toBe("string");
  expect(
    network.chain_id === null || typeof network.chain_id === "string",
    `${label}.chain_id`
  ).toBe(true);
}

function assertRoute(route: LsRoute, label: string) {
  assertNetwork(route, label);
  expect(Array.isArray(route.tokens), `${label}.tokens is array`).toBe(true);
  expect(route.tokens.length, `${label}.tokens is not empty`).toBeGreaterThan(0);
  assertToken(route.tokens[0]!, `${label}.tokens[0]`);
}

function assertQuote(quote: LsQuote, label: string) {
  assertNetwork(quote.source_network, `${label}.source_network`);
  assertToken(quote.source_token, `${label}.source_token`);
  assertNetwork(quote.destination_network, `${label}.destination_network`);
  assertToken(quote.destination_token, `${label}.destination_token`);
  expect(typeof quote.receive_amount, `${label}.receive_amount`).toBe("number");
  expect(typeof quote.min_receive_amount, `${label}.min_receive_amount`).toBe("number");
  expect(typeof quote.total_fee, `${label}.total_fee`).toBe("number");
  expect(typeof quote.total_fee_in_usd, `${label}.total_fee_in_usd`).toBe("number");
  expect(typeof quote.blockchain_fee, `${label}.blockchain_fee`).toBe("number");
  expect(typeof quote.service_fee, `${label}.service_fee`).toBe("number");
  expect(typeof quote.avg_completion_time, `${label}.avg_completion_time`).toBe("string");
}

// ---- Tests ----

describe.skipIf(!canRun)("Integration: real API", () => {
  const api = createApi();

  it("health — API is reachable", async () => {
    await api.health();
  });

  it("getNetworks — returns networks with expected shape", async () => {
    const networks = await api.getNetworks();
    expect(Array.isArray(networks)).toBe(true);
    expect(networks.length).toBeGreaterThan(0);

    const eth = networks.find((n) => n.name === SOURCE_NETWORK);
    expect(eth, `${SOURCE_NETWORK} should exist`).toBeDefined();
    assertNetwork(eth!, "networks[ETH_MAINNET]");

    // Networks endpoint returns tokens array
    if (eth!.tokens && eth!.tokens.length > 0) {
      assertToken(eth!.tokens[0]!, "networks[ETH_MAINNET].tokens[0]");
    }
  });

  it("getSources — returns routes with tokens", async () => {
    const sources = await api.getSources({
      destinationNetwork: DEST_NETWORK,
      destinationToken: DEST_TOKEN,
    });
    expect(Array.isArray(sources)).toBe(true);
    expect(sources.length).toBeGreaterThan(0);
    assertRoute(sources[0]!, "sources[0]");
  });

  it("getDestinations — returns routes with tokens", async () => {
    const destinations = await api.getDestinations({
      sourceNetwork: SOURCE_NETWORK,
      sourceToken: SOURCE_TOKEN,
    });
    expect(Array.isArray(destinations)).toBe(true);
    expect(destinations.length).toBeGreaterThan(0);
    assertRoute(destinations[0]!, "destinations[0]");
  });

  it("getLimits — returns min/max amounts", async () => {
    const limits = await api.getLimits({
      sourceNetwork: SOURCE_NETWORK,
      sourceToken: SOURCE_TOKEN,
      destinationNetwork: DEST_NETWORK,
      destinationToken: DEST_TOKEN,
      amount: 1,
    });
    expect(typeof limits.min_amount, "min_amount").toBe("number");
    expect(typeof limits.max_amount, "max_amount").toBe("number");
    expect(limits.min_amount).toBeGreaterThan(0);
    expect(limits.max_amount).toBeGreaterThan(limits.min_amount);
  });

  it("getQuote — returns quote with fee breakdown", async () => {
    const quote = await api.getQuote({
      sourceNetwork: SOURCE_NETWORK,
      sourceToken: SOURCE_TOKEN,
      destinationNetwork: DEST_NETWORK,
      destinationToken: DEST_TOKEN,
      amount: 0.1,
    });
    assertQuote(quote, "quote");
    expect(quote.receive_amount).toBeGreaterThan(0);
  });

  it("getDetailedQuote — returns array of detailed quotes", async () => {
    const detailed = await api.getDetailedQuote({
      sourceNetwork: SOURCE_NETWORK,
      sourceToken: SOURCE_TOKEN,
      destinationNetwork: DEST_NETWORK,
      destinationToken: DEST_TOKEN,
      amount: 0.1,
    });
    expect(Array.isArray(detailed)).toBe(true);
    expect(detailed.length).toBeGreaterThan(0);

    const first = detailed[0]!;
    expect(typeof first.avg_completion_milliseconds, "avg_completion_milliseconds").toBe("number");
    expect(typeof first.min_amount, "min_amount").toBe("number");
    expect(typeof first.max_amount, "max_amount").toBe("number");
    expect(Array.isArray(first.path), "path is array").toBe(true);
  });

  it("getSources with networkTypes filter", async () => {
    const sources = await api.getSources({
      networkTypes: ["evm"],
    });
    expect(Array.isArray(sources)).toBe(true);
    for (const source of sources) {
      expect(source.type, `${source.name} should be evm`).toBe("evm");
    }
  });

  it("getNetworks with networkTypes filter", async () => {
    const networks = await api.getNetworks({
      networkTypes: ["starknet"],
    });
    expect(Array.isArray(networks)).toBe(true);
    expect(networks.length).toBeGreaterThan(0);
    for (const network of networks) {
      expect(network.type, `${network.name} should be starknet`).toBe("starknet");
    }
  });
});

describe.skipIf(!canRun)("Integration: error handling", () => {
  it("bad API key returns 4xx", async () => {
    const api = new LayerSwapApi({ apiKey: "invalid-key" });
    try {
      await api.getNetworks();
      expect.unreachable("should have thrown");
    } catch (err: unknown) {
      const status = (err as { statusCode: number }).statusCode;
      expect(status).toBeGreaterThanOrEqual(400);
      expect(status).toBeLessThan(500);
    }
  });

  it("invalid route returns error for getLimits", async () => {
    const api = createApi();
    try {
      await api.getLimits({
        sourceNetwork: "NONEXISTENT_NETWORK",
        sourceToken: "FAKE",
        destinationNetwork: "ALSO_FAKE",
        destinationToken: "NOPE",
        amount: 1,
      });
      expect.unreachable("should have thrown");
    } catch (err: unknown) {
      expect((err as { statusCode: number }).statusCode).toBeGreaterThanOrEqual(400);
    }
  });
});
