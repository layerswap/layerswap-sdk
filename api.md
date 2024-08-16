# Shared

Types:

- <code><a href="./src/resources/shared.ts">Network</a></code>
- <code><a href="./src/resources/shared.ts">Token</a></code>

# Health

Methods:

- <code title="get /api/v2/health">client.health.<a href="./src/resources/health.ts">retrieve</a>() -> void</code>

# Swaps

Types:

- <code><a href="./src/resources/swaps/swaps.ts">PreparedSwapResponse</a></code>
- <code><a href="./src/resources/swaps/swaps.ts">Swap</a></code>
- <code><a href="./src/resources/swaps/swaps.ts">SwapQuoteResponse</a></code>
- <code><a href="./src/resources/swaps/swaps.ts">SwapResponse</a></code>
- <code><a href="./src/resources/swaps/swaps.ts">TokenWithAmount</a></code>
- <code><a href="./src/resources/swaps/swaps.ts">SwapCreateResponse</a></code>
- <code><a href="./src/resources/swaps/swaps.ts">SwapRetrieveResponse</a></code>
- <code><a href="./src/resources/swaps/swaps.ts">SwapListResponse</a></code>

Methods:

- <code title="post /api/v2/swaps">client.swaps.<a href="./src/resources/swaps/swaps.ts">create</a>({ ...params }) -> SwapCreateResponse</code>
- <code title="get /api/v2/swaps/{swapId}">client.swaps.<a href="./src/resources/swaps/swaps.ts">retrieve</a>(swapId, { ...params }) -> SwapRetrieveResponse</code>
- <code title="get /api/v2/swaps">client.swaps.<a href="./src/resources/swaps/swaps.ts">list</a>({ ...params }) -> SwapListResponse</code>

## DepositActions

Types:

- <code><a href="./src/resources/swaps/deposit-actions.ts">ListTransferDepositAction</a></code>

Methods:

- <code title="get /api/v2/swaps/{swapId}/deposit_actions">client.swaps.depositActions.<a href="./src/resources/swaps/deposit-actions.ts">list</a>(swapId, { ...params }) -> ListTransferDepositAction</code>

## Limits

Types:

- <code><a href="./src/resources/swaps/limits.ts">LimitListResponse</a></code>

Methods:

- <code title="get /api/v2/limits">client.swaps.limits.<a href="./src/resources/swaps/limits.ts">list</a>({ ...params }) -> LimitListResponse</code>

## Quote

Types:

- <code><a href="./src/resources/swaps/quote.ts">Quote</a></code>
- <code><a href="./src/resources/swaps/quote.ts">QuoteRetrieveResponse</a></code>

Methods:

- <code title="get /api/v2/quote">client.swaps.quote.<a href="./src/resources/swaps/quote.ts">retrieve</a>({ ...params }) -> QuoteRetrieveResponse</code>

# Networks

Types:

- <code><a href="./src/resources/networks/networks.ts">NetworkListResponse</a></code>

Methods:

- <code title="get /api/v2/networks">client.networks.<a href="./src/resources/networks/networks.ts">list</a>({ ...params }) -> NetworkListResponse</code>

## Sources

Types:

- <code><a href="./src/resources/networks/sources.ts">SourceListResponse</a></code>

Methods:

- <code title="get /api/v2/sources">client.networks.sources.<a href="./src/resources/networks/sources.ts">list</a>({ ...params }) -> SourceListResponse</code>

## Destinations

Types:

- <code><a href="./src/resources/networks/destinations.ts">DestinationListResponse</a></code>

Methods:

- <code title="get /api/v2/destinations">client.networks.destinations.<a href="./src/resources/networks/destinations.ts">list</a>({ ...params }) -> DestinationListResponse</code>
