// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'Layerswap/core';
import { APIResource } from 'Layerswap/resource';
import * as SwapsAPI from 'Layerswap/resources/swaps';

export class Swaps extends APIResource {
  create(body: SwapCreateParams, options?: Core.RequestOptions): Core.APIPromise<APIResponseSwapResponse> {
    return this._client.post('/api/v2-alpha/swaps', { body, ...options });
  }

  retrieve(swapId: string, options?: Core.RequestOptions): Core.APIPromise<APIResponseSwapResponse> {
    return this._client.get(`/api/v2-alpha/swaps/${swapId}`, options);
  }

  list(query: SwapListParams, options?: Core.RequestOptions): Core.APIPromise<APIResponseSwapModel> {
    return this._client.get('/api/v2-alpha/swaps', { query, ...options });
  }
}

export interface APIResponseSwapModel {
  data?: APIResponseSwapModel.Data;

  error?: APIResponseSwapModel.Error;
}

export namespace APIResponseSwapModel {
  export interface Data {
    id?: string;

    created_date?: string;

    deposit_mode?: string;

    destination_address?: string;

    destination_exchange?: Data.DestinationExchange;

    destination_network?: Data.DestinationNetwork;

    destination_token?: Data.DestinationToken;

    metadata?: Data.Metadata;

    requested_amount?: number;

    source_address?: string;

    source_exchange?: Data.SourceExchange;

    source_network?: Data.SourceNetwork;

    source_token?: Data.SourceToken;

    status?: string;

    transactions?: Array<Data.Transaction>;
  }

  export namespace Data {
    export interface DestinationExchange {
      display_name?: string;

      logo?: string;

      metadata?: DestinationExchange.Metadata;

      name?: string;
    }

    export namespace DestinationExchange {
      export interface Metadata {
        listing_date?: string;

        o_auth?: Metadata.OAuth;
      }

      export namespace Metadata {
        export interface OAuth {
          authorize_url?: string;

          connect_url?: string;
        }
      }
    }

    export interface DestinationNetwork {
      account_explorer_template?: string;

      chain_id?: string | null;

      display_name?: string;

      logo?: string;

      metadata?: DestinationNetwork.Metadata;

      name?: string;

      node_url?: string | null;

      transaction_explorer_template?: string;

      type?: string;
    }

    export namespace DestinationNetwork {
      export interface Metadata {
        evm_multi_call_contract?: string | null;

        evm_oracle_contract?: string | null;

        listing_date?: string;
      }
    }

    export interface DestinationToken {
      contract?: string | null;

      decimals?: number;

      is_native?: boolean;

      logo?: string;

      precision?: number;

      price_in_usd?: number;

      symbol?: string;
    }

    export interface Metadata {
      client_app?: string;

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

        o_auth?: Metadata.OAuth;
      }

      export namespace Metadata {
        export interface OAuth {
          authorize_url?: string;

          connect_url?: string;
        }
      }
    }

    export interface SourceNetwork {
      account_explorer_template?: string;

      chain_id?: string | null;

      display_name?: string;

      logo?: string;

      metadata?: SourceNetwork.Metadata;

      name?: string;

      node_url?: string | null;

      transaction_explorer_template?: string;

      type?: string;
    }

    export namespace SourceNetwork {
      export interface Metadata {
        evm_multi_call_contract?: string | null;

        evm_oracle_contract?: string | null;

        listing_date?: string;
      }
    }

    export interface SourceToken {
      contract?: string | null;

      decimals?: number;

      is_native?: boolean;

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

        is_native?: boolean;

        logo?: string;

        precision?: number;

        price_in_usd?: number;

        symbol?: string;
      }

      export interface Network {
        account_explorer_template?: string;

        chain_id?: string | null;

        display_name?: string;

        logo?: string;

        metadata?: Network.Metadata;

        name?: string;

        node_url?: string | null;

        transaction_explorer_template?: string;

        type?: string;
      }

      export namespace Network {
        export interface Metadata {
          evm_multi_call_contract?: string | null;

