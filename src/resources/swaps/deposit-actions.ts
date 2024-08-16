// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as DepositActionsAPI from './deposit-actions';
import * as Shared from '../shared';

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

  error?: Shared.APIError;
}

export namespace ListTransferDepositAction {
  export interface Data {
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

export interface DepositActionListParams {
  source_address?: string;
}

export namespace DepositActions {
  export import ListTransferDepositAction = DepositActionsAPI.ListTransferDepositAction;
  export import DepositActionListParams = DepositActionsAPI.DepositActionListParams;
}
