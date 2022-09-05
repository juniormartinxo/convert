import { Test } from '@nestjs/testing'
import { FileService } from './file.service'

const fileStream = {}

describe('FileService', () => {
  let fileService: FileService

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: FileService,
          useValue: {
            createByStream: jest.fn().mockResolvedValue(fileStream),
            createByReadLine: jest.fn(),
            msg: jest.fn(),
          },
        },
      ],
    }).compile()

    fileService = moduleRef.get<FileService>(FileService)
  })

  it('should be defined', () => {
    expect(fileService).toBeDefined()
  })

  describe('createByStream', () => {
    it('should be defined', async () => {
      expect(fileService.createByStream).toBeDefined()
    })

    it('should return a any type', async () => {
      const path = await fileService.createByStream('output/log.txt', {})
      expect(path).toEqual({})
    })
  })
})
