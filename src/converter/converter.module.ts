import { HttpModule } from '@nestjs/axios'
import { Module } from '@nestjs/common'
import { CaptorService } from 'src/captor/captor.service'
import { ConverterService } from './converter.service'

@Module({
  imports: [HttpModule],
  controllers: [],
  providers: [ConverterService, CaptorService],
})
export class ConverterModule {}
