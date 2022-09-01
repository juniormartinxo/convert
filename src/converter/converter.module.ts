import { HttpModule } from '@nestjs/axios'
import { Module } from '@nestjs/common'
import { CaptorModule } from 'src/captor/captor.module'
import { ConverterService } from './converter.service'

@Module({
  imports: [HttpModule, CaptorModule],
  controllers: [],
  providers: [ConverterService],
  exports: [ConverterService],
})
export class ConverterModule {}
