export class CtripApolloClientConfig {
  configServerUrl: string;
  appId: string;
  cluster?: string;
  namespaces?: string[];
  initialConfigs?: any;
  listenOnNotification?: boolean;
  fetchCacheInterval?: number;
  cachedConfigFilePath?: string;
}
