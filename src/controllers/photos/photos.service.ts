import { Injectable, Logger } from '@nestjs/common';
import { GetGenerateRandomPhotos } from './dto/generate-random-photos/get';
import { PixabayService } from 'src/services/pixabay';

@Injectable()
export class PhotosService {
  private readonly logger = new Logger(PhotosService.name);
  constructor(private readonly pixabayService: PixabayService) {}

  public async generateRandomPhotos(dto: GetGenerateRandomPhotos) {
    try {
      const pixabay = new PixabayService();

      return await pixabay.imagesClient({
        perPage: dto.numOfPhotos,
        query: dto.query || 'yellow flowers',
      });
    } catch (error) {
      this.logger.warn(
        `Error while trying to generate random photos - ${error.message}`,
      );
    }
  }
}
