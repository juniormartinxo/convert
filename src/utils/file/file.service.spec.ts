import { Test } from '@nestjs/testing'
import { FileService } from './file.service'

const fileStream = {}
const msg = { memory_used: 100, number_of_records: 1000, runtime: '0:00' }

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
            msg: jest.fn().mockResolvedValue(msg),
            getDate: jest.fn().mockReturnValue('05/09/2022 11:16:00'),
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

  describe('msg', () => {
    it('should be defined', async () => {
      expect(fileService.msg).toBeDefined()
    })

    it('should return an object with memory used, number of records and runtime properties', async () => {
      const result = await fileService.msg(100, performance.now(), 1000)

      const expected = new Object({ memory_used: 100, number_of_records: 1000, runtime: '0:00' })

      expect(result).toEqual(expected)
    })
  })

  describe('getDate', () => {
    it('should be defined', async () => {
      expect(fileService.getDate).toBeDefined()
    })

    it('should return an object with memory used, number of records and runtime properties', async () => {
      const result = fileService.getDate()

      const expected = '05/09/2022 11:16:00'

      expect(result).toEqual(expected)
    })
  })
})
