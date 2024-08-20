// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Layerswap from '@layerswap/sdk';
import { Response } from 'node-fetch';

const client = new Layerswap({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource destinations', () => {
  test('list', async () => {
    const responsePromise = client.networks.destinations.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.networks.destinations.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Layerswap.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.networks.destinations.list(
        {
          include_swaps: true,
          include_unavailable: true,
          include_unmatched: true,
          network_types: ['evm', 'starknet', 'solana'],
          source_network: 'source_network',
          source_token: 'source_token',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Layerswap.NotFoundError);
  });
});
