import { MinioOptions } from './minio.options.interface';

export interface MinioOptionsFactory {
  createPiConnectionOptions(): Promise<MinioOptions> | MinioOptions;
}
