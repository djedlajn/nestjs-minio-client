import { ConfigurableModuleBuilder } from '@nestjs/common';
import { ClientOptions } from 'minio';
import { ExtraConfiguration } from './minio.interface';

export const {
  ConfigurableModuleClass,
  MODULE_OPTIONS_TOKEN,
  OPTIONS_TYPE,
  ASYNC_OPTIONS_TYPE,
} = new ConfigurableModuleBuilder<ClientOptions>()
  .setExtras<ExtraConfiguration>({ isGlobal: false }, (definition, extras) => ({
    ...definition,
    global: extras.isGlobal,
  }))
  .build();
