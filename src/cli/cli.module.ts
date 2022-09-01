import { HttpModule } from '@nestjs/axios'
import { Module } from '@nestjs/common'
import { ConverterModule } from 'src/converter/converter.module'
import { UtilsModule } from 'src/utils/utils.module'
import { ConvertCommand } from './commands/convert.command'

@Module({
  imports: [HttpModule, UtilsModule, ConverterModule],
  controllers: [],
  providers: [ConvertCommand],
  exports: [ConvertCommand],
})
export class CliModule {}
