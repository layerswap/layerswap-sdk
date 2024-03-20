// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'Layerswap/core';
import { APIResource } from 'Layerswap/resource';
import * as SourceNetworksAPI from 'Layerswap/resources/exchanges/source-networks';
import * as Shared from 'Layerswap/resources/shared';

export class SourceNetworks extends APIResource {
  list(
    query: SourceNetworkListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.APIResponseListNetworkWithRouteTokensModel> {
    return this._client.get('/api/v2-alpha/exchange_source_networks', { query, ...options });
  }
}

export interface SourceNetworkListParams {
  destination_token_group: string;

  include_unavailable?: boolean;

  include_unmatched?: boolean;
}

export namespace SourceNetworks {
  export import SourceNetworkListParams = SourceNetworksAPI.SourceNetworkListParams;
}
