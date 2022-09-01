import { Injectable } from '@nestjs/common'
import { mkdirSync, existsSync } from 'fs'
import { dirname } from 'path'

@Injectable()
export class CreateDirectoryService {
  async handle(path: string): Promise<string> {
    const finalPath = `./logs/${dirname(path)}`

    if (!existsSync('./logs')) {
      mkdirSync('./logs')
    }

    if (!existsSync(finalPath)) {
      mkdirSync(finalPath)
    }

    return `./logs/${path}`
  }
}
