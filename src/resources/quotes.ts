// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'Layerswap/core';
import { APIResource } from 'Layerswap/resource';
import * as QuotesAPI from 'Layerswap/resources/quotes';

export class Quotes extends APIResource {
  retrieve(query: QuoteRetrieveParams, options?: Core.RequestOptions): Core.APIPromise<SwapQuoteResponse> {
    return this._client.get('/api/v2/quote', { query, ...options });
  }
}

export interface SwapQuoteResponse {
  data?: SwapQuoteResponse.Data;

  error?: SwapQuoteResponse.Error;
}

export namespace SwapQuoteResponse {
  export interface Data {
    quote?: Data.Quote;

    refuel?: Data.Refuel;

    reward?: Data.Reward;
  }

  export namespace Data {
    export interface Quote {
      avg_completion_time?: string;

      blockchain_fee?: number;

      min_receive_amount?: number;

      receive_amount?: number;

      service_fee?: number;

      total_fee?: number;

      total_fee_in_usd?: number;
    }

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

    export interface Reward {
      token?: Reward.Token;

      amount?: number;

      amount_in_usd?: number;

      network?: Reward.Network;
    }

    export namespace Reward {
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

  export interface Error {
    code?: string;

    message?: string;

    metadata?: Record<string, unknown>;
  }
}

export interface QuoteRetrieveParams {
  amount: number;

  destination_network: string;

  destination_token: string;

  source_network: string;

  source_token: string;

  refuel?: boolean;

  slippage?: string;

  source_address?: string;

  use_deposit_address?: boolean;
}

export namespace Quotes {
  export import SwapQuoteResponse = QuotesAPI.SwapQuoteResponse;
  export import QuoteRetrieveParams = QuotesAPI.QuoteRetrieveParams;
}
