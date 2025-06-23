// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as Shared from '../shared';

export class Limits extends APIResource {
  /**
   * Retrieves the limits for swap route.
   *
   * @example
   * ```ts
   * const limits = await client.swaps.limits.list({
   *   destination_network: 'destination_network',
   *   destination_token: 'destination_token',
   *   source_network: 'source_network',
   *   source_token: 'source_token',
   * });
   * ```
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