          evm_oracle_contract?: string | null;

          listing_date?: string;
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

export interface APIResponseSwapResponse {
  data?: APIResponseSwapResponse.Data;

  error?: APIResponseSwapResponse.Error;
}

export namespace APIResponseSwapResponse {
  export interface Data {
    deposit_method?: Data.DepositMethod;

    quote?: Data.Quote;

    refuel?: Data.Refuel;

    swap?: Data.Swap;
  }

  export namespace Data {
    export interface DepositMethod {
      deposit_address?: DepositMethod.DepositAddress;

      wallet?: DepositMethod.Wallet;
    }

    export namespace DepositMethod {
      export interface DepositAddress {
        token?: DepositAddress.Token;

        amount?: number;

        amount_in_base_units?: string;

        network?: DepositAddress.Network;

        to_address?: string;
      }

      export namespace DepositAddress {
        export interface Token {
          contract?: string | null;

          decimals?: number;

          is_native?: boolean;

          logo?: string;

          precision?: number;

          price_in_usd?: number;

          symbol?: string;
        }

        export interface Network {
          account_explorer_template?: string;

          chain_id?: string | null;

          display_name?: string;

          logo?: string;

          metadata?: Network.Metadata;

          name?: string;

          node_url?: string | null;

          transaction_explorer_template?: string;

          type?: string;
        }

        export namespace Network {
          export interface Metadata {
            evm_multi_call_contract?: string | null;

            evm_oracle_contract?: string | null;

            listing_date?: string;
          }
        }
      }

      export interface Wallet {
        token?: Wallet.Token;

        amount?: number;

        amount_in_base_units?: string;

        call_data?: string | null;

        fee?: Wallet.Fee;

        network?: Wallet.Network;

        to_address?: string;
      }

      export namespace Wallet {
        export interface Token {
          contract?: string | null;

          decimals?: number;

          is_native?: boolean;

          logo?: string;

          precision?: number;

          price_in_usd?: number;

          symbol?: string;
        }

        export interface Fee {
          token?: Fee.Token;

          amount?: number;

          amount_in_base_units?: string;

          gas_limit?: string | null;

          gas_price_in_wei?: string | null;

          max_fee_per_gas_in_wei?: string | null;

          max_priority_fee_in_wei?: string | null;
        }

        export namespace Fee {
          export interface Token {
            contract?: string | null;

            decimals?: number;

            is_native?: boolean;

            logo?: string;

            precision?: number;

            price_in_usd?: number;

            symbol?: string;
          }
        }

        export interface Network {
          account_explorer_template?: string;

          chain_id?: string | null;

          display_name?: string;

          logo?: string;

          metadata?: Network.Metadata;

          name?: string;

          node_url?: string | null;

          transaction_explorer_template?: string;

          type?: string;
        }

        export namespace Network {
          export interface Metadata {
            evm_multi_call_contract?: string | null;

            evm_oracle_contract?: string | null;

            listing_date?: string;
          }
        }
      }
    }

    export interface Quote {
      avg_completion_time?: Quote.AvgCompletionTime;

      blockchain_fee?: number;

      deposit_gas_fee?: number | null;

      min_receive_amount?: number;

      receive_amount?: number;

      service_fee?: number;

      total_fee?: number;

      total_fee_in_usd?: number;
    }

    export namespace Quote {
      export interface AvgCompletionTime {
        days?: number;

        hours?: number;

        microseconds?: number;

        milliseconds?: number;

        minutes?: number;

        nanoseconds?: number;

        seconds?: number;

        ticks?: number;

        total_days?: number;

        total_hours?: number;

        total_microseconds?: number;

        total_milliseconds?: number;

        total_minutes?: number;

        total_nanoseconds?: number;

        total_seconds?: number;
      }
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

        is_native?: boolean;

        logo?: string;

        precision?: number;

        price_in_usd?: number;

        symbol?: string;
      }

      export interface Network {
        account_explorer_template?: string;

