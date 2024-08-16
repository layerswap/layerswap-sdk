// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as SourcesAPI from './sources';
import * as SwapsAPI from '../swaps/swaps';

export class Sources extends APIResource {
  list(
    query?: SourceListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SwapsAPI.NetworkWithRouteTokens>;
  list(options?: Core.RequestOptions): Core.APIPromise<SwapsAPI.NetworkWithRouteTokens>;
  list(
    query: SourceListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<SwapsAPI.NetworkWithRouteTokens> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/api/v2/sources', { query, ...options });
  }
}

export interface SourceListParams {
  destination_network?: string;

  destination_token?: string;

  include_swaps?: boolean;

  include_unavailable?: boolean;

  include_unmatched?: boolean;

  network_types?: Array<string>;
}

export namespace Sources {
  export import SourceListParams = SourcesAPI.SourceListParams;
}
