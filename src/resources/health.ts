// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Health extends APIResource {
  retrieve(options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get('/api/v2/health', {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}
