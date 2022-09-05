import { Injectable } from '@nestjs/common'
import { once } from 'events'
import { createReadStream, createWriteStream, unlink } from 'fs'
import { createInterface } from 'readline'
import { AnimationService } from 'src/utils/animation/animation.service'
import { Readable } from 'stream'
import { TransformService } from '../transform/transform.service'

@Injectable()
export class FileService {
  constructor(
    private readonly animationService: AnimationService,
    private readonly serviceTransform: TransformService,
  ) {}

  async createByStream(pathOutput: string, fileStream: any): Promise<Readable> {
    const writeStream = createWriteStream(pathOutput)

    writeStream.setMaxListeners(11)

    fileStream.pipe(writeStream)

    return fileStream
  }

  async createByReadLine(fileTemp: string, destinationFile: string, start: number) {
    const animation = this.animationService.handle('Transcribing the log file to Agora Log format...')
    const writeStream = createWriteStream(destinationFile)
    writeStream.setMaxListeners(11)
    const pathLogTemp = `./logs/${fileTemp}`

    const rl = createInterface({
      input: createReadStream(pathLogTemp),
      crlfDelay: Infinity,
    })

    writeStream.write('#Version: 1.0')
    writeStream.write(`#Version: ${this.getDate()}`)
    writeStream.write(`#Fields: provider http-method status-code uri-path time-taken response-size cache-status`)

    rl.on('line', line => {
      const logLine = line !== '' ? `${this.serviceTransform.handle(line)}\n` : ''
      writeStream.write(logLine)
    }).on('close', () => {
      clearInterval(animation)
      console.log('\n🥳 Agora Log created successfully!!!')

      unlink(pathLogTemp, err => {
        if (err) {
          console.error(err)
        }
      })
    })

    await once(rl, 'close')

    const memUsed = process.memoryUsage().heapUsed / 1024 / 1024

    this.msg('createByReadLine', memUsed, start)
  }

  msg(func: string, used: number, start: number) {
    const end = performance.now()
    const milliseconds = end - start
    const minutes = Math.floor(milliseconds / 60000)
    const seconds = ((milliseconds % 60000) / 1000).toFixed(0)
    const runtime = minutes + ':' + (+seconds < 10 ? '0' : '') + seconds

    console.log(`\n\n ------------------ ${func} ------------------`)
    console.log(`Memory used: ${Math.round(used * 100) / 100} MB`)
    console.log(`Runtime: ${runtime}`)
  }

  getDate() {
    const date = new Date()
    const day = date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear()
    const hour = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()

    return `${day}/${month}/${year} ${hour}-${minutes}-${seconds}`
  }
}
