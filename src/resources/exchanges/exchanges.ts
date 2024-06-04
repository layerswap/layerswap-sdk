// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as DepositNetworksAPI from './deposit-networks';
import * as DestinationNetworksAPI from './destination-networks';
import * as SourceNetworksAPI from './source-networks';
import * as WithdrawalNetworksAPI from './withdrawal-networks';

export class Exchanges extends APIResource {
  depositNetworks: DepositNetworksAPI.DepositNetworks = new DepositNetworksAPI.DepositNetworks(this._client);
  withdrawalNetworks: WithdrawalNetworksAPI.WithdrawalNetworks = new WithdrawalNetworksAPI.WithdrawalNetworks(
    this._client,
  );
  sourceNetworks: SourceNetworksAPI.SourceNetworks = new SourceNetworksAPI.SourceNetworks(this._client);
  destinationNetworks: DestinationNetworksAPI.DestinationNetworks =
    new DestinationNetworksAPI.DestinationNetworks(this._client);
}

export namespace Exchanges {
  export import DepositNetworks = DepositNetworksAPI.DepositNetworks;
  export import WithdrawalNetworks = WithdrawalNetworksAPI.WithdrawalNetworks;
  export import SourceNetworks = SourceNetworksAPI.SourceNetworks;
  export import SourceNetwork = SourceNetworksAPI.SourceNetwork;
  export import DestinationNetworks = DestinationNetworksAPI.DestinationNetworks;
  export import DestinationNetwork = DestinationNetworksAPI.DestinationNetwork;
}
