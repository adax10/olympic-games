import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { Medal } from './entities/medal.entity';

@Injectable()
export class MedalService {
  constructor(
    @InjectRepository(Medal)
    private readonly medalRepository: Repository<Medal>
  ) {}

  async create(row: Medal): Promise<Medal> {
    const countryExists = await this.medalRepository.findOne({ country: row.country });
    if (countryExists) {
      throw new HttpException(
        `Row with the country name '${row.country}' already exist`,
        HttpStatus.CONFLICT
      );
    }

    return this.medalRepository.save(row);
  }

  async getRows(): Promise<Medal[]> {
    return this.medalRepository.find();
  }

  async getById(id: string): Promise<Medal> {
    const row = await this.medalRepository.findOne({ id });
    if (!row) {
      throw new HttpException(
        `Row for the country with id '${id}' doesn't exist`,
        HttpStatus.NOT_FOUND
      );
    }
    return row;
  }

  async update(id: string, newRow: Medal): Promise<UpdateResult> {
    const oldRow = await this.medalRepository.findOne({ id });
    if (!oldRow) {
      throw new HttpException(
        `Row for the country with id '${id}' doesn't exist`,
        HttpStatus.NOT_FOUND
      );
    }

    const countryExists = await this.medalRepository.findOne({ country: newRow.country });
    if (countryExists && newRow.country !== oldRow.country) {
      throw new HttpException(
        `Row with the country name '${newRow.country}' already exist`,
        HttpStatus.CONFLICT
      );
    }

    return this.medalRepository.update(id, newRow);
  }

  async delete(id: string): Promise<DeleteResult> {
    return await this.medalRepository.delete({ id });
  }
}
