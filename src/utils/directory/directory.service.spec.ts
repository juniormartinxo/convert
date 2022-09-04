import { Test } from '@nestjs/testing'
import { DirectoryService } from './directory.service'

describe('DirectoryService', () => {
  let directoryService: DirectoryService

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [DirectoryService],
    }).compile()

    directoryService = moduleRef.get<DirectoryService>(DirectoryService)
  })

  it('should be defined', () => {
    expect(directoryService).toBeDefined()
  })

  describe('create', () => {
    it('should be defined', async () => {
      expect(directoryService.create).toBeDefined()
      expect(directoryService.create).toBeInstanceOf(Function)
    })

    it('should return a string containing the path of a file or directory', async () => {
      const path = await directoryService.create('output/log.txt')
      expect(path).toEqual('./logs/output/log.txt')
    })
  })
})
