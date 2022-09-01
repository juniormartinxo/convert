import { HttpService } from '@nestjs/axios'
import { Injectable } from '@nestjs/common'
import { lastValueFrom } from 'rxjs'
import { createWriteStream, mkdirSync, existsSync } from 'fs'
import { dirname } from 'path'

@Injectable()
export class CaptorService {
  url: string
  destinationFile: string
  constructor(private readonly httpService: HttpService) {}

  async getLog(): Promise<void> {
    const logMinhaCDN = await lastValueFrom(this.httpService.get(this.url, { responseType: 'stream' }))

    const stream = logMinhaCDN.data

    const animation = this.animation()

    const pathOutput = this.pathOutput()

    const writeStream = createWriteStream(pathOutput)

    stream
      .on('data', (data: { toString: () => string | NodeJS.ArrayBufferView }) => {
        animation

        writeStream.write(data.toString() + '\n')

        writeStream.on('error', function (err) {
          console.log(`😕 Oops! An error has occurred: ${err}`)
        })
      })
      .on('end', () => {
        clearInterval(animation)

        writeStream.on('finish', () => {
          console.log('File created successfully!!! 🥳')
        })

        writeStream.end()
      })
  }

  animation(stop = false, text = 'Please, wait a moment...') {
    const chars = ['⠙', '⠘', '⠰', '⠴', '⠤', '⠦', '⠆', '⠃', '⠋', '⠉']
    const delay = 100
    let x = 0
    //let y = 0

    const animation = setInterval(function () {
      process.stdout.write('\r🔥' + chars[x++] + ' ' + text + '  ')
      process.stdout.write('')
      x = x % chars.length
      //y = y % dot.length
    }, delay)

    if (stop) {
      clearInterval(animation)
    }

    return animation
  }

  pathOutput() {
    const path = dirname(this.destinationFile)

    if (!existsSync(path)) {
      mkdirSync(path)
    }

    return this.destinationFile
  }
}
