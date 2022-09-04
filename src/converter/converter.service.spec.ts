import { Test, TestingModule } from '@nestjs/testing'
import { ConverterService } from './converter.service'

describe('ConverterService', () => {
  let converterService: ConverterService

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [
        {
          provide: ConverterService,
          useValue: {
            handle: jest.fn(),
          },
        },
      ],
    }).compile()

    converterService = moduleRef.get<ConverterService>(ConverterService)
  })

  it('should be defined', () => {
    expect(converterService).toBeDefined()
  })

  describe('handle', () => {
    it('should be defined', () => {
      expect(converterService.handle).toBeDefined()
    })
  })
})
