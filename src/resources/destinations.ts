// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../core';
import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as DestinationsAPI from './destinations';
import * as SourceNetworksAPI from './exchanges/source-networks';

export class Destinations extends APIResource {
  list(
    query?: DestinationListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SourceNetworksAPI.SourceNetwork>;
  list(options?: Core.RequestOptions): Core.APIPromise<SourceNetworksAPI.SourceNetwork>;
  list(
    query: DestinationListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<SourceNetworksAPI.SourceNetwork> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/api/v2/destinations', { query, ...options });
  }
}

export interface Destination {
  data?: Array<Destination.Data> | null;

  error?: Destination.Error;
}

export namespace Destination {
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

export interface DestinationListParams {
  include_swaps?: boolean;

  include_unavailable?: boolean;

  include_unmatched?: boolean;

  source_network?: string;

  source_token?: string;
}

export namespace Destinations {
  export import Destination = DestinationsAPI.Destination;
  export import DestinationListParams = DestinationsAPI.DestinationListParams;
}
