import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiTags, ApiQuery } from '@nestjs/swagger';
import { UpdateResult, DeleteResult } from 'typeorm';
import { Medal } from './entities/medal.entity';
import { MedalService } from './medal.service';
import { PaginationParams } from '@/utils/types/pagination-params';

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

  @ApiQuery({
    name: 'offset',
    type: Number,
    required: true
  })
  @ApiQuery({
    name: 'limit',
    type: Number,
    required: true
  })
  @ApiQuery({
    name: 'order',
    enum: ['DESC', 'ASC'],
    required: false
  })
  @ApiQuery({
    name: 'search',
    type: String,
    required: false
  })
  @Get()
  async getRows(
    @Query() { offset, limit }: PaginationParams,
    @Query('order') order: 'DESC' | 'ASC',
    @Query('search') search: string
  ): Promise<Medal[]> {
    return await this.medalService.getRows(offset, limit, order, search);
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
