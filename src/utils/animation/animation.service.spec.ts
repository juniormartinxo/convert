import { Test } from '@nestjs/testing'
import { AnimationService } from './animation.service'

describe('AnimationService', () => {
  let animationService: AnimationService

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [AnimationService],
    }).compile()

    animationService = moduleRef.get<AnimationService>(AnimationService)
  })

  it('should be defined', () => {
    expect(animationService).toBeDefined()
  })

  describe('handle', () => {
    it('should return a timer', () => {
      expect(typeof animationService.handle()).toBe('object')
      expect(animationService).toEqual({})
    })
  })
})
