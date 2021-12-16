import { Inject, Injectable } from '@nestjs/common';
import * as Minio from 'minio';
import { MINIO_CONFIG_OPTIONS } from '../constants';

@Injectable()
export class MinioService {
  private readonly implMinioSdk: Minio.Client;
  private readonly implCopyConditions: Minio.CopyConditions;
  constructor(
    @Inject(MINIO_CONFIG_OPTIONS) private options: Minio.ClientOptions,
  ) {
    this.implMinioSdk = new Minio.Client(this.options);
    this.implCopyConditions = new Minio.CopyConditions();
  }

  public get client(): Minio.Client {
    return this.implMinioSdk;
  }

  public get copyConditions(): Minio.CopyConditions {
    return this.implCopyConditions;
  }
}
