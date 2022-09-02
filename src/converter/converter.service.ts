import { Injectable } from '@nestjs/common'
import { randomUUID } from 'crypto'
import { CaptorService } from 'src/captor/captor.service'
import { AnimationService } from 'src/utils/animation.service'
import { DirectoryService } from 'src/utils/directory.service'
import { FileService } from 'src/utils/file.service'

@Injectable()
export class ConverterService {
  constructor(
    private readonly captorService: CaptorService,
    private readonly directoryService: DirectoryService,
    private readonly animationService: AnimationService,
    private readonly fileService: FileService,
  ) {}

  async handle(url: string, destinationFile: string): Promise<any> {
    const fileTemp = `./logs-tmp/${randomUUID()}.txt`

    this.captorService.url = url
    const log = await this.captorService.getLog()
    const fileStream = log.data

    const fileStreamTemp = await this.fileService.createByStream(fileTemp, fileStream)

    fileStreamTemp.on('end', async () => {
      console.log('Temporary log created successfully!!! 🥳')

      const fileFinal = await this.directoryService.create(destinationFile)

      const file = await this.fileService.createLogAgora(fileTemp, fileFinal)

      file.on('end', () => {
        console.log('Agora log created successfully!!! 🥳')
      })
    })
  }
}
