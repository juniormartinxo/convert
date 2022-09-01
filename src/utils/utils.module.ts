import { Module } from '@nestjs/common'
import { AnimationService } from './animation.service'
import { CreateDirectoryService } from './create-directory.service'

@Module({
  imports: [],
  controllers: [],
  providers: [CreateDirectoryService, AnimationService],
  exports: [CreateDirectoryService, AnimationService],
})
export class UtilsModule {}
