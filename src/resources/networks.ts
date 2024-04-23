// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'Layerswap/core';
import { APIResource } from 'Layerswap/resource';
import * as NetworksAPI from 'Layerswap/resources/networks';

export class Networks extends APIResource {
  list(options?: Core.RequestOptions): Core.APIPromise<NetworkWithTokens> {
    return this._client.get('/api/v2/networks', options);
  }
}

export interface NetworkWithTokens {
  data?: Array<NetworkWithTokens.Data> | null;

  error?: NetworkWithTokens.Error;
}

export namespace NetworkWithTokens {
  export interface Data {
    token?: Data.Token;

    account_explorer_template?: string;

    chain_id?: string | null;

    deposit_methods?: Array<string> | null;

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
    export interface Token {
      contract?: string | null;

      decimals?: number;

      logo?: string;

      precision?: number;

      price_in_usd?: number;

      symbol?: string;
    }

    export interface Metadata {
      evm_multicall_contract?: string | null;

      evm_oracle_contract?: string | null;

      listing_date?: string;
    }

    export interface Token {
      contract?: string | null;

      decimals?: number;

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
  export import NetworkWithTokens = NetworksAPI.NetworkWithTokens;
}
