// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'Layerswap/core';
import { APIResource } from 'Layerswap/resource';
import * as DepositNetworksAPI from 'Layerswap/resources/exchanges/deposit-networks';
import * as Shared from 'Layerswap/resources/shared';

export class DepositNetworks extends APIResource {
  list(
    query: DepositNetworkListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.APIResponseListNetworkTokenWithFeeModel> {
    return this._client.get('/api/v2-alpha/exchange_deposit_networks', { query, ...options });
  }
}

export interface DepositNetworkListParams {
  amount: number;

  destination_network: string;

  /**
   * Exchange from where you are transfering funds. Example: BINANCE, LSCEX (sandbox)
   */
  destination_token: string;

  /**
   * Exchange from where you are transfering funds. Example: BINANCE, LSCEX (sandbox)
   */
  source_exchange: string;

  /**
   * Token group symbol. Used to group assets such as bridged USDC and Circle USDC.
   * Example: ETH, USDC
   */
  source_token_group: string;
}

export namespace DepositNetworks {
  export import DepositNetworkListParams = DepositNetworksAPI.DepositNetworkListParams;
}
