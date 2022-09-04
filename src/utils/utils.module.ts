import { Module } from '@nestjs/common'
import { AnimationService } from './animation/animation.service'
import { DirectoryService } from './directory/directory.service'
import { FileService } from './file/file.service'
import { TransformService } from './transform/transform.service'

@Module({
  imports: [],
  controllers: [],
  providers: [DirectoryService, AnimationService, FileService, TransformService],
  exports: [DirectoryService, AnimationService, FileService, TransformService],
})
export class UtilsModule {}
