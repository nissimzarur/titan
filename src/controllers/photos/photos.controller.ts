import { Controller, Get, Param } from '@nestjs/common';
import { GetGenerateRandomPhotos } from './dto/generate-random-photos/get';
import { PhotosService } from './photos.service';

@Controller('photos')
export class PhotosController {
  constructor(private readonly photosService: PhotosService) {}

  @Get('random/:numOfPhotos/:query?')
  public generateRandomPhotos(@Param() dto: GetGenerateRandomPhotos) {
    return this.photosService.generateRandomPhotos(dto);
  }
}
