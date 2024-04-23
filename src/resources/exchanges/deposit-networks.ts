// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'Layerswap/core';
import { APIResource } from 'Layerswap/resource';
import * as DepositNetworksAPI from 'Layerswap/resources/exchanges/deposit-networks';
import * as Shared from 'Layerswap/resources/shared';

export class DepositNetworks extends APIResource {
  list(query: DepositNetworkListParams, options?: Core.RequestOptions): Core.APIPromise<Shared.NetworkToken> {
    return this._client.get('/api/v2/exchange_deposit_networks', { query, ...options });
  }
}

export interface DepositNetworkListParams {
  destination_exchange: string;

  destination_token_group: string;

  source_network: string;

  source_token: string;
}

export namespace DepositNetworks {
  export import DepositNetworkListParams = DepositNetworksAPI.DepositNetworkListParams;
}