        chain_id?: string | null;

        display_name?: string;

        logo?: string;

        metadata?: Network.Metadata;

        name?: string;

        node_url?: string | null;

        transaction_explorer_template?: string;

        type?: string;
      }

      export namespace Network {
        export interface Metadata {
          evm_multi_call_contract?: string | null;

          evm_oracle_contract?: string | null;

          listing_date?: string;
        }
      }
    }

    export interface Swap {
      id?: string;

      created_date?: string;

      deposit_mode?: string;

      destination_address?: string;

      destination_exchange?: Swap.DestinationExchange;

      destination_network?: Swap.DestinationNetwork;

      destination_token?: Swap.DestinationToken;

      metadata?: Swap.Metadata;

      requested_amount?: number;

      source_address?: string;

      source_exchange?: Swap.SourceExchange;

      source_network?: Swap.SourceNetwork;

      source_token?: Swap.SourceToken;

      status?: string;

      transactions?: Array<Swap.Transaction>;
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

          o_auth?: Metadata.OAuth;
        }

        export namespace Metadata {
          export interface OAuth {
            authorize_url?: string;

            connect_url?: string;
          }
        }
      }

      export interface DestinationNetwork {
        account_explorer_template?: string;

        chain_id?: string | null;

        display_name?: string;

        logo?: string;

        metadata?: DestinationNetwork.Metadata;

        name?: string;

        node_url?: string | null;

        transaction_explorer_template?: string;

        type?: string;
      }

      export namespace DestinationNetwork {
        export interface Metadata {
          evm_multi_call_contract?: string | null;

          evm_oracle_contract?: string | null;

          listing_date?: string;
        }
      }

      export interface DestinationToken {
        contract?: string | null;

        decimals?: number;

        is_native?: boolean;

        logo?: string;

        precision?: number;

        price_in_usd?: number;

        symbol?: string;
      }

      export interface Metadata {
        client_app?: string;

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

          o_auth?: Metadata.OAuth;
        }

        export namespace Metadata {
          export interface OAuth {
            authorize_url?: string;

            connect_url?: string;
          }
        }
      }

      export interface SourceNetwork {
        account_explorer_template?: string;

        chain_id?: string | null;

        display_name?: string;

        logo?: string;

        metadata?: SourceNetwork.Metadata;

        name?: string;

        node_url?: string | null;

        transaction_explorer_template?: string;

        type?: string;
      }

      export namespace SourceNetwork {
        export interface Metadata {
          evm_multi_call_contract?: string | null;

          evm_oracle_contract?: string | null;

          listing_date?: string;
        }
      }

      export interface SourceToken {
        contract?: string | null;

        decimals?: number;

        is_native?: boolean;

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

          is_native?: boolean;

          logo?: string;

          precision?: number;

          price_in_usd?: number;

          symbol?: string;
        }

        export interface Network {
          account_explorer_template?: string;

          chain_id?: string | null;

          display_name?: string;

          logo?: string;

          metadata?: Network.Metadata;

          name?: string;

          node_url?: string | null;

          transaction_explorer_template?: string;

          type?: string;
        }

        export namespace Network {
          export interface Metadata {
            evm_multi_call_contract?: string | null;

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

  app_name?: string | null;

  deposit_mode?: string;

  destination_address?: string;

  destination_exchange?: string | null;

  destination_network?: string;

  destination_token?: string;

  reference_id?: string | null;

  refuel?: boolean;

  slippage?: number | null;

  source_address?: string | null;

  source_exchange?: string | null;

  source_network?: string;

  source_token?: string;
}

export interface SwapListParams {
  address: string;

  page?: number;
}

export namespace Swaps {
  export import APIResponseSwapModel = SwapsAPI.APIResponseSwapModel;
  export import APIResponseSwapResponse = SwapsAPI.APIResponseSwapResponse;
  export import SwapCreateParams = SwapsAPI.SwapCreateParams;
  export import SwapListParams = SwapsAPI.SwapListParams;
}
