import { Injectable, Inject } from '@nestjs/common';
import * as Minio from 'minio';
import { MINIO_CONFIG_OPTIONS } from '../constants';

@Injectable()
export class MinioService {
  private readonly minioSdk: Minio.Client;
  constructor(
    @Inject(MINIO_CONFIG_OPTIONS) private options: Minio.ClientOptions,
  ) {
    this.minioSdk = new Minio.Client(this.options);
  }

  public get client(): Minio.Client {
    return this.minioSdk;
  }
}
