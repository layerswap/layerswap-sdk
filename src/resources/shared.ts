// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

export interface APIError {
  code?: string;

  message?: string;

  metadata?: Record<string, unknown>;
}

export interface Network {
  token?: Token;

  account_explorer_template?: string;

  chain_id?: string | null;

  deposit_methods?: Array<string> | null;

  display_name?: string;

  logo?: string;

  metadata?: NetworkMetadata;

  name?: string;

  node_url?: string | null;

  transaction_explorer_template?: string;

  type?: string;
}

export interface NetworkMetadata {
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

  symbol?: string;
}
