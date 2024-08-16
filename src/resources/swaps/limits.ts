// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as LimitsAPI from './limits';
import * as SwapsAPI from './swaps';

export class Limits extends APIResource {
  list(
    query: LimitListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SwapsAPI.SwapRouteLimitsAPIResponse> {
    return this._client.get('/api/v2/limits', { query, ...options });
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

export namespace Limits {
  export import LimitListParams = LimitsAPI.LimitListParams;
}
