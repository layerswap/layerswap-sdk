// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as Shared from '../shared';
import * as DestinationsAPI from './destinations';
import { DestinationListParams, DestinationListResponse, Destinations } from './destinations';
import * as SourcesAPI from './sources';
import { SourceListParams, SourceListResponse, Sources } from './sources';

export class Networks extends APIResource {
  sources: SourcesAPI.Sources = new SourcesAPI.Sources(this._client);
  destinations: DestinationsAPI.Destinations = new DestinationsAPI.Destinations(this._client);

  list(query?: NetworkListParams, options?: Core.RequestOptions): Core.APIPromise<NetworkListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<NetworkListResponse>;
  list(
    query: NetworkListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<NetworkListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/api/v2/networks', { query, ...options });
  }
}

export interface NetworkListResponse {
  data?: Array<Shared.NetworkWithTokens> | null;

  error?: Shared.APIError;
}

export interface NetworkListParams {
  network_types?: Array<
    'evm' | 'starknet' | 'solana' | 'cosmos' | 'starkex' | 'zksynclite' | 'ton' | 'paradex' | 'tron' | 'fuel'
  >;
}

Networks.Sources = Sources;
Networks.Destinations = Destinations;

export declare namespace Networks {
  export { type NetworkListResponse as NetworkListResponse, type NetworkListParams as NetworkListParams };

  export {
    Sources as Sources,
    type SourceListResponse as SourceListResponse,
    type SourceListParams as SourceListParams,
  };

  export {
    Destinations as Destinations,
    type DestinationListResponse as DestinationListResponse,
    type DestinationListParams as DestinationListParams,
  };
}
