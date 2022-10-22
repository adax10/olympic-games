import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Medal } from './entities/medal.entity';
import { MedalController } from './medal.controller';
import { MedalService } from './medal.service';

@Module({
  imports: [TypeOrmModule.forFeature([Medal])],
  providers: [MedalService],
  controllers: [MedalController],
  exports: []
})
export class MedalModule {}
