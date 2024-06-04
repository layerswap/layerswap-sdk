# Exchanges

## DepositNetworks

## WithdrawalNetworks

## SourceNetworks

Types:

- <code><a href="./src/resources/exchanges/source-networks.ts">SourceNetwork</a></code>

## DestinationNetworks

Types:

- <code><a href="./src/resources/exchanges/destination-networks.ts">DestinationNetwork</a></code>

# Networks

Types:

- <code><a href="./src/resources/networks.ts">Network</a></code>

Methods:

- <code title="get /api/v2/networks">client.networks.<a href="./src/resources/networks.ts">list</a>() -> Network</code>

# Sources

Types:

- <code><a href="./src/resources/sources.ts">Source</a></code>

Methods:

- <code title="get /api/v2/sources">client.sources.<a href="./src/resources/sources.ts">list</a>({ ...params }) -> SourceNetwork</code>

# Destinations

Types:

- <code><a href="./src/resources/destinations.ts">Destination</a></code>

Methods:

- <code title="get /api/v2/destinations">client.destinations.<a href="./src/resources/destinations.ts">list</a>({ ...params }) -> SourceNetwork</code>

# Limits

Types:

- <code><a href="./src/resources/limits.ts">Limit</a></code>

Methods:

- <code title="get /api/v2/limits">client.limits.<a href="./src/resources/limits.ts">list</a>({ ...params }) -> Limit</code>

# Quote

Types:

- <code><a href="./src/resources/quote.ts">Quote</a></code>

Methods:

- <code title="get /api/v2/quote">client.quote.<a href="./src/resources/quote.ts">retrieve</a>({ ...params }) -> Quote</code>

# Swaps

Types:

- <code><a href="./src/resources/swaps.ts">ListSwap</a></code>
- <code><a href="./src/resources/swaps.ts">PreparedSwap</a></code>
- <code><a href="./src/resources/swaps.ts">Swap</a></code>

Methods:

- <code title="post /api/v2/swaps">client.swaps.<a href="./src/resources/swaps.ts">create</a>({ ...params }) -> PreparedSwap</code>
- <code title="get /api/v2/swaps/{swapId}">client.swaps.<a href="./src/resources/swaps.ts">retrieve</a>(swapId, { ...params }) -> Swap</code>
- <code title="get /api/v2/swaps">client.swaps.<a href="./src/resources/swaps.ts">list</a>({ ...params }) -> ListSwap</code>
