import * as Minio from 'minio';
import { OPTIONS_TYPE } from './minio.module-definition';

import type { MinioClient, MinioCopyConditions } from './minio.interface';

export function createMinioClient(options: typeof OPTIONS_TYPE): MinioClient {
  const client = new Minio.Client(options);

  return client;
}

export function createCopyConditions(): MinioCopyConditions {
  const copyConditions = new Minio.CopyConditions();

  return copyConditions;
}
