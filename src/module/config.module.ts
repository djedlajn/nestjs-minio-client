import { Module, DynamicModule } from '@nestjs/common';
import { MinioService } from './config.service';
import * as minio from 'minio';
import { MINIO_CONFIG_OPTIONS } from '../constants';

@Module({})
export class MinioModule {
  static register(options: minio.ClientOptions): DynamicModule {
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
}
