// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as SwapsAPI from './swaps';
import * as Shared from '../shared';
import * as DepositActionsAPI from './deposit-actions';
import * as LimitsAPI from './limits';
import * as QuoteAPI from './quote';

export class Swaps extends APIResource {
  depositActions: DepositActionsAPI.DepositActions = new DepositActionsAPI.DepositActions(this._client);
  limits: LimitsAPI.Limits = new LimitsAPI.Limits(this._client);
  quote: QuoteAPI.QuoteResource = new QuoteAPI.QuoteResource(this._client);

  create(body: SwapCreateParams, options?: Core.RequestOptions): Core.APIPromise<SwapCreateResponse> {
    return this._client.post('/api/v2/swaps', { body, ...options });
  }

  retrieve(
    swapId: string,
    query?: SwapRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SwapRetrieveResponse>;
  retrieve(swapId: string, options?: Core.RequestOptions): Core.APIPromise<SwapRetrieveResponse>;
  retrieve(
    swapId: string,
    query: SwapRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<SwapRetrieveResponse> {
    if (isRequestOptions(query)) {
      return this.retrieve(swapId, {}, query);
    }
    return this._client.get(`/api/v2/swaps/${swapId}`, { query, ...options });
  }

  list(query: SwapListParams, options?: Core.RequestOptions): Core.APIPromise<SwapListResponse> {
    return this._client.get('/api/v2/swaps', { query, ...options });
  }
}

export interface PreparedSwapResponse {
  deposit_actions?: Array<PreparedSwapResponse.DepositAction>;

  quote?: QuoteAPI.Quote;

  refuel?: TokenWithAmount;

  reward?: TokenWithAmount;

  swap?: Swap;
}

export namespace PreparedSwapResponse {
  export interface DepositAction {
    token?: Shared.Token;

    amount?: number;

    amount_in_base_units?: string;

    call_data?: string | null;

    fee_token?: Shared.Token;

    network?: Shared.Network;

    order?: number;

    to_address?: string;

    type?: string;
  }
}

export interface Swap {
  id?: string;

  created_date?: string;

  destination_address?: string;

  destination_exchange?: Swap.DestinationExchange;

  destination_network?: Shared.Network;

  destination_token?: Shared.Token;

  fail_reason?: string | null;

  metadata?: Swap.Metadata;

  requested_amount?: number;

  source_exchange?: Swap.SourceExchange;

  source_network?: Shared.Network;

  source_token?: Shared.Token;

  status?: string;

  transactions?: Array<Swap.Transaction>;

  use_deposit_address?: boolean;
}

export namespace Swap {
  export interface DestinationExchange {
    display_name?: string;

    logo?: string;

    metadata?: DestinationExchange.Metadata;

    name?: string;
  }

  export namespace DestinationExchange {
    export interface Metadata {
      listing_date?: string;

      oauth?: Metadata.OAuth;
    }

    export namespace Metadata {
      export interface OAuth {
        authorize_url?: string;

        connect_url?: string;
      }
    }
  }

  export interface Metadata {
    exchange_account?: string | null;

    reference_id?: string | null;

    sequence_number?: number;
  }

  export interface SourceExchange {
    display_name?: string;

    logo?: string;

    metadata?: SourceExchange.Metadata;

    name?: string;
  }

  export namespace SourceExchange {
    export interface Metadata {
      listing_date?: string;

      oauth?: Metadata.OAuth;
    }

    export namespace Metadata {
      export interface OAuth {
        authorize_url?: string;

        connect_url?: string;
      }
    }
  }

  export interface Transaction {
    token?: Shared.Token;

    amount?: number;

    confirmations?: number;

    fee_amount?: number | null;

    fee_token?: Shared.Token;

    from?: string | null;

    max_confirmations?: number;

    network?: Shared.Network;

    status?: string;

    timestamp?: string;

    to?: string | null;

    transaction_hash?: string | null;

    type?: string;
  }
}

export interface SwapQuoteResponse {
  quote?: QuoteAPI.Quote;

  refuel?: TokenWithAmount;

  reward?: TokenWithAmount;
}

export interface SwapResponse {
  quote?: QuoteAPI.Quote;

  refuel?: TokenWithAmount;

  reward?: TokenWithAmount;

  swap?: Swap;
}

export interface TokenWithAmount {
  token?: Shared.Token;

  amount?: number;

  amount_in_usd?: number;

  network?: Shared.Network;
}

export interface SwapCreateResponse {
  data?: PreparedSwapResponse;

  error?: Shared.APIError;
}

export interface SwapRetrieveResponse {
  data?: SwapResponse;

  error?: Shared.APIError;
}

export interface SwapListResponse {
  data?: Array<SwapResponse> | null;

  error?: Shared.APIError;
}

export interface SwapCreateParams {
  amount?: number;

  destination_address?: string;

  destination_exchange?: string | null;

  destination_network?: string;

  destination_token?: string;

  reference_id?: string | null;

  refuel?: boolean;

  slippage?: string | null;

  source_address?: string | null;

  source_exchange?: string | null;

  source_network?: string;

  source_token?: string;

  use_deposit_address?: boolean;

  use_new_deposit_address?: boolean | null;
}

export interface SwapRetrieveParams {
  exclude_deposit_actions?: boolean;

  source_address?: string;
}

export interface SwapListParams {
  address: string;

  include_expired?: boolean;

  page?: number;
}

export namespace Swaps {
  export import PreparedSwapResponse = SwapsAPI.PreparedSwapResponse;
  export import Swap = SwapsAPI.Swap;
  export import SwapQuoteResponse = SwapsAPI.SwapQuoteResponse;
  export import SwapResponse = SwapsAPI.SwapResponse;
  export import TokenWithAmount = SwapsAPI.TokenWithAmount;
  export import SwapCreateResponse = SwapsAPI.SwapCreateResponse;
  export import SwapRetrieveResponse = SwapsAPI.SwapRetrieveResponse;
  export import SwapListResponse = SwapsAPI.SwapListResponse;
  export import SwapCreateParams = SwapsAPI.SwapCreateParams;
  export import SwapRetrieveParams = SwapsAPI.SwapRetrieveParams;
  export import SwapListParams = SwapsAPI.SwapListParams;
  export import DepositActions = DepositActionsAPI.DepositActions;
  export import ListTransferDepositAction = DepositActionsAPI.ListTransferDepositAction;
  export import DepositActionListParams = DepositActionsAPI.DepositActionListParams;
  export import Limits = LimitsAPI.Limits;
  export import LimitListResponse = LimitsAPI.LimitListResponse;
  export import LimitListParams = LimitsAPI.LimitListParams;
  export import QuoteResource = QuoteAPI.QuoteResource;
  export import Quote = QuoteAPI.Quote;
  export import QuoteRetrieveResponse = QuoteAPI.QuoteRetrieveResponse;
  export import QuoteRetrieveParams = QuoteAPI.QuoteRetrieveParams;
}
