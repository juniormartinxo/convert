import { Command, CommandRunner } from 'nest-commander'
import { ConverterService } from 'src/converter/converter.service'

@Command({
  name: 'convert',
  arguments: '<origin> <destination>',
  options: { isDefault: true },
})
export class ConvertCommand extends CommandRunner {
  constructor(private readonly converterService: ConverterService) {
    super()
  }

  async run(inputs: string[]): Promise<void> {
    await this.converterService.handle(inputs[0], inputs[1])
  }
}
