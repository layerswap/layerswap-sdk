// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as DepositActionsAPI from './deposit-actions';

export class DepositActions extends APIResource {
  list(
    swapId: string,
    query?: DepositActionListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ListTransferDepositAction>;
  list(swapId: string, options?: Core.RequestOptions): Core.APIPromise<ListTransferDepositAction>;
  list(
    swapId: string,
    query: DepositActionListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ListTransferDepositAction> {
    if (isRequestOptions(query)) {
      return this.list(swapId, {}, query);
    }
    return this._client.get(`/api/v2/swaps/${swapId}/deposit_actions`, { query, ...options });
  }
}

export interface ListTransferDepositAction {
  data?: Array<ListTransferDepositAction.Data> | null;

  error?: ListTransferDepositAction.Error;
}

export namespace ListTransferDepositAction {
  export interface Data {
    token?: Data.Token;

    amount?: number;

    amount_in_base_units?: string;

    call_data?: string | null;

    fee_token?: Data.FeeToken;

    network?: Data.Network;

    order?: number;

    to_address?: string;

    type?: string;
  }

  export namespace Data {
    export interface Token {
      contract?: string | null;

      decimals?: number;

      listing_date?: string;

      logo?: string;

      precision?: number;

      price_in_usd?: number;

      symbol?: string;
    }

    export interface FeeToken {
      contract?: string | null;

      decimals?: number;

      listing_date?: string;

      logo?: string;

      precision?: number;

      price_in_usd?: number;

      symbol?: string;
    }

    export interface Network {
      token?: Network.Token;

      account_explorer_template?: string;

      chain_id?: string | null;

      deposit_methods?: Array<string> | null;

      display_name?: string;

      logo?: string;

      metadata?: Network.Metadata;

      name?: string;

      node_url?: string | null;

      transaction_explorer_template?: string;

      type?: string;
    }

    export namespace Network {
      export interface Token {
        contract?: string | null;

        decimals?: number;

        listing_date?: string;

        logo?: string;

        precision?: number;

        price_in_usd?: number;

        symbol?: string;
      }

      export interface Metadata {
        evm_multicall_contract?: string | null;

        evm_oracle_contract?: string | null;

        listing_date?: string;
      }
    }
  }

  export interface Error {
    code?: string;

    message?: string;

    metadata?: Record<string, unknown>;
  }
}

export interface DepositActionListParams {
  source_address?: string;
}

export namespace DepositActions {
  export import ListTransferDepositAction = DepositActionsAPI.ListTransferDepositAction;
  export import DepositActionListParams = DepositActionsAPI.DepositActionListParams;
}
