# Shared

Types:

- <code><a href="./src/resources/shared.ts">NetworkToken</a></code>
- <code><a href="./src/resources/shared.ts">NetworkWithRouteTokens</a></code>

# Exchanges

Types:

- <code><a href="./src/resources/exchanges/exchanges.ts">ExchangeWithTokenGroups</a></code>

Methods:

- <code title="get /api/v2/exchanges">client.exchanges.<a href="./src/resources/exchanges/exchanges.ts">list</a>() -> ExchangeWithTokenGroups</code>

## DepositNetworks

Methods:

- <code title="get /api/v2/exchange_deposit_networks">client.exchanges.depositNetworks.<a href="./src/resources/exchanges/deposit-networks.ts">list</a>({ ...params }) -> NetworkToken</code>

## WithdrawalNetworks

Methods:

- <code title="get /api/v2/exchange_withdrawal_networks">client.exchanges.withdrawalNetworks.<a href="./src/resources/exchanges/withdrawal-networks.ts">list</a>({ ...params }) -> NetworkToken</code>

## SourceNetworks

Methods:

- <code title="get /api/v2/exchange_source_networks">client.exchanges.sourceNetworks.<a href="./src/resources/exchanges/source-networks.ts">list</a>({ ...params }) -> NetworkWithRouteTokens</code>

## DestinationNetworks

Methods:

- <code title="get /api/v2/exchange_destination_networks">client.exchanges.destinationNetworks.<a href="./src/resources/exchanges/destination-networks.ts">list</a>({ ...params }) -> NetworkWithRouteTokens</code>

# Networks

Types:

- <code><a href="./src/resources/networks.ts">NetworkWithTokens</a></code>

Methods:

- <code title="get /api/v2/networks">client.networks.<a href="./src/resources/networks.ts">list</a>() -> NetworkWithTokens</code>

# Sources

Methods:

- <code title="get /api/v2/sources">client.sources.<a href="./src/resources/sources.ts">list</a>({ ...params }) -> NetworkWithRouteTokens</code>

# Destinations

Methods:

- <code title="get /api/v2/destinations">client.destinations.<a href="./src/resources/destinations.ts">list</a>({ ...params }) -> NetworkWithRouteTokens</code>

# Limits

Types:

- <code><a href="./src/resources/limits.ts">SwapRouteLimits</a></code>

Methods:

- <code title="get /api/v2/limits">client.limits.<a href="./src/resources/limits.ts">list</a>({ ...params }) -> SwapRouteLimits</code>

# Quotes

Types:

- <code><a href="./src/resources/quotes.ts">SwapQuoteResponse</a></code>

Methods:

- <code title="get /api/v2/quote">client.quotes.<a href="./src/resources/quotes.ts">retrieve</a>({ ...params }) -> SwapQuoteResponse</code>

# Swaps

Types:

- <code><a href="./src/resources/swaps.ts">PreparedSwapResponse</a></code>
- <code><a href="./src/resources/swaps.ts">SwapListResponse</a></code>
- <code><a href="./src/resources/swaps.ts">SwapResponse</a></code>

Methods:

- <code title="post /api/v2/swaps">client.swaps.<a href="./src/resources/swaps.ts">create</a>({ ...params }) -> PreparedSwapResponse</code>
- <code title="get /api/v2/swaps/{swapId}">client.swaps.<a href="./src/resources/swaps.ts">retrieve</a>(swapId, { ...params }) -> SwapResponse</code>
- <code title="get /api/v2/swaps">client.swaps.<a href="./src/resources/swaps.ts">list</a>({ ...params }) -> SwapListResponse</code>
