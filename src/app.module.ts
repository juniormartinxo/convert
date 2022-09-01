import { UtilsModule } from './utils/utils.module'
import { CaptorModule } from './captor/captor.module'
import { Module } from '@nestjs/common'
import { CliModule } from './cli/cli.module'
import { ConverterModule } from './converter/converter.module'

@Module({
  imports: [UtilsModule, CaptorModule, CliModule, ConverterModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
