// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'Layerswap/core';
import { APIResource } from 'Layerswap/resource';
import * as DestinationNetworksAPI from 'Layerswap/resources/exchanges/destination-networks';
import * as Shared from 'Layerswap/resources/shared';

export class DestinationNetworks extends APIResource {
  list(
    query: DestinationNetworkListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.APIResponseListNetworkWithRouteTokensModel> {
    return this._client.get('/api/v2-alpha/exchange_destination_networks', { query, ...options });
  }
}

export interface DestinationNetworkListParams {
  source_asset_group: string;

  include_unavailable?: boolean;

  include_unmatched?: boolean;
}

export namespace DestinationNetworks {
  export import DestinationNetworkListParams = DestinationNetworksAPI.DestinationNetworkListParams;
}
