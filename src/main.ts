import { ConfigService } from '@nestjs/config/dist/config.service';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = app.get(ConfigService)

  const host = config.getOrThrow<string>('app.host')
  const port = config.getOrThrow<string>('app.port')

  await app.listen(port, host);
}
bootstrap();
