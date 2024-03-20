// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'Layerswap/core';
import { APIResource } from 'Layerswap/resource';
import { isRequestOptions } from 'Layerswap/core';
import * as SourcesAPI from 'Layerswap/resources/partner-endpoints-v2/sources';
import * as Shared from 'Layerswap/resources/shared';

export class Sources extends APIResource {
  list(
    query?: SourceListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.APIResponseListNetworkWithRouteTokensModel>;
  list(options?: Core.RequestOptions): Core.APIPromise<Shared.APIResponseListNetworkWithRouteTokensModel>;
  list(
    query: SourceListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.APIResponseListNetworkWithRouteTokensModel> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/api/v2-alpha/sources', { query, ...options });
  }
}

export interface SourceListParams {
  destination_network?: string;

  destination_token?: string;

  include_swaps?: boolean;

  include_unavailable?: boolean;

  include_unmatched?: boolean;
}

export namespace Sources {
  export import SourceListParams = SourcesAPI.SourceListParams;
}
