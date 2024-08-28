import { BrokerApplicationsListModule } from './list-applications/list-applications.module';
// import { AddApplicationsModule } from './add-applications/add-applications.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    BrokerApplicationsListModule,
    // AddApplicationsModule
  ],
})
export class BrokerApplicationsModule { }
