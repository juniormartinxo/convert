import { Module } from '@nestjs/common'
import { AnimationService } from './animation/animation.service'
import { DirectoryService } from './directory.service'
import { FileService } from './file.service'
import { TransformService } from './transform.service'

@Module({
  imports: [],
  controllers: [],
  providers: [DirectoryService, AnimationService, FileService, TransformService],
  exports: [DirectoryService, AnimationService, FileService, TransformService],
})
export class UtilsModule {}
