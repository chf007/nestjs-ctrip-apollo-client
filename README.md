# NestJS CtripApolloClientModule

携程 [Apollo 配置中心](https://github.com/ctripcorp/apollo) NestJS 客户端

## 安装

```bash
npm install nestjs-ctrip-apollo-client
```

## 使用

```
import { Module } from '@nestjs/common';
import { CtripApolloClientModule } from 'nestjs-ctrip-apollo-client';

@Module({
  imports: [
    CtripApolloClientModule.register({
      configServerUrl: 'http://xxx.xxx.xxx.xxx',
      appId: 'my-app',
      cluster: 'default',
      namespaces: ['application'],
      initialConfigs: {},
      listenOnNotification: true,
      fetchCacheInterval: 5 * 60e3,
      cachedConfigFilePath: '/tmp',
    }),
  ],
  providers: [],
})
export class AppModule {}
```

