import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RecipesModule } from './recipes/recipes.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'marmiton',
    password: 'marmiton123',
    database: 'marmiton',
    autoLoadEntities: true,
    synchronize: true, // ⚠️ À désactiver en prod
  }), RecipesModule

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
