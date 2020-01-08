export class CtripApolloClientConfig {
  configServerUrl = '';
  appId = '';
  cluster = 'default';
  namespaces = ['application'];
  initialConfigs = {};
  listenOnNotification = true;
  fetchCacheInterval = 5 * 60e3;
  cachedConfigFilePath = '/tmp';
}
