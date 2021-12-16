import { ModuleMetadata, Type } from '@nestjs/common/interfaces';
import { ClientOptions } from 'minio';
import { MinioOptionsFactory } from './minio.async-options.factory.interface';

export interface MinioConnectionAsyncOptions
  extends Pick<ModuleMetadata, 'imports'> {
  inject?: any[];
  useExisting?: Type<MinioOptionsFactory>;
  useClass?: Type<MinioOptionsFactory>;
  useFactory?: (...args: any[]) => Promise<ClientOptions> | ClientOptions;
}
