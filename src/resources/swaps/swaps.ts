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
  quote: QuoteAPI.Quote = new QuoteAPI.Quote(this._client);

  create(body: SwapCreateParams, options?: Core.RequestOptions): Core.APIPromise<PreparedSwap> {
    return this._client.post('/api/v2/swaps', { body, ...options });
  }

  retrieve(swapId: string, query?: SwapRetrieveParams, options?: Core.RequestOptions): Core.APIPromise<Swap>;
  retrieve(swapId: string, options?: Core.RequestOptions): Core.APIPromise<Swap>;
  retrieve(
    swapId: string,
    query: SwapRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Swap> {
    if (isRequestOptions(query)) {
      return this.retrieve(swapId, {}, query);
    }
    return this._client.get(`/api/v2/swaps/${swapId}`, { query, ...options });
  }

  list(query: SwapListParams, options?: Core.RequestOptions): Core.APIPromise<ListSwap> {
    return this._client.get('/api/v2/swaps', { query, ...options });
  }
}

export interface ListSwap {
  data?: Array<ListSwap.Data> | null;

  error?: ListSwap.Error;
}

export namespace ListSwap {
  export interface Data {
    quote?: SwapsAPI.QuoteModel;

    refuel?: Data.Refuel;

    reward?: Data.Reward;

    swap?: Data.Swap;
  }

  export namespace Data {
    export interface Refuel {
      token?: Shared.Token;

      amount?: number;

      amount_in_usd?: number;

      network?: Shared.Network;
    }

    export interface Reward {
      token?: Shared.Token;

      amount?: number;

      amount_in_usd?: number;

      network?: Shared.Network;
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
  }

  export interface Error {
    code?: string;

    message?: string;

    metadata?: Record<string, unknown>;
  }
}

export interface NetworkWithRouteTokens {
  data?: Array<NetworkWithRouteTokens.Data> | null;

  error?: NetworkWithRouteTokens.Error;
}

export namespace NetworkWithRouteTokens {
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

      refuel?: Token.Refuel;

      status?: string;

      symbol?: string;
    }

    export namespace Token {
      export interface Refuel {
        token?: Shared.Token;

        amount?: number;

        amount_in_usd?: number;

        network?: Shared.Network;
      }
    }
  }

  export interface Error {
    code?: string;

    message?: string;

    metadata?: Record<string, unknown>;
  }
}

export interface NetworkWithTokens {
  data?: Array<NetworkWithTokens.Data> | null;

  error?: NetworkWithTokens.Error;
}

export namespace NetworkWithTokens {
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

export interface PreparedSwap {
  data?: PreparedSwap.Data;

  error?: PreparedSwap.Error;
}

export namespace PreparedSwap {
  export interface Data {
    deposit_actions?: Array<Data.DepositAction>;

    quote?: SwapsAPI.QuoteModel;

    refuel?: Data.Refuel;

    reward?: Data.Reward;

    swap?: Data.Swap;
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

    export interface Refuel {
      token?: Shared.Token;

      amount?: number;

      amount_in_usd?: number;

      network?: Shared.Network;
    }

    export interface Reward {
      token?: Shared.Token;

      amount?: number;

      amount_in_usd?: number;

      network?: Shared.Network;
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
  }

  export interface Error {
    code?: string;

    message?: string;

    metadata?: Record<string, unknown>;
  }
}

export interface QuoteModel {
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
  data?: Swap.Data;

  error?: Swap.Error;
}

export namespace Swap {
  export interface Data {
    quote?: SwapsAPI.QuoteModel;

    refuel?: Data.Refuel;

    reward?: Data.Reward;

    swap?: Data.Swap;
  }

  export namespace Data {
    export interface Refuel {
      token?: Shared.Token;

      amount?: number;

      amount_in_usd?: number;

      network?: Shared.Network;
    }

    export interface Reward {
      token?: Shared.Token;

      amount?: number;

      amount_in_usd?: number;

      network?: Shared.Network;
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
  }

  export interface Error {
    code?: string;

    message?: string;

    metadata?: Record<string, unknown>;
  }
}

export interface SwapQuote {
  data?: SwapQuote.Data;

  error?: SwapQuote.Error;
}

export namespace SwapQuote {
  export interface Data {
    quote?: SwapsAPI.QuoteModel;

    refuel?: Data.Refuel;

    reward?: Data.Reward;
  }

  export namespace Data {
    export interface Refuel {
      token?: Shared.Token;

      amount?: number;

      amount_in_usd?: number;

      network?: Shared.Network;
    }

    export interface Reward {
      token?: Shared.Token;

      amount?: number;

      amount_in_usd?: number;

      network?: Shared.Network;
    }
  }

  export interface Error {
    code?: string;

    message?: string;

    metadata?: Record<string, unknown>;
  }
}

export interface SwapRouteLimits {
  data?: SwapRouteLimits.Data;

  error?: SwapRouteLimits.Error;
}

export namespace SwapRouteLimits {
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
  export import ListSwap = SwapsAPI.ListSwap;
  export import NetworkWithRouteTokens = SwapsAPI.NetworkWithRouteTokens;
  export import NetworkWithTokens = SwapsAPI.NetworkWithTokens;
  export import PreparedSwap = SwapsAPI.PreparedSwap;
  export import QuoteModel = SwapsAPI.QuoteModel;
  export import Swap = SwapsAPI.Swap;
  export import SwapQuote = SwapsAPI.SwapQuote;
  export import SwapRouteLimits = SwapsAPI.SwapRouteLimits;
  export import SwapCreateParams = SwapsAPI.SwapCreateParams;
  export import SwapRetrieveParams = SwapsAPI.SwapRetrieveParams;
  export import SwapListParams = SwapsAPI.SwapListParams;
  export import DepositActions = DepositActionsAPI.DepositActions;
  export import ListTransferDepositAction = DepositActionsAPI.ListTransferDepositAction;
  export import DepositActionListParams = DepositActionsAPI.DepositActionListParams;
  export import Limits = LimitsAPI.Limits;
  export import LimitListParams = LimitsAPI.LimitListParams;
  export import Quote = QuoteAPI.Quote;
  export import QuoteRetrieveParams = QuoteAPI.QuoteRetrieveParams;
}
