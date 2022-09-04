import { HttpService } from '@nestjs/axios'
import { Command, CommandRunner, Help } from 'nest-commander'
import { lastValueFrom } from 'rxjs'
import { ConverterService } from 'src/converter/converter.service'
import { URL } from 'url'

@Command({
  name: 'convert',
  arguments: '<source_url> <destination_file>',
  options: { isDefault: true },
})
export class ConvertCommand extends CommandRunner {
  constructor(private readonly converterService: ConverterService, private readonly httpService: HttpService) {
    super()
  }

  async run(inputs: string[]): Promise<void> {
    const isValidUrl = this.isUrlValid(inputs[0])
    const isValidFile = this.isValidFile(inputs[1])
    const isOnline = await this.isOnline(inputs[0])

    if (isValidUrl && isValidFile && isOnline) {
      await this.converterService.handle(inputs[0], inputs[1])
    }
  }

  @Help('beforeAll')
  help(): void {
    console.log('\n ------------------ Converts a log file from a URL to a local file ------------------ \n')
    console.log('Arguments:')
    console.log(' → <source_url> - Url of the source file that will be converted.')
    console.log(' → <destination_file> - Path of the file that will be generated. (Ex.: "./output/agora-log.txt")\n')
  }

  isUrlValid = (url: string): boolean => {
    try {
      new URL(url)
      return true
    } catch (_) {
      console.log('❌ Please, insert a valid URL')
      return false
    }
  }

  isOnline = async (url: string) => {
    try {
      const status = await lastValueFrom(this.httpService.get(url, { responseType: 'stream' })).then(
        response => response.status,
      )

      if (status === 200) {
        return true
      } else {
        console.log('❌ The URL is not online or the source file does not exist')
        return false
      }
    } catch (_) {
      console.log('❌ The URL is not online or the source file does not exist')
      return false
    }
  }

  isValidFile = (directory: string): boolean => {
    if (directory.endsWith('.txt') || directory.endsWith('.log')) {
      return true
    }

    console.log('❌ The destination file must have a valid extension (*.txt or *.log)')

    return false
  }
}
