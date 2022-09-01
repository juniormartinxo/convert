import { Injectable } from '@nestjs/common'
import { CaptorService } from 'src/captor/captor.service'

@Injectable()
export class ConverterService {
  constructor(private readonly captorService: CaptorService) {}

  async getLog(url: string, destinationFile: string): Promise<any> {
    this.captorService.url = url
    this.captorService.destinationFile = destinationFile
    this.captorService.getLog()
  }
}
