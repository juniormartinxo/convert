import { HttpModule } from '@nestjs/axios'
import { Module } from '@nestjs/common'
import { CaptorService } from './captor.service'

@Module({
  imports: [HttpModule],
  controllers: [],
  providers: [CaptorService],
  exports: [CaptorService],
})
export class CaptorModule {}
