// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as Shared from '../shared';
import * as SwapsAPI from './swaps';

export class QuoteResource extends APIResource {
  /**
   * Retrieves a swap quote based on the provided route request. Token parameters
   * accept either asset names (e.g. USDC, ETH) or token contract addresses (e.g.
   * 0xa0b8...). For native tokens via contract address, use the network's zero
   * address (e.g. 0x0000000000000000000000000000000000000000 for EVM,
   * 11111111111111111111111111111111 for Solana).
   */
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

  fee_discount?: number;

  min_receive_amount?: number;

  path?: Array<Quote.Path>;

  rate?: number;

  receive_amount?: number;

  refuel_in_source?: number | null;

  requested_amount?: number;

  service_fee?: number;

  slippage?: number;

  source_network?: Shared.Network;

  source_token?: Shared.Token;

  total_fee?: number;

  total_fee_in_usd?: number;
}

export namespace Quote {
  export interface Path {
    order?: number;

    provider?: string;
  }
}

export interface QuoteRetrieveResponse {
  data?: SwapsAPI.SwapQuoteResponse;

  error?: Shared.APIError;
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

export declare namespace QuoteResource {
  export {
    type Quote as Quote,
    type QuoteRetrieveResponse as QuoteRetrieveResponse,
    type QuoteRetrieveParams as QuoteRetrieveParams,
  };
}
