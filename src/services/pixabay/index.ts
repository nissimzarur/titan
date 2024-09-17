import axios, { AxiosInstance } from 'axios';
import { IPixabayImagesParams } from './interfaces';

export class PixabayService {
  private apiKey: string;
  private static pixabayInstance: PixabayService;
  private axiosClient: AxiosInstance;

  constructor() {
    this.apiKey = '45640711-3b2c9c3e0dd9ac6e6a5b798be';
    this.axiosClient = axios.create({
      baseURL: `https://pixabay.com/api/?key=${this.apiKey}&`,
    });
  }

  static getInstance(): PixabayService {
    if (!PixabayService.pixabayInstance) {
      PixabayService.pixabayInstance = new PixabayService();
    }
    return PixabayService.pixabayInstance;
  }

  public async imagesClient(params: IPixabayImagesParams): Promise<string[]> {
    console.log(params);
    if (!('query' in params) || !('perPage' in params)) {
      throw new Error('Both query and perPage are required.');
    }

    const res = await this.axiosClient.get(
      `&q=${encodeURIComponent(params.query)}&image_type=photo&per_page=${params.perPage}`,
    );

    return res.data.hits.map((d) => d.webformatURL);
  }
}
