// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Layerswap } from './index';

export abstract class APIResource {
  protected _client: Layerswap;

  constructor(client: Layerswap) {
    this._client = client;
  }
}
