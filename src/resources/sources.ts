// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../core';
import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as SourcesAPI from './sources';
import * as SourceNetworksAPI from './exchanges/source-networks';

export class Sources extends APIResource {
  list(
    query?: SourceListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SourceNetworksAPI.SourceNetwork>;
  list(options?: Core.RequestOptions): Core.APIPromise<SourceNetworksAPI.SourceNetwork>;
  list(
    query: SourceListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<SourceNetworksAPI.SourceNetwork> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/api/v2/sources', { query, ...options });
  }
}

export interface Source {
  data?: Array<Source.Data> | null;

  error?: Source.Error;
}

export namespace Source {
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

      listing_date?: string;

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

      listing_date?: string;

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

          listing_date?: string;

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

            listing_date?: string;

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

export interface SourceListParams {
  destination_network?: string;

  destination_token?: string;

  include_swaps?: boolean;

  include_unavailable?: boolean;

  include_unmatched?: boolean;
}

export namespace Sources {
  export import Source = SourcesAPI.Source;
  export import SourceListParams = SourcesAPI.SourceListParams;
}
