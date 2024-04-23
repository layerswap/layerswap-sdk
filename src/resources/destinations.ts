// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'Layerswap/core';
import { APIResource } from 'Layerswap/resource';
import { isRequestOptions } from 'Layerswap/core';
import * as DestinationsAPI from 'Layerswap/resources/destinations';
import * as Shared from 'Layerswap/resources/shared';

export class Destinations extends APIResource {
  list(
    query?: DestinationListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.NetworkWithRouteTokens>;
  list(options?: Core.RequestOptions): Core.APIPromise<Shared.NetworkWithRouteTokens>;
  list(
    query: DestinationListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.NetworkWithRouteTokens> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/api/v2/destinations', { query, ...options });
  }
}

export interface DestinationListParams {
  include_swaps?: boolean;

  include_unavailable?: boolean;

  include_unmatched?: boolean;

  source_network?: string;

  source_token?: string;
}

export namespace Destinations {
  export import DestinationListParams = DestinationsAPI.DestinationListParams;
}
