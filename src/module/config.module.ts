import { Module, DynamicModule, Provider } from '@nestjs/common';
import { MinioService } from './config.service';
import { MINIO_CONFIG_OPTIONS } from '../constants';
import { MinioOptions } from 'src/interfaces/minio.options.interface';
import { MinioConnectionAsyncOptions } from 'src/interfaces/minio.async-options.interfaces';
import { MinioOptionsFactory } from 'src/interfaces/minio.async-options.factory.interface';

@Module({})
export class MinioModule {
  static register(options: MinioOptions): DynamicModule {
    return {
      module: MinioModule,
      providers: [
        {
          provide: MINIO_CONFIG_OPTIONS,
          useValue: options,
        },
        MinioService,
      ],
      exports: [MinioService],
    };
  }

  public static registerAsync(
    options: MinioConnectionAsyncOptions,
  ): DynamicModule {
    const allImports = [...new Set([].concat(options.imports))];

    return {
      module: MinioModule,
      imports: allImports || [],
      providers: [this.createConnectAsyncProviders(options), MinioService],
      exports: [MinioModule],
    };
  }

  private static createConnectAsyncProviders(
    options: MinioConnectionAsyncOptions,
  ): Provider {
    if (options.useFactory) {
      return {
        provide: MINIO_CONFIG_OPTIONS,
        useFactory: options.useFactory,
        inject: options.inject || [],
      };
    }

    // For useClass and useExisting...
    return {
      provide: MINIO_CONFIG_OPTIONS,
      useFactory: async (optionsFactory: MinioOptionsFactory) =>
        await optionsFactory.createPiConnectionOptions(),
      inject: [options.useExisting || options.useClass],
    };
  }
}
