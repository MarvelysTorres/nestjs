import { Injectable, NotFoundException } from '@nestjs/common';
import { Organization } from '../../entities/organization.entity';
import {
  CreateOrganizationDto,
  UpdateOrganizationDto,
} from '../../dtos/organizations.dtos';
@Injectable()
export class OrganizationsService {
  private counterId = 1;
  private organizations: Organization[] = [
    {
      id: 1,
      name: 'Organization 1',
      status: 123,
    },
  ];

  findAll() {
    return this.organizations;
  }

  finOne(id: number) {
    const organization = this.organizations.find((item) => item.id === id);
    if (!organization) {
      throw new NotFoundException(`Organization #${id} not found`);
    }
    return organization;
  }

  create(data: CreateOrganizationDto) {
    this.counterId = this.counterId + 1;
    const newOrganization = {
      id: this.counterId,
      ...data,
    };
    this.organizations.push(newOrganization);
    return newOrganization;
  }

  update(id: number, changes: UpdateOrganizationDto) {
    const organization = this.finOne(id);
    const index = this.organizations.findIndex((item) => item.id === id);
    this.organizations[index] = {
      ...organization,
      ...changes,
    };
    return this.organizations[index];
  }

  remove(id: number) {
    const index = this.organizations.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new NotFoundException(`Organization #${id} doesn't exit`);
    }
    this.organizations.splice(index, 1);
    return true;
  }
}
