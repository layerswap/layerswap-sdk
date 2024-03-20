// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'Layerswap/core';
import { APIResource } from 'Layerswap/resource';
import * as QuoteAPI from 'Layerswap/resources/partner-endpoints-v2/quote';

export class Quote extends APIResource {
  retrieve(
    query: QuoteRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<APIResponseListSwapQuoteResponse> {
    return this._client.get('/api/v2-alpha/quote', { query, ...options });
  }
}

export interface APIResponseListSwapQuoteResponse {
  data?: Array<APIResponseListSwapQuoteResponse.Data> | null;

  error?: APIResponseListSwapQuoteResponse.Error;
}

export namespace APIResponseListSwapQuoteResponse {
  export interface Data {
    quote?: Data.Quote;

    refuel?: Data.Refuel;
  }

  export namespace Data {
    export interface Quote {
      avg_completion_time?: Quote.AvgCompletionTime;

      blockchain_fee?: number;

      deposit_gas_fee?: number | null;

      min_receive_amount?: number;

      receive_amount?: number;

      service_fee?: number;

      total_fee?: number;

      total_fee_in_usd?: number;
    }

    export namespace Quote {
      export interface AvgCompletionTime {
        days?: number;

        hours?: number;

        microseconds?: number;

        milliseconds?: number;

        minutes?: number;

        nanoseconds?: number;

        seconds?: number;

        ticks?: number;

        total_days?: number;

        total_hours?: number;

        total_microseconds?: number;

        total_milliseconds?: number;

        total_minutes?: number;

        total_nanoseconds?: number;

        total_seconds?: number;
      }
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

        is_native?: boolean;

        logo?: string;

        precision?: number;

        price_in_usd?: number;

        symbol?: string;
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
  }

  export interface Error {
    code?: string;

    message?: string;

    metadata?: Record<string, unknown>;
  }
}

export interface QuoteRetrieveParams {
  amount: number;

  deposit_mode: string;

  destination_address: string;

  destination_network: string;

  destination_token: string;

  source_network: string;

  source_token: string;

  include_gas?: boolean;

  refuel?: boolean;

  source_address?: string;
}

export namespace Quote {
  export import APIResponseListSwapQuoteResponse = QuoteAPI.APIResponseListSwapQuoteResponse;
  export import QuoteRetrieveParams = QuoteAPI.QuoteRetrieveParams;
}
