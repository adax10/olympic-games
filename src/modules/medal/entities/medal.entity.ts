import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

@Entity({ name: 'medal' })
export class Medal {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: String,
    unique: true
  })
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    type: String,
    default: 'Poland',
    required: true
  })
  country: string;

  @Column({
    type: Number
  })
  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({
    type: Number,
    default: 10,
    required: true
  })
  amount: number;
}
