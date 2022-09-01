import { HttpModule } from '@nestjs/axios'
import { Module } from '@nestjs/common'
import { CaptorService } from 'src/captor/captor.service'
import { ConverterModule } from 'src/converter/converter.module'
import { ConverterService } from 'src/converter/converter.service'
import { ConvertCommand } from './commands/convert.command'

@Module({
  imports: [ConverterModule, HttpModule],
  controllers: [],
  providers: [ConvertCommand, ConverterService, CaptorService],
})
export class CliModule {}
