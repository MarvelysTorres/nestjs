import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrganizationsController } from './controllers/organizations/organizations.controller';
import { OrganizationsService } from './services/organizations/organizations.service';

@Module({
  imports: [],
  controllers: [AppController, OrganizationsController],
  providers: [AppService, OrganizationsService],
})
export class AppModule {}
