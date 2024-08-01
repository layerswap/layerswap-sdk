// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as DestinationsAPI from './destinations';
import * as SwapsAPI from '../swaps/swaps';

export class Destinations extends APIResource {
  list(
    query?: DestinationListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SwapsAPI.NetworkWithRouteTokens>;
  list(options?: Core.RequestOptions): Core.APIPromise<SwapsAPI.NetworkWithRouteTokens>;
  list(
    query: DestinationListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<SwapsAPI.NetworkWithRouteTokens> {
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
