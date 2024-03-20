// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'Layerswap/core';
import { APIResource } from 'Layerswap/resource';
import * as LimitsAPI from 'Layerswap/resources/partner-endpoints-v2/limits';

export class Limits extends APIResource {
  list(
    query: LimitListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<APIResponseSwapRouteLimitsModel> {
    return this._client.get('/api/v2-alpha/limits', { query, ...options });
  }
}

export interface APIResponseSwapRouteLimitsModel {
  data?: APIResponseSwapRouteLimitsModel.Data;

  error?: APIResponseSwapRouteLimitsModel.Error;
}

export namespace APIResponseSwapRouteLimitsModel {
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
  deposit_mode: string;

  destination_network: string;

  destination_token: string;

  source_network: string;

  source_token: string;

  refuel?: boolean;
}

export namespace Limits {
  export import APIResponseSwapRouteLimitsModel = LimitsAPI.APIResponseSwapRouteLimitsModel;
  export import LimitListParams = LimitsAPI.LimitListParams;
}
