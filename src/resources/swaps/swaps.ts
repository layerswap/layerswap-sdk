// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as Shared from '../shared';
import * as DepositActionsAPI from './deposit-actions';
import { DepositActionListParams, DepositActions, ListTransferDepositAction } from './deposit-actions';
import * as LimitsAPI from './limits';
import { LimitListParams, LimitListResponse, Limits } from './limits';
import * as QuoteAPI from './quote';
import { Quote, QuoteResource, QuoteRetrieveParams, QuoteRetrieveResponse } from './quote';

export class Swaps extends APIResource {
  depositActions: DepositActionsAPI.DepositActions = new DepositActionsAPI.DepositActions(this._client);
  limits: LimitsAPI.Limits = new LimitsAPI.Limits(this._client);
  quote: QuoteAPI.QuoteResource = new QuoteAPI.QuoteResource(this._client);

  /**
   * Creates a new swap based on the provided request. Token parameters accept either
   * asset names (e.g. USDC, ETH) or token contract addresses (e.g. 0xa0b8...). For
   * native tokens via contract address, use the network's zero address (e.g.
   * 0x0000000000000000000000000000000000000000 for EVM,
   * 11111111111111111111111111111111 for Solana).
   */
  create(body: SwapCreateParams, options?: Core.RequestOptions): Core.APIPromise<SwapCreateResponse> {
    return this._client.post('/api/v2/swaps', { body, ...options });
  }

  /**
   * Retrieves the details of a specific swap by its ID.
   */
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

  /**
   * Retrieves a list of all swaps.
   */
  list(query: SwapListParams, options?: Core.RequestOptions): Core.APIPromise<SwapListResponse> {
    return this._client.get('/api/v2/swaps', { query, ...options });
  }
}

export interface PreparedSwapResponse {
  deposit_actions?: Array<PreparedSwapResponse.DepositAction>;

  quote?: QuoteAPI.Quote;

  refuel?: TokenWithAmount;

  reward?: PreparedSwapResponse.Reward;

  swap?: Swap;
}

export namespace PreparedSwapResponse {
  export interface DepositAction {
    token?: Shared.Token;

    amount?: number;

    amount_in_base_units?: string;

    call_data?: string | null;

    encoded_args?: Array<string> | null;

    fee_token?: Shared.Token;

    gas_limit?: string | null;

    network?: Shared.Network;

    order?: number;

    to_address?: string;

    type?: string;
  }

  export interface Reward {
    token?: Shared.Token;

    amount?: number;

    amount_in_usd?: number;

    campaign_type?: string;

    network?: Shared.Network;

    nft_contract_address?: string | null;
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

  reward?: SwapQuoteResponse.Reward;
}

export namespace SwapQuoteResponse {
  export interface Reward {
    token?: Shared.Token;

    amount?: number;

    amount_in_usd?: number;

    campaign_type?: string;

    network?: Shared.Network;

    nft_contract_address?: string | null;
  }
}

export interface SwapResponse {
  quote?: QuoteAPI.Quote;

  refuel?: TokenWithAmount;

  reward?: SwapResponse.Reward;

  swap?: Swap;
}

export namespace SwapResponse {
  export interface Reward {
    token?: Shared.Token;

    amount?: number;

    amount_in_usd?: number;

    campaign_type?: string;

    network?: Shared.Network;

    nft_contract_address?: string | null;
  }
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
  amount?: number | null;

  destination_address?: string;

  destination_exchange?: string | null;

  destination_network?: string;

  destination_token?: string;

  reference_id?: string | null;

  refuel?: boolean;

  refund_address?: string | null;

  slippage?: string | null;

  source_address?: string | null;

  source_exchange?: string | null;

  source_network?: string;

  source_token?: string;

  use_deposit_address?: boolean;

  use_depository?: boolean;

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

Swaps.DepositActions = DepositActions;
Swaps.Limits = Limits;
Swaps.QuoteResource = QuoteResource;

export declare namespace Swaps {
  export {
    type PreparedSwapResponse as PreparedSwapResponse,
    type Swap as Swap,
    type SwapQuoteResponse as SwapQuoteResponse,
    type SwapResponse as SwapResponse,
    type TokenWithAmount as TokenWithAmount,
    type SwapCreateResponse as SwapCreateResponse,
    type SwapRetrieveResponse as SwapRetrieveResponse,
    type SwapListResponse as SwapListResponse,
    type SwapCreateParams as SwapCreateParams,
    type SwapRetrieveParams as SwapRetrieveParams,
    type SwapListParams as SwapListParams,
  };

  export {
    DepositActions as DepositActions,
    type ListTransferDepositAction as ListTransferDepositAction,
    type DepositActionListParams as DepositActionListParams,
  };

  export {
    Limits as Limits,
    type LimitListResponse as LimitListResponse,
    type LimitListParams as LimitListParams,
  };

  export {
    QuoteResource as QuoteResource,
    type Quote as Quote,
    type QuoteRetrieveResponse as QuoteRetrieveResponse,
    type QuoteRetrieveParams as QuoteRetrieveParams,
  };
}
