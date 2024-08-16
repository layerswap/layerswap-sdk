// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import { Quote } from './quote';
import * as SwapsAPI from './swaps';
import * as Shared from '../shared';
import * as DepositActionsAPI from './deposit-actions';
import * as LimitsAPI from './limits';
import * as QuoteAPI from './quote';

export class Swaps extends APIResource {
  depositActions: DepositActionsAPI.DepositActions = new DepositActionsAPI.DepositActions(this._client);
  limits: LimitsAPI.Limits = new LimitsAPI.Limits(this._client);
  quote: QuoteAPI.Quote = new QuoteAPI.Quote(this._client);

  create(body: SwapCreateParams, options?: Core.RequestOptions): Core.APIPromise<PreparedSwapAPIResponse> {
    return this._client.post('/api/v2/swaps', { body, ...options });
  }

  retrieve(
    swapId: string,
    query?: SwapRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SwapAPIResponse>;
  retrieve(swapId: string, options?: Core.RequestOptions): Core.APIPromise<SwapAPIResponse>;
  retrieve(
    swapId: string,
    query: SwapRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<SwapAPIResponse> {
    if (isRequestOptions(query)) {
      return this.retrieve(swapId, {}, query);
    }
    return this._client.get(`/api/v2/swaps/${swapId}`, { query, ...options });
  }

  list(query: SwapListParams, options?: Core.RequestOptions): Core.APIPromise<ListSwapAPIResponse> {
    return this._client.get('/api/v2/swaps', { query, ...options });
  }
}

export interface ListSwapAPIResponse {
  data?: Array<SwapResponse> | null;

  error?: ListSwapAPIResponse.Error;
}

export namespace ListSwapAPIResponse {
  export interface Error {
    code?: string;

    message?: string;

    metadata?: Record<string, unknown>;
  }
}

export interface NetworkWithRouteTokensAPIResponse {
  data?: Array<NetworkWithRouteTokensAPIResponse.Data> | null;

  error?: NetworkWithRouteTokensAPIResponse.Error;
}

export namespace NetworkWithRouteTokensAPIResponse {
  export interface Data {
    token?: Shared.Token;

    account_explorer_template?: string;

    chain_id?: string | null;

    deposit_methods?: Array<string> | null;

    display_name?: string;

    logo?: string;

    metadata?: Data.Metadata;

    name?: string;

    node_url?: string | null;

    tokens?: Array<Data.Token>;

    transaction_explorer_template?: string;

    type?: string;
  }

  export namespace Data {
    export interface Metadata {
      evm_multicall_contract?: string | null;

      evm_oracle_contract?: string | null;

      listing_date?: string;
    }

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

  export interface Error {
    code?: string;

    message?: string;

    metadata?: Record<string, unknown>;
  }
}

export interface NetworkWithTokensAPIResponse {
  data?: Array<NetworkWithTokensAPIResponse.Data> | null;

  error?: NetworkWithTokensAPIResponse.Error;
}

export namespace NetworkWithTokensAPIResponse {
  export interface Data {
    token?: Shared.Token;

    account_explorer_template?: string;

    chain_id?: string | null;

    deposit_methods?: Array<string> | null;

    display_name?: string;

    logo?: string;

    metadata?: Data.Metadata;

    name?: string;

    node_url?: string | null;

    tokens?: Array<Shared.Token>;

    transaction_explorer_template?: string;

    type?: string;
  }

  export namespace Data {
    export interface Metadata {
      evm_multicall_contract?: string | null;

      evm_oracle_contract?: string | null;

      listing_date?: string;
    }
  }

  export interface Error {
    code?: string;

    message?: string;

    metadata?: Record<string, unknown>;
  }
}

export interface PreparedSwapAPIResponse {
  data?: PreparedSwapAPIResponse.Data;

  error?: PreparedSwapAPIResponse.Error;
}

export namespace PreparedSwapAPIResponse {
  export interface Data {
    deposit_actions?: Array<Data.DepositAction>;

    quote?: SwapsAPI.Quote;

    refuel?: SwapsAPI.TokenWithAmount;

    reward?: SwapsAPI.TokenWithAmount;

    swap?: SwapsAPI.Swap;
  }

  export namespace Data {
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

  export interface Error {
    code?: string;

    message?: string;

    metadata?: Record<string, unknown>;
  }
}

export interface Quote {
  avg_completion_time?: string;

  blockchain_fee?: number;

  destination_network?: Shared.Network;

  destination_token?: Shared.Token;

  min_receive_amount?: number;

  receive_amount?: number;

  refuel_in_source?: number | null;

  service_fee?: number;

  slippage?: number;

  source_network?: Shared.Network;

  source_token?: Shared.Token;

  total_fee?: number;

  total_fee_in_usd?: number;
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

export interface SwapAPIResponse {
  data?: SwapResponse;

  error?: SwapAPIResponse.Error;
}

export namespace SwapAPIResponse {
  export interface Error {
    code?: string;

    message?: string;

    metadata?: Record<string, unknown>;
  }
}

export interface SwapQuoteAPIResponse {
  data?: SwapQuoteResponse;

  error?: SwapQuoteAPIResponse.Error;
}

export namespace SwapQuoteAPIResponse {
  export interface Error {
    code?: string;

    message?: string;

    metadata?: Record<string, unknown>;
  }
}

export interface SwapQuoteResponse {
  quote?: Quote;

  refuel?: TokenWithAmount;

  reward?: TokenWithAmount;
}

export interface SwapResponse {
  quote?: Quote;

  refuel?: TokenWithAmount;

  reward?: TokenWithAmount;

  swap?: Swap;
}

export interface SwapRouteLimitsAPIResponse {
  data?: SwapRouteLimitsAPIResponse.Data;

  error?: SwapRouteLimitsAPIResponse.Error;
}

export namespace SwapRouteLimitsAPIResponse {
  export interface Data {
    max_amount?: number;

    max_amount_in_usd?: number;

    min_amount?: number;

    min_amount_in_usd?: number;
  }

  export interface Error {
    code?: string;

    message?: string;

    metadata?: Record<string, unknown>;
  }
}

export interface TokenWithAmount {
  token?: Shared.Token;

  amount?: number;

  amount_in_usd?: number;

  network?: Shared.Network;
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
  export import ListSwapAPIResponse = SwapsAPI.ListSwapAPIResponse;
  export import NetworkWithRouteTokensAPIResponse = SwapsAPI.NetworkWithRouteTokensAPIResponse;
  export import NetworkWithTokensAPIResponse = SwapsAPI.NetworkWithTokensAPIResponse;
  export import PreparedSwapAPIResponse = SwapsAPI.PreparedSwapAPIResponse;
  export import Quote = SwapsAPI.Quote;
  export import Swap = SwapsAPI.Swap;
  export import SwapAPIResponse = SwapsAPI.SwapAPIResponse;
  export import SwapQuoteAPIResponse = SwapsAPI.SwapQuoteAPIResponse;
  export import SwapQuoteResponse = SwapsAPI.SwapQuoteResponse;
  export import SwapResponse = SwapsAPI.SwapResponse;
  export import SwapRouteLimitsAPIResponse = SwapsAPI.SwapRouteLimitsAPIResponse;
  export import TokenWithAmount = SwapsAPI.TokenWithAmount;
  export import SwapCreateParams = SwapsAPI.SwapCreateParams;
  export import SwapRetrieveParams = SwapsAPI.SwapRetrieveParams;
  export import SwapListParams = SwapsAPI.SwapListParams;
  export import DepositActions = DepositActionsAPI.DepositActions;
  export import ListTransferDepositAction = DepositActionsAPI.ListTransferDepositAction;
  export import DepositActionListParams = DepositActionsAPI.DepositActionListParams;
  export import Limits = LimitsAPI.Limits;
  export import LimitListParams = LimitsAPI.LimitListParams;
  export import QuoteRetrieveParams = QuoteAPI.QuoteRetrieveParams;
}
