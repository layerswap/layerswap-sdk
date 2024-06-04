// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Layerswap from 'layerswap';
import { Response } from 'node-fetch';

const layerswap = new Layerswap({
  lsAPIKey: 'My Ls API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource limits', () => {
  test('list: only required params', async () => {
    const responsePromise = layerswap.limits.list({
      destination_network: 'string',
      destination_token: 'string',
      source_network: 'string',
      source_token: 'string',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await layerswap.limits.list({
      destination_network: 'string',
      destination_token: 'string',
      source_network: 'string',
      source_token: 'string',
      refuel: true,
      use_deposit_address: true,
    });
  });
});
