import { Injectable } from '@nestjs/common'
import { createReadStream, createWriteStream, unlink } from 'fs'
import { AnimationService } from 'src/utils/animation.service'

@Injectable()
export class FileService {
  constructor(private readonly animationService: AnimationService) {}

  async createByStream(pathOutput: string, fileStream: any) {
    const animation = this.animationService.handle()
    const writeStream = createWriteStream(pathOutput)

    writeStream.setMaxListeners(11)

    fileStream
      .on('data', (data: NodeJS.ArrayBufferView) => {
        animation

        try {
          writeStream.write(data.toString() !== '' ? data.toString() : '')
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

    return fileStream
  }

  async createLogAgora(fileTemp: string, pathOutput: string) {
    const readStream = createReadStream(pathOutput)
    const animation = this.animationService.handle()
    const writeStream = createWriteStream(pathOutput)

    readStream
      .on('data', (data: NodeJS.ArrayBufferView) => {
        animation

        try {
          writeStream.write(data.toString() !== '' ? data.toString() : '')
        } catch (e) {
          console.log(`😕 Oops! An error has occurred: ${e}`)
        }
      })
      .on('end', () => {
        unlink(fileTemp, err => {
          if (err) {
            console.log(`😕 Oops! An error has occurred: ${err}`)
          }
        })
      })

    return readStream
  }
}
