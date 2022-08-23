import { Inject, Injectable } from '@nestjs/common';

import {
  createCopyConditions,
  createMinioClient,
  MODULE_OPTIONS_TOKEN,
  OPTIONS_TYPE,
} from '../utils';

import type { MinioClient, MinioCopyConditions } from '../utils';

@Injectable()
export class MinioService {
  private readonly minioSdk: MinioClient;
  private readonly copyConditionsImplementation: MinioCopyConditions;

  constructor(
    @Inject(MODULE_OPTIONS_TOKEN) private options: typeof OPTIONS_TYPE,
  ) {
    this.minioSdk = createMinioClient(this.options);
    this.copyConditionsImplementation = createCopyConditions();
  }

  public get client(): MinioClient {
    return this.minioSdk;
  }

  public get copyConditions(): MinioCopyConditions {
    return this.copyConditionsImplementation;
  }
}
