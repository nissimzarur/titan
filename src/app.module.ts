import { Module } from '@nestjs/common';
import { PhotosModule } from './controllers/photos/photos.module';
import { OrdersModule } from './controllers/orders/orders.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    PhotosModule,
    OrdersModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      database: process.env.DB_DATABASE,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      synchronize: false,
      entities: [__dirname + '/entities/**/**/*.entity.{ts,js}'],
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
