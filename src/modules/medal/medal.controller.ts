import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiTags } from '@nestjs/swagger';
import { UpdateResult, DeleteResult } from 'typeorm';
import { Medal } from './entities/medal.entity';
import { MedalService } from './medal.service';

@Controller('medal')
@ApiTags('Medal')
@ApiBearerAuth()
export class MedalController {
  constructor(private readonly medalService: MedalService) {}

  @Post()
  @ApiBody({
    type: Medal
  })
  async create(@Body() medal: Medal): Promise<Medal> {
    return await this.medalService.create(medal);
  }

  @Get()
  async getRows(): Promise<Medal[]> {
    return await this.medalService.getRows();
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<Medal> {
    return await this.medalService.getById(id);
  }

  @Put(':id')
  @ApiBody({
    type: Medal
  })
  async update(@Param('id') id: string, @Body() newRow: Medal): Promise<UpdateResult> {
    return await this.medalService.update(id, newRow);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<DeleteResult> {
    return await this.medalService.delete(id);
  }
}
