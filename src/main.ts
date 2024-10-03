import { NestFactory } from '@nestjs/core';
import { Logger, ValidationPipe } from '@nestjs/common';

import { AppModule } from './app.module';
import { envs } from './config';
import { CustomRpcExceptionFilter } from './common';

async function bootstrap() {
  const logger = new Logger('Gateway => Main');

  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
    }),
  );

  app.useGlobalFilters(new CustomRpcExceptionFilter());

  await app.listen(envs.port);
  logger.log(`Server is running on: ${await app.getUrl()}`);
}
bootstrap();
