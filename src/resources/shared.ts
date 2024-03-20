// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

export interface APIResponseListNetworkTokenWithFeeModel {
  data?: Array<APIResponseListNetworkTokenWithFeeModel.Data> | null;

  error?: APIResponseListNetworkTokenWithFeeModel.Error;
}

export namespace APIResponseListNetworkTokenWithFeeModel {
  export interface Data {
    token?: Data.Token;

    fee?: Data.Fee;

    network?: Data.Network;
  }

  export namespace Data {
    export interface Token {
      contract?: string | null;

      decimals?: number;

      is_native?: boolean;

      logo?: string;

      precision?: number;

      price_in_usd?: number;

      symbol?: string;
    }

    export interface Fee {
      total_fee?: number;

      total_fee_in_usd?: number;
    }

    export interface Network {
      account_explorer_template?: string;

      chain_id?: string | null;

      display_name?: string;

      logo?: string;

      metadata?: Network.Metadata;

      name?: string;

      node_url?: string | null;

      transaction_explorer_template?: string;

      type?: string;
    }

    export namespace Network {
      export interface Metadata {
        evm_multi_call_contract?: string | null;

        evm_oracle_contract?: string | null;

        listing_date?: string;
      }
    }
  }

  export interface Error {
    code?: string;

    message?: string;

    metadata?: Record<string, unknown>;
  }
}

export interface APIResponseListNetworkWithRouteTokensModel {
  data?: Array<APIResponseListNetworkWithRouteTokensModel.Data> | null;

  error?: APIResponseListNetworkWithRouteTokensModel.Error;
}

export namespace APIResponseListNetworkWithRouteTokensModel {
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

      status?: string;

      symbol?: string;
    }
  }

  export interface Error {
    code?: string;

    message?: string;

    metadata?: Record<string, unknown>;
  }
}
