// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as NetworksAPI from './networks';
import * as DestinationsAPI from './destinations';
import * as SourcesAPI from './sources';
import * as SwapsAPI from '../swaps/swaps';

export class Networks extends APIResource {
  sources: SourcesAPI.Sources = new SourcesAPI.Sources(this._client);
  destinations: DestinationsAPI.Destinations = new DestinationsAPI.Destinations(this._client);

  list(
    query?: NetworkListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SwapsAPI.NetworkWithTokensAPIResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<SwapsAPI.NetworkWithTokensAPIResponse>;
  list(
    query: NetworkListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<SwapsAPI.NetworkWithTokensAPIResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/api/v2/networks', { query, ...options });
  }
}

export interface NetworkListParams {
  network_types?: Array<string>;
}

export namespace Networks {
  export import NetworkListParams = NetworksAPI.NetworkListParams;
  export import Sources = SourcesAPI.Sources;
  export import SourceListParams = SourcesAPI.SourceListParams;
  export import Destinations = DestinationsAPI.Destinations;
  export import DestinationListParams = DestinationsAPI.DestinationListParams;
}
