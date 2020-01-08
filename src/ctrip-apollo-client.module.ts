import { DynamicModule, Global, HttpModule, Module } from '@nestjs/common';
import { CtripApolloClientConfig } from './ctrip-apollo-client.config';
import { CtripApolloClientService } from './ctrip-apollo-client.service';

@Global()
@Module({
  imports: [HttpModule],
  providers: [CtripApolloClientService, CtripApolloClientConfig],
  exports: [CtripApolloClientService, CtripApolloClientConfig],
})
export class CtripApolloClientModule {
  static register(config: CtripApolloClientConfig): DynamicModule {
    return {
      module: CtripApolloClientModule,
      providers: [
        {
          provide: CtripApolloClientConfig,
          useValue: config,
        },
      ],
    };
  }
}
