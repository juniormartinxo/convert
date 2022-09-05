import { Test } from '@nestjs/testing'
import { CaptorService } from './captor.service'

describe('CaptorService', () => {
  let captorService: CaptorService

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: CaptorService,
          useValue: {
            handle: jest.fn(),
          },
        },
      ],
    }).compile()

    captorService = moduleRef.get<CaptorService>(CaptorService)
  })

  it('should be defined', () => {
    expect(captorService).toBeDefined()
  })

  describe('handle', () => {
    it('should be defined', () => {
      expect(captorService.handle).toBeDefined()
    })
  })
})
