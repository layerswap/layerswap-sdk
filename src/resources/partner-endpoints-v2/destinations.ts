// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'Layerswap/core';
import { APIResource } from 'Layerswap/resource';
import { isRequestOptions } from 'Layerswap/core';
import * as DestinationsAPI from 'Layerswap/resources/partner-endpoints-v2/destinations';
import * as Shared from 'Layerswap/resources/shared';

export class Destinations extends APIResource {
  list(
    query?: DestinationListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.APIResponseListNetworkWithRouteTokensModel>;
  list(options?: Core.RequestOptions): Core.APIPromise<Shared.APIResponseListNetworkWithRouteTokensModel>;
  list(
    query: DestinationListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.APIResponseListNetworkWithRouteTokensModel> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/api/v2-alpha/destinations', { query, ...options });
  }
}

export interface DestinationListParams {
  include_swaps?: boolean;

  include_unavailable?: boolean;

  include_unmatched?: boolean;

  source_asset?: string;

  source_network?: string;
}

export namespace Destinations {
  export import DestinationListParams = DestinationsAPI.DestinationListParams;
}
