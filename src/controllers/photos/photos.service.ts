import { Injectable } from '@nestjs/common';
import { GetGenerateRandomPhotos } from './dto/generate-random-photos/get';
import { PixabayService } from 'src/services/pixabay';

@Injectable()
export class PhotosService {
  constructor(private readonly pixabayService: PixabayService) {}

  public async generateRandomPhotos(dto: GetGenerateRandomPhotos) {
    try {
      const pixabay = new PixabayService();

      console.log(dto);

      return await pixabay.imagesClient({
        perPage: dto.numOfPhotos,
        query: dto.query || 'yellow flowers',
      });
    } catch (error) {
      console.log(error);
    }
  }
}
