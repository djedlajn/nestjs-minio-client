import * as Minio from 'minio';

export interface ExtraConfiguration {
  isGlobal?: boolean;
}

export type MinioClient = Minio.Client;

export type MinioCopyConditions = Minio.CopyConditions;
