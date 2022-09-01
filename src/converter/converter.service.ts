import { Injectable } from '@nestjs/common'
import { createWriteStream } from 'fs'
import { CaptorService } from 'src/captor/captor.service'
import { AnimationService } from 'src/utils/animation.service'
import { CreateDirectoryService } from 'src/utils/create-directory.service'

@Injectable()
export class ConverterService {
  constructor(
    private readonly captorService: CaptorService,
    private readonly createDirectoryService: CreateDirectoryService,
    private readonly animationService: AnimationService,
  ) {}

  async handle(url: string, destinationFile: string): Promise<any> {
    this.captorService.url = url
    const log = await this.captorService.getLog()

    const fileStream = log.data

    const animation = this.animationService.handle()

    const pathOutput = this.createDirectoryService.handle(destinationFile)

    const writeStream = createWriteStream(await pathOutput)

    writeStream.setMaxListeners(11)

    fileStream
      .on('data', (data: { toString: () => string | NodeJS.ArrayBufferView }) => {
        animation

        try {
          writeStream.write(data.toString() + '\n')
        } catch (e) {
          console.log(`😕 Oops! An error has occurred: ${e}`)
        }
      })
      .on('end', () => {
        clearInterval(animation)

        writeStream.on('finish', () => {
          console.log('File created successfully!!! 🥳')
        })

        writeStream.end()
        writeStream.close()
      })
  }
}
