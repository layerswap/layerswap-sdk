// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as QuoteAPI from './quote';
import * as Shared from '../shared';
import * as SwapsAPI from './swaps';

export class QuoteResource extends APIResource {
  retrieve(
    query: QuoteRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<QuoteRetrieveResponse> {
    return this._client.get('/api/v2/quote', { query, ...options });
  }
}

export interface Quote {
  avg_completion_time?: string;

  blockchain_fee?: number;

  destination_network?: Shared.Network;

  destination_token?: Shared.Token;

  min_receive_amount?: number;

  receive_amount?: number;

  refuel_in_source?: number | null;

  service_fee?: number;

  slippage?: number;

  source_network?: Shared.Network;

  source_token?: Shared.Token;

  total_fee?: number;

  total_fee_in_usd?: number;
}

export interface QuoteRetrieveResponse {
  data?: SwapsAPI.SwapQuoteResponse;

  error?: QuoteRetrieveResponse.Error;
}

export namespace QuoteRetrieveResponse {
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

export namespace QuoteResource {
  export import Quote = QuoteAPI.Quote;
  export import QuoteRetrieveResponse = QuoteAPI.QuoteRetrieveResponse;
  export import QuoteRetrieveParams = QuoteAPI.QuoteRetrieveParams;
}
