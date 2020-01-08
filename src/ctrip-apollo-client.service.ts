import { Injectable, Logger } from '@nestjs/common';
import { CtripApolloClientConfig } from './ctrip-apollo-client.config';
import { Apollo } from './ctrip-apollo-client';

@Injectable()
export class CtripApolloClientService {
  public readonly config: CtripApolloClientConfig;
  apollo: any;

  constructor(config: CtripApolloClientConfig) {
    this.config = config;

    this.apollo = new Apollo({
      configServerUrl: config.configServerUrl,
      appId: config.appId,
      cluster: config.cluster || 'default',
      namespaces: config.namespaces || ['application'],
      initialConfigs: config.initialConfigs || {},
      listenOnNotification: config.listenOnNotification || true,
      fetchCacheInterval: config.fetchCacheInterval || 5 * 60e3,
      cachedConfigFilePath: config.cachedConfigFilePath || '/tmp',
    });
  }

  async fetchConfig(params) {
    return await this.apollo.fetchConfig(params);
  }

  async fetchConfigs(params) {
    return await this.apollo.fetchConfigs(params);
  }

  refreshConfigs(configs): void {
    this.apollo.refreshConfigs(configs);
  }

}
