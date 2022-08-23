import { Module } from '@nestjs/common';

import { ConfigurableModuleClass } from '../utils';

import { MinioService } from './minio.service';

@Module({
  providers: [MinioService],
  exports: [MinioService],
})
export class MinioModule extends ConfigurableModuleClass {}
