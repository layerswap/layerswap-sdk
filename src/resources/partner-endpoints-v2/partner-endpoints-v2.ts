// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from 'Layerswap/resource';
import * as DestinationsAPI from 'Layerswap/resources/partner-endpoints-v2/destinations';
import * as LimitsAPI from 'Layerswap/resources/partner-endpoints-v2/limits';
import * as NetworksAPI from 'Layerswap/resources/partner-endpoints-v2/networks';
import * as QuoteAPI from 'Layerswap/resources/partner-endpoints-v2/quote';
import * as SourcesAPI from 'Layerswap/resources/partner-endpoints-v2/sources';

export class PartnerEndpointsV2 extends APIResource {
  networks: NetworksAPI.Networks = new NetworksAPI.Networks(this._client);
  sources: SourcesAPI.Sources = new SourcesAPI.Sources(this._client);
  destinations: DestinationsAPI.Destinations = new DestinationsAPI.Destinations(this._client);
  limits: LimitsAPI.Limits = new LimitsAPI.Limits(this._client);
  quote: QuoteAPI.Quote = new QuoteAPI.Quote(this._client);
}

export namespace PartnerEndpointsV2 {
  export import Networks = NetworksAPI.Networks;
  export import APIResponseListNetworkWithTokensModel = NetworksAPI.APIResponseListNetworkWithTokensModel;
  export import Sources = SourcesAPI.Sources;
  export import SourceListParams = SourcesAPI.SourceListParams;
  export import Destinations = DestinationsAPI.Destinations;
  export import DestinationListParams = DestinationsAPI.DestinationListParams;
  export import Limits = LimitsAPI.Limits;
  export import APIResponseSwapRouteLimitsModel = LimitsAPI.APIResponseSwapRouteLimitsModel;
  export import LimitListParams = LimitsAPI.LimitListParams;
  export import Quote = QuoteAPI.Quote;
  export import APIResponseListSwapQuoteResponse = QuoteAPI.APIResponseListSwapQuoteResponse;
  export import QuoteRetrieveParams = QuoteAPI.QuoteRetrieveParams;
}
