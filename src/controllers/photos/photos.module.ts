import { Module } from '@nestjs/common';
import { PhotosController } from './photos.controller';
import { PhotosService } from './photos.service';
import { PixabayService } from 'src/services/pixabay';

@Module({
  imports: [],
  controllers: [PhotosController],
  providers: [PhotosService, PixabayService],
  exports: [],
})
export class PhotosModule {}
