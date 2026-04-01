// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as Shared from '../shared';

export class Limits extends APIResource {
  /**
   * Retrieves the limits for swap route. Token parameters accept either asset names
   * (e.g. USDC, ETH) or token contract addresses (e.g. 0xa0b8...). For native tokens
   * via contract address, use the network's zero address (e.g.
   * 0x0000000000000000000000000000000000000000 for EVM,
   * 11111111111111111111111111111111 for Solana).
   */
  list(query: LimitListParams, options?: Core.RequestOptions): Core.APIPromise<LimitListResponse> {
    return this._client.get('/api/v2/limits', { query, ...options });
  }
}

export interface LimitListResponse {
  data?: LimitListResponse.Data;

  error?: Shared.APIError;
}

export namespace LimitListResponse {
  export interface Data {
    max_amount?: number;

    max_amount_in_usd?: number;

    min_amount?: number;

    min_amount_in_usd?: number;
  }
}

export interface LimitListParams {
  destination_network: string;

  destination_token: string;

  source_network: string;

  source_token: string;

  refuel?: boolean;

  use_deposit_address?: boolean;
}

export declare namespace Limits {
  export { type LimitListResponse as LimitListResponse, type LimitListParams as LimitListParams };
}
