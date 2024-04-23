// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'Layerswap/core';
import { APIResource } from 'Layerswap/resource';
import * as WithdrawalNetworksAPI from 'Layerswap/resources/exchanges/withdrawal-networks';
import * as Shared from 'Layerswap/resources/shared';

export class WithdrawalNetworks extends APIResource {
  list(
    query: WithdrawalNetworkListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.NetworkToken> {
    return this._client.get('/api/v2/exchange_withdrawal_networks', { query, ...options });
  }
}

export interface WithdrawalNetworkListParams {
  destination_network: string;

  /**
   * Exchange from where you are transfering funds.
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

export namespace WithdrawalNetworks {
  export import WithdrawalNetworkListParams = WithdrawalNetworksAPI.WithdrawalNetworkListParams;
}
