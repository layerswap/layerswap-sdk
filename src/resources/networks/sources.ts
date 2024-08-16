// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as SourcesAPI from './sources';
import * as Shared from '../shared';
import * as SwapsAPI from '../swaps/swaps';

export class Sources extends APIResource {
  list(query?: SourceListParams, options?: Core.RequestOptions): Core.APIPromise<SourceListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<SourceListResponse>;
  list(
    query: SourceListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<SourceListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/api/v2/sources', { query, ...options });
  }
}

export interface SourceListResponse {
  data?: Array<SourceListResponse.Data> | null;

  error?: Shared.APIError;
}

export namespace SourceListResponse {
  export interface Data {
    token?: Shared.Token;

    account_explorer_template?: string;

    chain_id?: string | null;

    deposit_methods?: Array<string> | null;

    display_name?: string;

    logo?: string;

    metadata?: Shared.NetworkMetadata;

    name?: string;

    node_url?: string | null;

    tokens?: Array<Data.Token>;

    transaction_explorer_template?: string;

    type?: string;
  }

  export namespace Data {
    export interface Token {
      contract?: string | null;

      decimals?: number;

      listing_date?: string;

      logo?: string;

      precision?: number;

      price_in_usd?: number;

      refuel?: SwapsAPI.TokenWithAmount;

      status?: string;

      symbol?: string;
    }
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
  export import SourceListResponse = SourcesAPI.SourceListResponse;
  export import SourceListParams = SourcesAPI.SourceListParams;
}
