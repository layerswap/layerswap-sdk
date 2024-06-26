// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

export interface NetworkToken {
  data?: Array<NetworkToken.Data> | null;

  error?: NetworkToken.Error;
}

export namespace NetworkToken {
  export interface Data {
    token?: Data.Token;

    network?: Data.Network;
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

    export interface Network {
      token?: Network.Token;

      account_explorer_template?: string;

      chain_id?: string | null;

      deposit_methods?: Array<string> | null;

      display_name?: string;

      logo?: string;

      metadata?: Network.Metadata;

      name?: string;

      node_url?: string | null;

      transaction_explorer_template?: string;

      type?: string;
    }

    export namespace Network {
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
    }
  }

  export interface Error {
    code?: string;

    message?: string;

    metadata?: Record<string, unknown>;
  }
}

export interface NetworkWithRouteTokens {
  data?: Array<NetworkWithRouteTokens.Data> | null;

  error?: NetworkWithRouteTokens.Error;
}

export namespace NetworkWithRouteTokens {
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

      refuel?: Token.Refuel;

      status?: string;

      symbol?: string;
    }

    export namespace Token {
      export interface Refuel {
        token?: Refuel.Token;

        amount?: number;

        amount_in_usd?: number;

        network?: Refuel.Network;
      }

      export namespace Refuel {
        export interface Token {
          contract?: string | null;

          decimals?: number;

          logo?: string;

          precision?: number;

          price_in_usd?: number;

          symbol?: string;
        }

        export interface Network {
          token?: Network.Token;

          account_explorer_template?: string;

          chain_id?: string | null;

          deposit_methods?: Array<string> | null;

          display_name?: string;

          logo?: string;

          metadata?: Network.Metadata;

          name?: string;

          node_url?: string | null;

          transaction_explorer_template?: string;

          type?: string;
        }

        export namespace Network {
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
        }
      }
    }
  }

  export interface Error {
    code?: string;

    message?: string;

    metadata?: Record<string, unknown>;
  }
}
