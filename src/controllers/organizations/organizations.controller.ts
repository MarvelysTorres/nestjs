import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { OrganizationsService } from '../../services/organizations/organizations.service';
import {
  CreateOrganizationDto,
  UpdateOrganizationDto,
} from '../../dtos/organizations.dtos';

@Controller('organizations')
export class OrganizationsController {
  constructor(private organizationsService: OrganizationsService) {}
  @Get()
  getList() {
    return this.organizationsService.findAll();
  }

  @Get(':organizationId')
  getOne(@Param('organizationId', ParseIntPipe) organizationId: number) {
    return this.organizationsService.finOne(organizationId);
  }

  @Post()
  create(@Body() payload: CreateOrganizationDto) {
    return this.organizationsService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() payload: UpdateOrganizationDto) {
    return this.organizationsService.update(+id, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.organizationsService.remove(+id);
  }
}
