import { ClientOptions } from 'minio';

export interface MinioOptionsFactory {
  createPiConnectionOptions(): Promise<ClientOptions> | ClientOptions;
}
