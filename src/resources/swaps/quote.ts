// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as QuoteAPI from './quote';
import * as SwapsAPI from './swaps';

export class Quote extends APIResource {
  retrieve(query: QuoteRetrieveParams, options?: Core.RequestOptions): Core.APIPromise<SwapsAPI.SwapQuote> {
    return this._client.get('/api/v2/quote', { query, ...options });
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

export namespace Quote {
  export import QuoteRetrieveParams = QuoteAPI.QuoteRetrieveParams;
}
