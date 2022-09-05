import { Test } from '@nestjs/testing'
import { AnimationService } from './animation.service'

describe('AnimationService', () => {
  let animationService: AnimationService

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [AnimationService],
    }).compile()

    process.stdout.write = jest.fn()
    process.exit
    animationService = moduleRef.get<AnimationService>(AnimationService)
    process.exit
    process.stdout.write.call
  })

  beforeAll(() => {
    process.stdout.write = jest.fn()
    process.exit
    process.stdout.write.call
  })

  afterAll(() => {
    process.stdout.write = jest.fn()
    process.exit
    process.stdout.write.call
  })

  it('should be defined', () => {
    expect(animationService).toBeDefined()
  })

  describe('handle', () => {
    it('should return a timer', () => {
      expect(typeof animationService.handle('')).toBe('object')
      expect(animationService).toEqual({})
    })
  })
})
