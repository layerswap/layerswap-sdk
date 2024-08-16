# Shared

Types:

- <code><a href="./src/resources/shared.ts">Network</a></code>
- <code><a href="./src/resources/shared.ts">Token</a></code>

# Health

Methods:

- <code title="get /api/v2/health">client.health.<a href="./src/resources/health.ts">retrieve</a>() -> void</code>

# Swaps

Types:

- <code><a href="./src/resources/swaps/swaps.ts">ListSwap</a></code>
- <code><a href="./src/resources/swaps/swaps.ts">NetworkWithRouteTokens</a></code>
- <code><a href="./src/resources/swaps/swaps.ts">NetworkWithTokens</a></code>
- <code><a href="./src/resources/swaps/swaps.ts">PreparedSwap</a></code>
- <code><a href="./src/resources/swaps/swaps.ts">Quote</a></code>
- <code><a href="./src/resources/swaps/swaps.ts">Swap</a></code>
- <code><a href="./src/resources/swaps/swaps.ts">SwapQuote</a></code>
- <code><a href="./src/resources/swaps/swaps.ts">SwapRouteLimits</a></code>

Methods:

- <code title="post /api/v2/swaps">client.swaps.<a href="./src/resources/swaps/swaps.ts">create</a>({ ...params }) -> PreparedSwap</code>
- <code title="get /api/v2/swaps/{swapId}">client.swaps.<a href="./src/resources/swaps/swaps.ts">retrieve</a>(swapId, { ...params }) -> Swap</code>
- <code title="get /api/v2/swaps">client.swaps.<a href="./src/resources/swaps/swaps.ts">list</a>({ ...params }) -> ListSwap</code>

## DepositActions

Types:

- <code><a href="./src/resources/swaps/deposit-actions.ts">ListTransferDepositAction</a></code>

Methods:

- <code title="get /api/v2/swaps/{swapId}/deposit_actions">client.swaps.depositActions.<a href="./src/resources/swaps/deposit-actions.ts">list</a>(swapId, { ...params }) -> ListTransferDepositAction</code>

## Limits

Methods:

- <code title="get /api/v2/limits">client.swaps.limits.<a href="./src/resources/swaps/limits.ts">list</a>({ ...params }) -> SwapRouteLimits</code>

## Quote

Methods:

- <code title="get /api/v2/quote">client.swaps.quote.<a href="./src/resources/swaps/quote.ts">retrieve</a>({ ...params }) -> SwapQuote</code>

# Networks

Methods:

- <code title="get /api/v2/networks">client.networks.<a href="./src/resources/networks/networks.ts">list</a>({ ...params }) -> NetworkWithTokens</code>

## Sources

Methods:

- <code title="get /api/v2/sources">client.networks.sources.<a href="./src/resources/networks/sources.ts">list</a>({ ...params }) -> NetworkWithRouteTokens</code>

## Destinations

Methods:

- <code title="get /api/v2/destinations">client.networks.destinations.<a href="./src/resources/networks/destinations.ts">list</a>({ ...params }) -> NetworkWithRouteTokens</code>
