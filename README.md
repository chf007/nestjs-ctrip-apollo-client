# NestJS CtripApolloClientModule

携程 [Apollo 配置中心](https://github.com/ctripcorp/apollo) NestJS 客户端，基于 [node-apollo-client](https://github.com/shinux/node-apollo-client) 封装。

## 安装

```bash
npm install nestjs-ctrip-apollo-client
```

## 使用

```
// 导入 Module
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

// 使用 Service
import { Controller, Get } from '@nestjs/common';
import { CtripApolloClientService } from 'nestjs-ctrip-apollo-client';

@Controller('api')
export class SomeController {
  constructor(private readonly ctripApolloClientService: CtripApolloClientService) {}

  @Get('test')
  async test() {
    return await this.ctripApolloClientService.fetchConfig({
      key: 'someConfigKey'
    });
  }
}

```

