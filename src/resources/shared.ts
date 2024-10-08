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

  type?: 'evm' | 'starknet' | 'solana' | 'cosmos' | 'starkex' | 'zksynclite' | 'ton' | 'paradex' | 'tron';
}

export interface NetworkMetadata {
  evm_multicall_contract?: string | null;

  evm_oracle_contract?: string | null;

  listing_date?: string;
}

export interface NetworkWithTokens {
  token?: Token;

  account_explorer_template?: string;

  chain_id?: string | null;

  deposit_methods?: Array<string> | null;

  display_name?: string;

  logo?: string;

  metadata?: NetworkMetadata;

  name?: string;

  node_url?: string | null;

  tokens?: Array<Token>;

  transaction_explorer_template?: string;

  type?: 'evm' | 'starknet' | 'solana' | 'cosmos' | 'starkex' | 'zksynclite' | 'ton' | 'paradex' | 'tron';
}

export interface Token {
  contract?: string | null;

  decimals?: number;

  display_asset?: string;

  listing_date?: string;

  logo?: string;

  precision?: number;

  price_in_usd?: number;

  symbol?: string;
}
