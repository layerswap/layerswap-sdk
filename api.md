# Shared

Types:

- <code><a href="./src/resources/shared.ts">APIResponseListNetworkTokenWithFeeModel</a></code>
- <code><a href="./src/resources/shared.ts">APIResponseListNetworkWithRouteTokensModel</a></code>

# Exchanges

Types:

- <code><a href="./src/resources/exchanges/exchanges.ts">APIResponseListExchangeWithTokenGroupsModel</a></code>

Methods:

- <code title="get /api/v2-alpha/exchanges">client.exchanges.<a href="./src/resources/exchanges/exchanges.ts">list</a>() -> APIResponseListExchangeWithTokenGroupsModel</code>

## DepositNetworks

Methods:

- <code title="get /api/v2-alpha/exchange_deposit_networks">client.exchanges.depositNetworks.<a href="./src/resources/exchanges/deposit-networks.ts">list</a>({ ...params }) -> APIResponseListNetworkTokenWithFeeModel</code>

## WithdrawalNetworks

Methods:

- <code title="get /api/v2-alpha/exchange_withdrawal_networks">client.exchanges.withdrawalNetworks.<a href="./src/resources/exchanges/withdrawal-networks.ts">list</a>({ ...params }) -> APIResponseListNetworkTokenWithFeeModel</code>

## DestinationNetworks

Methods:

- <code title="get /api/v2-alpha/exchange_destination_networks">client.exchanges.destinationNetworks.<a href="./src/resources/exchanges/destination-networks.ts">list</a>({ ...params }) -> APIResponseListNetworkWithRouteTokensModel</code>

## SourceNetworks

Methods:

- <code title="get /api/v2-alpha/exchange_source_networks">client.exchanges.sourceNetworks.<a href="./src/resources/exchanges/source-networks.ts">list</a>({ ...params }) -> APIResponseListNetworkWithRouteTokensModel</code>

# PartnerEndpointsV2

## Networks

Types:

- <code><a href="./src/resources/partner-endpoints-v2/networks.ts">APIResponseListNetworkWithTokensModel</a></code>

Methods:

- <code title="get /api/v2-alpha/networks">client.partnerEndpointsV2.networks.<a href="./src/resources/partner-endpoints-v2/networks.ts">list</a>() -> APIResponseListNetworkWithTokensModel</code>

## Sources

Methods:

- <code title="get /api/v2-alpha/sources">client.partnerEndpointsV2.sources.<a href="./src/resources/partner-endpoints-v2/sources.ts">list</a>({ ...params }) -> APIResponseListNetworkWithRouteTokensModel</code>

## Destinations

Methods:

- <code title="get /api/v2-alpha/destinations">client.partnerEndpointsV2.destinations.<a href="./src/resources/partner-endpoints-v2/destinations.ts">list</a>({ ...params }) -> APIResponseListNetworkWithRouteTokensModel</code>

## Limits

Types:

- <code><a href="./src/resources/partner-endpoints-v2/limits.ts">APIResponseSwapRouteLimitsModel</a></code>

Methods:

- <code title="get /api/v2-alpha/limits">client.partnerEndpointsV2.limits.<a href="./src/resources/partner-endpoints-v2/limits.ts">list</a>({ ...params }) -> APIResponseSwapRouteLimitsModel</code>

## Quote

Types:

- <code><a href="./src/resources/partner-endpoints-v2/quote.ts">APIResponseListSwapQuoteResponse</a></code>

Methods:

- <code title="get /api/v2-alpha/quote">client.partnerEndpointsV2.quote.<a href="./src/resources/partner-endpoints-v2/quote.ts">retrieve</a>({ ...params }) -> APIResponseListSwapQuoteResponse</code>

# Swaps

Types:

- <code><a href="./src/resources/swaps.ts">APIResponseSwapModel</a></code>
- <code><a href="./src/resources/swaps.ts">APIResponseSwapResponse</a></code>

Methods:

- <code title="post /api/v2-alpha/swaps">client.swaps.<a href="./src/resources/swaps.ts">create</a>({ ...params }) -> APIResponseSwapResponse</code>
- <code title="get /api/v2-alpha/swaps/{swapId}">client.swaps.<a href="./src/resources/swaps.ts">retrieve</a>(swapId) -> APIResponseSwapResponse</code>
- <code title="get /api/v2-alpha/swaps">client.swaps.<a href="./src/resources/swaps.ts">list</a>({ ...params }) -> APIResponseSwapModel</code>
