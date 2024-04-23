// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'Layerswap/core';
import { APIResource } from 'Layerswap/resource';
import { isRequestOptions } from 'Layerswap/core';
import * as SwapsAPI from 'Layerswap/resources/swaps';

export class Swaps extends APIResource {
  create(body: SwapCreateParams, options?: Core.RequestOptions): Core.APIPromise<PreparedSwapResponse> {
    return this._client.post('/api/v2/swaps', { body, ...options });
  }

  retrieve(
    swapId: string,
    query?: SwapRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SwapResponse>;
  retrieve(swapId: string, options?: Core.RequestOptions): Core.APIPromise<SwapResponse>;
  retrieve(
    swapId: string,
    query: SwapRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<SwapResponse> {
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
  data?: PreparedSwapResponse.Data;

  error?: PreparedSwapResponse.Error;
}

export namespace PreparedSwapResponse {
  export interface Data {
    deposit_actions?: Array<Data.DepositAction>;

    quote?: Data.Quote;

    refuel?: Data.Refuel;

    reward?: Data.Reward;

    swap?: Data.Swap;
  }

  export namespace Data {
    export interface DepositAction {
      token?: DepositAction.Token;

      amount?: number;

      amount_in_base_units?: string;

      call_data?: string | null;

      fee_token?: DepositAction.FeeToken;

      network?: DepositAction.Network;

      order?: number;

      to_address?: string;

      type?: string;
    }

    export namespace DepositAction {
      export interface Token {
        contract?: string | null;

        decimals?: number;

        logo?: string;

        precision?: number;

        price_in_usd?: number;

        symbol?: string;
      }

      export interface FeeToken {
        contract?: string | null;

        decimals?: number;

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

    export interface Quote {
      avg_completion_time?: string;

      blockchain_fee?: number;

      min_receive_amount?: number;

      receive_amount?: number;

      service_fee?: number;

      total_fee?: number;

      total_fee_in_usd?: number;
    }

    export interface Refuel {
      token?: Refuel.Token;

      amount?: number;

      amount_in_usd?: number;

      network?: Refuel.Network;
    }

    export namespace Refuel {
      export interface Token {
        contract?: string | null;

        decimals?: number;

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

    export interface Reward {
      token?: Reward.Token;

      amount?: number;

      amount_in_usd?: number;

      network?: Reward.Network;
    }

    export namespace Reward {
      export interface Token {
        contract?: string | null;

        decimals?: number;

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

    export interface Swap {
      id?: string;

      created_date?: string;

      destination_address?: string;

      destination_exchange?: Swap.DestinationExchange;

      destination_network?: Swap.DestinationNetwork;

      destination_token?: Swap.DestinationToken;

      fail_reason?: string | null;

      metadata?: Swap.Metadata;

      requested_amount?: number;

      source_exchange?: Swap.SourceExchange;

      source_network?: Swap.SourceNetwork;

      source_token?: Swap.SourceToken;

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

      export interface DestinationNetwork {
        token?: DestinationNetwork.Token;

        account_explorer_template?: string;

        chain_id?: string | null;

        deposit_methods?: Array<string> | null;

        display_name?: string;

        logo?: string;

        metadata?: DestinationNetwork.Metadata;

        name?: string;

        node_url?: string | null;

        transaction_explorer_template?: string;

        type?: string;
      }

      export namespace DestinationNetwork {
        export interface Token {
          contract?: string | null;

          decimals?: number;

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

      export interface DestinationToken {
        contract?: string | null;

        decimals?: number;

        logo?: string;

        precision?: number;

        price_in_usd?: number;

        symbol?: string;
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

      export interface SourceNetwork {
        token?: SourceNetwork.Token;

        account_explorer_template?: string;

        chain_id?: string | null;

        deposit_methods?: Array<string> | null;

        display_name?: string;

        logo?: string;

        metadata?: SourceNetwork.Metadata;

        name?: string;

        node_url?: string | null;

        transaction_explorer_template?: string;

        type?: string;
      }

      export namespace SourceNetwork {
        export interface Token {
          contract?: string | null;

          decimals?: number;

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

      export interface SourceToken {
        contract?: string | null;

        decimals?: number;

        logo?: string;

        precision?: number;

        price_in_usd?: number;

        symbol?: string;
      }

      export interface Transaction {
        token?: Transaction.Token;

        amount?: number;

        confirmations?: number;

        from?: string | null;

        max_confirmations?: number;

        network?: Transaction.Network;

        status?: string;

        timestamp?: string;

        to?: string | null;

        transaction_hash?: string | null;

        type?: string;
      }

      export namespace Transaction {
        export interface Token {
          contract?: string | null;

          decimals?: number;

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
    }
  }

  export interface Error {
    code?: string;

    message?: string;

    metadata?: Record<string, unknown>;
  }
}

export interface SwapListResponse {
  data?: Array<SwapListResponse.Data> | null;

  error?: SwapListResponse.Error;
}

export namespace SwapListResponse {
  export interface Data {
    quote?: Data.Quote;

    refuel?: Data.Refuel;

    reward?: Data.Reward;

    swap?: Data.Swap;
  }

  export namespace Data {
    export interface Quote {
      avg_completion_time?: string;

      blockchain_fee?: number;

      min_receive_amount?: number;

      receive_amount?: number;

      service_fee?: number;

      total_fee?: number;

      total_fee_in_usd?: number;
    }

    export interface Refuel {
      token?: Refuel.Token;

      amount?: number;

      amount_in_usd?: number;

      network?: Refuel.Network;
    }

    export namespace Refuel {
      export interface Token {
        contract?: string | null;

        decimals?: number;

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

    export interface Reward {
      token?: Reward.Token;

      amount?: number;

      amount_in_usd?: number;

      network?: Reward.Network;
    }

    export namespace Reward {
      export interface Token {
        contract?: string | null;

        decimals?: number;

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

    export interface Swap {
      id?: string;

      created_date?: string;

      destination_address?: string;

      destination_exchange?: Swap.DestinationExchange;

      destination_network?: Swap.DestinationNetwork;

      destination_token?: Swap.DestinationToken;

      fail_reason?: string | null;

      metadata?: Swap.Metadata;

      requested_amount?: number;

      source_exchange?: Swap.SourceExchange;

      source_network?: Swap.SourceNetwork;

      source_token?: Swap.SourceToken;

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

      export interface DestinationNetwork {
        token?: DestinationNetwork.Token;

        account_explorer_template?: string;

        chain_id?: string | null;

        deposit_methods?: Array<string> | null;

        display_name?: string;

        logo?: string;

        metadata?: DestinationNetwork.Metadata;

        name?: string;

        node_url?: string | null;

        transaction_explorer_template?: string;

        type?: string;
      }

      export namespace DestinationNetwork {
        export interface Token {
          contract?: string | null;

          decimals?: number;

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

      export interface DestinationToken {
        contract?: string | null;

        decimals?: number;

        logo?: string;

        precision?: number;

        price_in_usd?: number;

        symbol?: string;
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

      export interface SourceNetwork {
        token?: SourceNetwork.Token;

        account_explorer_template?: string;

        chain_id?: string | null;

        deposit_methods?: Array<string> | null;

        display_name?: string;

        logo?: string;

        metadata?: SourceNetwork.Metadata;

        name?: string;

        node_url?: string | null;

        transaction_explorer_template?: string;

        type?: string;
      }

      export namespace SourceNetwork {
        export interface Token {
          contract?: string | null;

          decimals?: number;

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

      export interface SourceToken {
        contract?: string | null;

        decimals?: number;

        logo?: string;

        precision?: number;

        price_in_usd?: number;

        symbol?: string;
      }

      export interface Transaction {
        token?: Transaction.Token;

        amount?: number;

        confirmations?: number;

        from?: string | null;

        max_confirmations?: number;

        network?: Transaction.Network;

        status?: string;

        timestamp?: string;

        to?: string | null;

        transaction_hash?: string | null;

        type?: string;
      }

      export namespace Transaction {
        export interface Token {
          contract?: string | null;

          decimals?: number;

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
    }
  }

  export interface Error {
    code?: string;

    message?: string;

    metadata?: Record<string, unknown>;
  }
}

export interface SwapResponse {
  data?: SwapResponse.Data;

  error?: SwapResponse.Error;
}

export namespace SwapResponse {
  export interface Data {
    quote?: Data.Quote;

    refuel?: Data.Refuel;

    reward?: Data.Reward;

    swap?: Data.Swap;
  }

  export namespace Data {
    export interface Quote {
      avg_completion_time?: string;

      blockchain_fee?: number;

      min_receive_amount?: number;

      receive_amount?: number;

      service_fee?: number;

      total_fee?: number;

      total_fee_in_usd?: number;
    }

    export interface Refuel {
      token?: Refuel.Token;

      amount?: number;

      amount_in_usd?: number;

      network?: Refuel.Network;
    }

    export namespace Refuel {
      export interface Token {
        contract?: string | null;

        decimals?: number;

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

    export interface Reward {
      token?: Reward.Token;

      amount?: number;

      amount_in_usd?: number;

      network?: Reward.Network;
    }

    export namespace Reward {
      export interface Token {
        contract?: string | null;

        decimals?: number;

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

    export interface Swap {
      id?: string;

      created_date?: string;

      destination_address?: string;

      destination_exchange?: Swap.DestinationExchange;

      destination_network?: Swap.DestinationNetwork;

      destination_token?: Swap.DestinationToken;

      fail_reason?: string | null;

      metadata?: Swap.Metadata;

      requested_amount?: number;

      source_exchange?: Swap.SourceExchange;

      source_network?: Swap.SourceNetwork;

      source_token?: Swap.SourceToken;

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

      export interface DestinationNetwork {
        token?: DestinationNetwork.Token;

        account_explorer_template?: string;

        chain_id?: string | null;

        deposit_methods?: Array<string> | null;

        display_name?: string;

        logo?: string;

        metadata?: DestinationNetwork.Metadata;

        name?: string;

        node_url?: string | null;

        transaction_explorer_template?: string;

        type?: string;
      }

      export namespace DestinationNetwork {
        export interface Token {
          contract?: string | null;

          decimals?: number;

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

      export interface DestinationToken {
        contract?: string | null;

        decimals?: number;

        logo?: string;

        precision?: number;

        price_in_usd?: number;

        symbol?: string;
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

      export interface SourceNetwork {
        token?: SourceNetwork.Token;

        account_explorer_template?: string;

        chain_id?: string | null;

        deposit_methods?: Array<string> | null;

        display_name?: string;

        logo?: string;

        metadata?: SourceNetwork.Metadata;

        name?: string;

        node_url?: string | null;

        transaction_explorer_template?: string;

        type?: string;
      }

      export namespace SourceNetwork {
        export interface Token {
          contract?: string | null;

          decimals?: number;

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

      export interface SourceToken {
        contract?: string | null;

        decimals?: number;

        logo?: string;

        precision?: number;

        price_in_usd?: number;

        symbol?: string;
      }

      export interface Transaction {
        token?: Transaction.Token;

        amount?: number;

        confirmations?: number;

        from?: string | null;

        max_confirmations?: number;

        network?: Transaction.Network;

        status?: string;

        timestamp?: string;

        to?: string | null;

        transaction_hash?: string | null;

        type?: string;
      }

      export namespace Transaction {
        export interface Token {
          contract?: string | null;

          decimals?: number;

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
    }
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
}

export interface SwapRetrieveParams {
  sourceAddress?: string;
}

export interface SwapListParams {
  address: string;

  page?: number;
}

export namespace Swaps {
  export import PreparedSwapResponse = SwapsAPI.PreparedSwapResponse;
  export import SwapListResponse = SwapsAPI.SwapListResponse;
  export import SwapResponse = SwapsAPI.SwapResponse;
  export import SwapCreateParams = SwapsAPI.SwapCreateParams;
  export import SwapRetrieveParams = SwapsAPI.SwapRetrieveParams;
  export import SwapListParams = SwapsAPI.SwapListParams;
}
