// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Layerswap from '@layerswap/sdk';
import { Response } from 'node-fetch';

const client = new Layerswap({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource sources', () => {
  test('list', async () => {
    const responsePromise = client.networks.sources.list();
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
    await expect(client.networks.sources.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Layerswap.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.networks.sources.list(
        {
          destination_network: 'destination_network',
          destination_token: 'destination_token',
          include_swaps: true,
          include_unavailable: true,
          include_unmatched: true,
          network_types: ['string', 'string', 'string'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Layerswap.NotFoundError);
  });
});
