import { HttpService } from '@nestjs/axios'
import { Injectable } from '@nestjs/common'
import { lastValueFrom } from 'rxjs'

@Injectable()
export class CaptorService {
  url: string
  constructor(private readonly httpService: HttpService) {}

  async getLog(): Promise<any> {
    return await lastValueFrom(this.httpService.get(this.url, { responseType: 'stream' }))
  }
}
