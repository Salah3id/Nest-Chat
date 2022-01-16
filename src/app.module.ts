import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlogModule } from './blog/blog.module';
import { AppGateway } from './app.gateway';

@Module({
  imports: [BlogModule],
  controllers: [AppController],
  providers: [AppService, AppGateway],
})
export class AppModule {}
