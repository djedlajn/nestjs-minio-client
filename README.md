<p align="center"><img src="https://avatars1.githubusercontent.com/u/43827489?s=400&u=45ac0ac47d40b6d8f277c96bdf00244c10508aef&v=4"/></p>
<p align="center">
</p>
<h1 align="center">Nestjs Minio Client</h1>

<p align="center"><a href="https://min.io">Minio</a> client for NestJs.</p>

## Features

- Configure and connect to Minio instance

## Prerequisites

- NestJS version 9 or later.

### Installation

**Yarn**

```bash
yarn add nestjs-minio-client
```

**NPM**

```bash
npm install nestjs-minio-client --save
```

### Getting Started

To use Minio client we need to register module for example in `app.module.ts`

```ts
import { Module } from '@nestjs/common';
import { MinioModule } from 'nestjs-minio-client';

@Module({
imports: [
    MinioModule.register({
      endPoint: '127.0.0.1',
      port: 9000,
      useSSL: false,
      accessKey: 'minio_access_key',
      secretKey: 'minio_secret_key'
    })
})

export class AppModule {}
```

If you are using the `@nestjs/config` package from nest, you can use the `ConfigModule` using the `registerAsync()` function to inject your environment variables like this in your custom module:

```ts
import { Module } from '@nestjs/common';
import { MinioModule } from 'nestjs-minio-client';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    MinioModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        return {
          endPoint: config.get('MINIO_ENDPOINT'),
          port: parseInt(config.get('MINIO_PORT')),
          useSSL: false,
          accessKey: config.get('MINIO_ACCESS_KEY'),
          secretKey: config.get('MINIO_SECRET_KEY'),
        };
      },
    }),
  ],
  providers: [MinioClientService],
  exports: [MinioClientService],
})
export class MinioClientModule {}
```

After the registration connection to minio instance should be completed and ready for usage.

Example usage in service.

```ts
import { Injectable } from '@nestjs/common';
import { MinioService } from 'nestjs-minio-client';

@Injectable()
export class ContentService {
  constructor(private readonly minioService: MinioService) {}

  async listAllBuckets() {
    return this.minioService.client.listBuckets();
  }
}
```

For full Client API see Minio Javascript SDK reference [here](https://docs.min.io/docs/javascript-client-api-reference.html)

---
