// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as DestinationsAPI from './destinations';
import * as SourcesAPI from './sources';
import * as SwapsAPI from '../swaps/swaps';

export class Networks extends APIResource {
  sources: SourcesAPI.Sources = new SourcesAPI.Sources(this._client);
  destinations: DestinationsAPI.Destinations = new DestinationsAPI.Destinations(this._client);

  list(options?: Core.RequestOptions): Core.APIPromise<SwapsAPI.NetworkWithTokens> {
    return this._client.get('/api/v2/networks', options);
  }
}

export namespace Networks {
  export import Sources = SourcesAPI.Sources;
  export import SourceListParams = SourcesAPI.SourceListParams;
  export import Destinations = DestinationsAPI.Destinations;
  export import DestinationListParams = DestinationsAPI.DestinationListParams;
}
