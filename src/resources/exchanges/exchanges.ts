// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'Layerswap/core';
import { APIResource } from 'Layerswap/resource';
import * as ExchangesAPI from 'Layerswap/resources/exchanges/exchanges';
import * as DepositNetworksAPI from 'Layerswap/resources/exchanges/deposit-networks';
import * as DestinationNetworksAPI from 'Layerswap/resources/exchanges/destination-networks';
import * as SourceNetworksAPI from 'Layerswap/resources/exchanges/source-networks';
import * as WithdrawalNetworksAPI from 'Layerswap/resources/exchanges/withdrawal-networks';

export class Exchanges extends APIResource {
  depositNetworks: DepositNetworksAPI.DepositNetworks = new DepositNetworksAPI.DepositNetworks(this._client);
  withdrawalNetworks: WithdrawalNetworksAPI.WithdrawalNetworks = new WithdrawalNetworksAPI.WithdrawalNetworks(
    this._client,
  );
  destinationNetworks: DestinationNetworksAPI.DestinationNetworks =
    new DestinationNetworksAPI.DestinationNetworks(this._client);
  sourceNetworks: SourceNetworksAPI.SourceNetworks = new SourceNetworksAPI.SourceNetworks(this._client);

  /**
   * Returns the list of exchanges supported in Layerswap
   */
  list(options?: Core.RequestOptions): Core.APIPromise<APIResponseListExchangeWithTokenGroupsModel> {
    return this._client.get('/api/v2-alpha/exchanges', options);
  }
}

export interface APIResponseListExchangeWithTokenGroupsModel {
  data?: Array<APIResponseListExchangeWithTokenGroupsModel.Data> | null;

  error?: APIResponseListExchangeWithTokenGroupsModel.Error;
}

export namespace APIResponseListExchangeWithTokenGroupsModel {
  export interface Data {
    display_name?: string;

    logo?: string;

    metadata?: Data.Metadata;

    name?: string;

    token_groups?: Array<Data.TokenGroup>;
  }

  export namespace Data {
    export interface Metadata {
      listing_date?: string;

      o_auth?: Metadata.OAuth;
    }

    export namespace Metadata {
      export interface OAuth {
        authorize_url?: string;

        connect_url?: string;
      }
    }

    export interface TokenGroup {
      logo?: string;

      symbol?: string;
    }
  }

  export interface Error {
    code?: string;

    message?: string;

    metadata?: Record<string, unknown>;
  }
}

export namespace Exchanges {
  export import APIResponseListExchangeWithTokenGroupsModel = ExchangesAPI.APIResponseListExchangeWithTokenGroupsModel;
  export import DepositNetworks = DepositNetworksAPI.DepositNetworks;
  export import DepositNetworkListParams = DepositNetworksAPI.DepositNetworkListParams;
  export import WithdrawalNetworks = WithdrawalNetworksAPI.WithdrawalNetworks;
  export import WithdrawalNetworkListParams = WithdrawalNetworksAPI.WithdrawalNetworkListParams;
  export import DestinationNetworks = DestinationNetworksAPI.DestinationNetworks;
  export import DestinationNetworkListParams = DestinationNetworksAPI.DestinationNetworkListParams;
  export import SourceNetworks = SourceNetworksAPI.SourceNetworks;
  export import SourceNetworkListParams = SourceNetworksAPI.SourceNetworkListParams;
}
