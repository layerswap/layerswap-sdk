// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from './core';
import * as Errors from './error';
import { type Agent } from './_shims/index';
import * as Uploads from './uploads';
import * as API from './resources/index';

export interface ClientOptions {
  /**
   * Defaults to process.env['LAYERSWAP_LS_API_KEY'].
   */
  lsAPIKey?: string | undefined;

  /**
   * Override the default base URL for the API, e.g., "https://api.example.com/v2/"
   *
   * Defaults to process.env['LAYERSWAP_BASE_URL'].
   */
  baseURL?: string | null | undefined;

  /**
   * The maximum amount of time (in milliseconds) that the client should wait for a response
   * from the server before timing out a single request.
   *
   * Note that request timeouts are retried by default, so in a worst-case scenario you may wait
   * much longer than this timeout before the promise succeeds or fails.
   */
  timeout?: number;

  /**
   * An HTTP agent used to manage HTTP(S) connections.
   *
   * If not provided, an agent will be constructed by default in the Node.js environment,
   * otherwise no agent is used.
   */
  httpAgent?: Agent;

  /**
   * Specify a custom `fetch` function implementation.
   *
   * If not provided, we use `node-fetch` on Node.js and otherwise expect that `fetch` is
   * defined globally.
   */
  fetch?: Core.Fetch | undefined;

  /**
   * The maximum number of times that the client will retry a request in case of a
   * temporary failure, like a network error or a 5XX error from the server.
   *
   * @default 2
   */
  maxRetries?: number;

  /**
   * Default headers to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * header to `undefined` or `null` in request options.
   */
  defaultHeaders?: Core.Headers;

  /**
   * Default query parameters to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * param to `undefined` in request options.
   */
  defaultQuery?: Core.DefaultQuery;
}

/** API Client for interfacing with the Layerswap API. */
export class Layerswap extends Core.APIClient {
  lsAPIKey: string;

  private _options: ClientOptions;

  /**
   * API Client for interfacing with the Layerswap API.
   *
   * @param {string | undefined} [opts.lsAPIKey=process.env['LAYERSWAP_LS_API_KEY'] ?? undefined]
   * @param {string} [opts.baseURL=process.env['LAYERSWAP_BASE_URL'] ?? https://api.layerswap.io] - Override the default base URL for the API.
   * @param {number} [opts.timeout=1 minute] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
   * @param {number} [opts.httpAgent] - An HTTP agent used to manage HTTP(s) connections.
   * @param {Core.Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
   * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
   * @param {Core.Headers} opts.defaultHeaders - Default headers to include with every request to the API.
   * @param {Core.DefaultQuery} opts.defaultQuery - Default query parameters to include with every request to the API.
   */
  constructor({
    baseURL = Core.readEnv('LAYERSWAP_BASE_URL'),
    lsAPIKey = Core.readEnv('LAYERSWAP_LS_API_KEY'),
    ...opts
  }: ClientOptions = {}) {
    if (lsAPIKey === undefined) {
      throw new Errors.LayerswapError(
        "The LAYERSWAP_LS_API_KEY environment variable is missing or empty; either provide it, or instantiate the Layerswap client with an lsAPIKey option, like new Layerswap({ lsAPIKey: 'My Ls API Key' }).",
      );
    }

    const options: ClientOptions = {
      lsAPIKey,
      ...opts,
      baseURL: baseURL || `https://api.layerswap.io`,
    };

    super({
      baseURL: options.baseURL!,
      timeout: options.timeout ?? 60000 /* 1 minute */,
      httpAgent: options.httpAgent,
      maxRetries: options.maxRetries,
      fetch: options.fetch,
    });
    this._options = options;

    this.lsAPIKey = lsAPIKey;
  }

  exchanges: API.Exchanges = new API.Exchanges(this);
  networks: API.Networks = new API.Networks(this);
  sources: API.Sources = new API.Sources(this);
  destinations: API.Destinations = new API.Destinations(this);
  limits: API.Limits = new API.Limits(this);
  quote: API.QuoteResource = new API.QuoteResource(this);
  swaps: API.Swaps = new API.Swaps(this);

  protected override defaultQuery(): Core.DefaultQuery | undefined {
    return this._options.defaultQuery;
  }

  protected override defaultHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return {
      ...super.defaultHeaders(opts),
      ...this._options.defaultHeaders,
    };
  }

  protected override authHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return { 'X-LS-APIKEY': this.lsAPIKey };
  }

  static Layerswap = this;

  static LayerswapError = Errors.LayerswapError;
  static APIError = Errors.APIError;
  static APIConnectionError = Errors.APIConnectionError;
  static APIConnectionTimeoutError = Errors.APIConnectionTimeoutError;
  static APIUserAbortError = Errors.APIUserAbortError;
  static NotFoundError = Errors.NotFoundError;
  static ConflictError = Errors.ConflictError;
  static RateLimitError = Errors.RateLimitError;
  static BadRequestError = Errors.BadRequestError;
  static AuthenticationError = Errors.AuthenticationError;
  static InternalServerError = Errors.InternalServerError;
  static PermissionDeniedError = Errors.PermissionDeniedError;
  static UnprocessableEntityError = Errors.UnprocessableEntityError;

  static toFile = Uploads.toFile;
  static fileFromPath = Uploads.fileFromPath;
}

export const {
  LayerswapError,
  APIError,
  APIConnectionError,
  APIConnectionTimeoutError,
  APIUserAbortError,
  NotFoundError,
  ConflictError,
  RateLimitError,
  BadRequestError,
  AuthenticationError,
  InternalServerError,
  PermissionDeniedError,
  UnprocessableEntityError,
} = Errors;

export import toFile = Uploads.toFile;
export import fileFromPath = Uploads.fileFromPath;

export namespace Layerswap {
  export import RequestOptions = Core.RequestOptions;

  export import Exchanges = API.Exchanges;

  export import Networks = API.Networks;
  export import Network = API.Network;

  export import Sources = API.Sources;
  export import Source = API.Source;
  export import SourceListParams = API.SourceListParams;

  export import Destinations = API.Destinations;
  export import Destination = API.Destination;
  export import DestinationListParams = API.DestinationListParams;

  export import Limits = API.Limits;
  export import Limit = API.Limit;
  export import LimitListParams = API.LimitListParams;

  export import QuoteResource = API.QuoteResource;
  export import Quote = API.Quote;
  export import QuoteRetrieveParams = API.QuoteRetrieveParams;

  export import Swaps = API.Swaps;
  export import ListSwap = API.ListSwap;
  export import PreparedSwap = API.PreparedSwap;
  export import Swap = API.Swap;
  export import SwapCreateParams = API.SwapCreateParams;
  export import SwapRetrieveParams = API.SwapRetrieveParams;
  export import SwapListParams = API.SwapListParams;
}

export default Layerswap;
