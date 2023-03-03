import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config/dist/config.module';
import { config } from './config';
import { CategoryModule } from './module/category/category.module';
import { PostModule } from './module/post/post.module';

@Module({
  imports: [ConfigModule.forRoot(config),CategoryModule, PostModule,]
})
export class AppModule {}
