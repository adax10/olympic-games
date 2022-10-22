import { Module, Logger } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configDatabase } from '@/database/config/config';
import { MedalModule } from '@/modules/medal/medal.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    TypeOrmModule.forRoot(configDatabase),
    MedalModule
  ],
  controllers: [],
  providers: [Logger]
})
export class AppModule {}
