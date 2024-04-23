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
  sourceNetworks: SourceNetworksAPI.SourceNetworks = new SourceNetworksAPI.SourceNetworks(this._client);
  destinationNetworks: DestinationNetworksAPI.DestinationNetworks =
    new DestinationNetworksAPI.DestinationNetworks(this._client);

  /**
   * Returns the list of exchanges supported in Layerswap
   */
  list(options?: Core.RequestOptions): Core.APIPromise<ExchangeWithTokenGroups> {
    return this._client.get('/api/v2/exchanges', options);
  }
}

export interface ExchangeWithTokenGroups {
  data?: Array<ExchangeWithTokenGroups.Data> | null;

  error?: ExchangeWithTokenGroups.Error;
}

export namespace ExchangeWithTokenGroups {
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

      oauth?: Metadata.OAuth;
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
  export import ExchangeWithTokenGroups = ExchangesAPI.ExchangeWithTokenGroups;
  export import DepositNetworks = DepositNetworksAPI.DepositNetworks;
  export import DepositNetworkListParams = DepositNetworksAPI.DepositNetworkListParams;
  export import WithdrawalNetworks = WithdrawalNetworksAPI.WithdrawalNetworks;
  export import WithdrawalNetworkListParams = WithdrawalNetworksAPI.WithdrawalNetworkListParams;
  export import SourceNetworks = SourceNetworksAPI.SourceNetworks;
  export import SourceNetworkListParams = SourceNetworksAPI.SourceNetworkListParams;
  export import DestinationNetworks = DestinationNetworksAPI.DestinationNetworks;
  export import DestinationNetworkListParams = DestinationNetworksAPI.DestinationNetworkListParams;
}
