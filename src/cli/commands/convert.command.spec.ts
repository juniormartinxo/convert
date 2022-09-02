import { HttpModule } from '@nestjs/axios'
import { Test } from '@nestjs/testing'
import { ConverterModule } from 'src/converter/converter.module'
import { UtilsModule } from 'src/utils/utils.module'
import { ConvertCommand } from './convert.command'

describe('ConvertCommand', () => {
  let convertCommand: ConvertCommand

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [HttpModule, UtilsModule, ConverterModule],
      controllers: [],
      providers: [ConvertCommand],
      exports: [ConvertCommand],
    }).compile()

    convertCommand = moduleRef.get<ConvertCommand>(ConvertCommand)
  })

  it('should be defined', () => {
    expect(convertCommand).toBeDefined()
  })
})
