import { HttpModule } from '@nestjs/axios'
import { Module } from '@nestjs/common'
import { UtilsModule } from 'src/utils/utils.module'
import { CaptorService } from './captor.service'

@Module({
  imports: [HttpModule, UtilsModule],
  controllers: [],
  providers: [CaptorService],
  exports: [CaptorService],
})
export class CaptorModule {}
