// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'Layerswap/core';
import { APIResource } from 'Layerswap/resource';
import * as LimitsAPI from 'Layerswap/resources/limits';

export class Limits extends APIResource {
  list(query: LimitListParams, options?: Core.RequestOptions): Core.APIPromise<SwapRouteLimits> {
    return this._client.get('/api/v2/limits', { query, ...options });
  }
}

export interface SwapRouteLimits {
  data?: SwapRouteLimits.Data;

  error?: SwapRouteLimits.Error;
}

export namespace SwapRouteLimits {
  export interface Data {
    max_amount?: number;

    max_amount_in_usd?: number;

    min_amount?: number;

    min_amount_in_usd?: number;
  }

  export interface Error {
    code?: string;

    message?: string;

    metadata?: Record<string, unknown>;
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
  export import SwapRouteLimits = LimitsAPI.SwapRouteLimits;
  export import LimitListParams = LimitsAPI.LimitListParams;
}
