// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Layerswap from '@layerswap/sdk';
import { Response } from 'node-fetch';

const client = new Layerswap({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource quote', () => {
  test('retrieve: only required params', async () => {
    const responsePromise = client.swaps.quote.retrieve({
      amount: 0,
      destination_network: 'destination_network',
      destination_token: 'destination_token',
      source_network: 'source_network',
      source_token: 'source_token',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: required and optional params', async () => {
    const response = await client.swaps.quote.retrieve({
      amount: 0,
      destination_network: 'destination_network',
      destination_token: 'destination_token',
      source_network: 'source_network',
      source_token: 'source_token',
      refuel: true,
      slippage: 'slippage',
      source_address: 'source_address',
      use_deposit_address: true,
    });
  });
});
