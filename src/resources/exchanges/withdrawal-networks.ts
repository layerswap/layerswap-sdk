// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'Layerswap/core';
import { APIResource } from 'Layerswap/resource';
import * as WithdrawalNetworksAPI from 'Layerswap/resources/exchanges/withdrawal-networks';
import * as Shared from 'Layerswap/resources/shared';

export class WithdrawalNetworks extends APIResource {
  list(
    query: WithdrawalNetworkListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.APIResponseListNetworkTokenWithFeeModel> {
    return this._client.get('/api/v2-alpha/exchange_withdrawal_networks', { query, ...options });
  }
}

export interface WithdrawalNetworkListParams {
  amount: number;

  destination_exchange: string;

  destination_token_group: string;

  source_network: string;

  source_token: string;
}

export namespace WithdrawalNetworks {
  export import WithdrawalNetworkListParams = WithdrawalNetworksAPI.WithdrawalNetworkListParams;
}
