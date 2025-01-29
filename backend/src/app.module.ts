import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'user',
      password: 'password',
      database: 'marmiton',
      autoLoadEntities: true,
      synchronize: true, // Désactive-le en production
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
