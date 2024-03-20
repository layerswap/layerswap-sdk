// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'Layerswap/core';
import { APIResource } from 'Layerswap/resource';
import * as NetworksAPI from 'Layerswap/resources/partner-endpoints-v2/networks';

export class Networks extends APIResource {
  list(options?: Core.RequestOptions): Core.APIPromise<APIResponseListNetworkWithTokensModel> {
    return this._client.get('/api/v2-alpha/networks', options);
  }
}

export interface APIResponseListNetworkWithTokensModel {
  data?: Array<APIResponseListNetworkWithTokensModel.Data> | null;

  error?: APIResponseListNetworkWithTokensModel.Error;
}

export namespace APIResponseListNetworkWithTokensModel {
  export interface Data {
    account_explorer_template?: string;

    chain_id?: string | null;

    display_name?: string;

    logo?: string;

    metadata?: Data.Metadata;

    name?: string;

    node_url?: string | null;

    tokens?: Array<Data.Token>;

    transaction_explorer_template?: string;

    type?: string;
  }

  export namespace Data {
    export interface Metadata {
      evm_multi_call_contract?: string | null;

      evm_oracle_contract?: string | null;

      listing_date?: string;
    }

    export interface Token {
      contract?: string | null;

      decimals?: number;

      is_native?: boolean;

      logo?: string;

      precision?: number;

      price_in_usd?: number;

      symbol?: string;
    }
  }

  export interface Error {
    code?: string;

    message?: string;

    metadata?: Record<string, unknown>;
  }
}

export namespace Networks {
  export import APIResponseListNetworkWithTokensModel = NetworksAPI.APIResponseListNetworkWithTokensModel;
}
