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
    console.log('url', url)
    const start = performance.now()
    const animation = this.animationService.handle('Downloading the log file...')
    const fileTemp = `tempfiles/${randomUUID()}.txt`

    this.captorService.url = url
    const log = await this.captorService.getLog()
    const fileStream = log.data

    const pathOutputTemp = await this.directoryService.create(fileTemp)
    const pathOutputFinal = await this.directoryService.create(destinationFile)

    const fileStreamTemp = await this.fileService.createByStream(pathOutputTemp, fileStream)

    await fileStreamTemp.on('end', async () => {
      console.log('\n✔️ Information saved successfully!!!')

      clearInterval(animation)

      this.fileService.createByReadLine(fileTemp, pathOutputFinal, start)
    })
  }
}
