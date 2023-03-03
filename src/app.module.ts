import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoryModule } from './module/category/category.module';
import { PostModule } from './module/post/post.module';

@Module({
  imports: [CategoryModule, PostModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
