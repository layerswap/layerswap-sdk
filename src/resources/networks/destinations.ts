// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as DestinationsAPI from './destinations';
import * as Shared from '../shared';
import * as SwapsAPI from '../swaps/swaps';

export class Destinations extends APIResource {
  list(
    query?: DestinationListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DestinationListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<DestinationListResponse>;
  list(
    query: DestinationListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<DestinationListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/api/v2/destinations', { query, ...options });
  }
}

export interface DestinationListResponse {
  data?: Array<DestinationListResponse.Data> | null;

  error?: Shared.APIError;
}

export namespace DestinationListResponse {
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

    type?: 'evm' | 'starknet' | 'solana' | 'cosmos' | 'starkex' | 'zksynclite' | 'ton' | 'paradex' | 'tron';
  }

  export namespace Data {
    export interface Token {
      contract?: string | null;

      decimals?: number;

      destination_rank?: number;

      display_asset?: string;

      listing_date?: string;

      logo?: string;

      precision?: number;

      price_in_usd?: number;

      refuel?: SwapsAPI.TokenWithAmount;

      source_rank?: number;

      status?: string;

      symbol?: string;
    }
  }
}

export interface DestinationListParams {
  include_swaps?: boolean;

  include_unavailable?: boolean;

  include_unmatched?: boolean;

  network_types?: Array<
    'evm' | 'starknet' | 'solana' | 'cosmos' | 'starkex' | 'zksynclite' | 'ton' | 'paradex' | 'tron'
  >;

  source_network?: string;

  source_token?: string;
}

export namespace Destinations {
  export import DestinationListResponse = DestinationsAPI.DestinationListResponse;
  export import DestinationListParams = DestinationsAPI.DestinationListParams;
}
