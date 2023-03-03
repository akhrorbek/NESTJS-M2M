import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config/dist/config.module';
import { config } from './config';
import { JobModule } from './module/job/job.module';
import { EmployeesModule } from './module/employees/employees.module';
@Module({
  imports: [ConfigModule.forRoot(config), JobModule, EmployeesModule],
})
export class AppModule {}
