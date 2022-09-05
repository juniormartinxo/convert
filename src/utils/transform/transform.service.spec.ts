import { Test } from '@nestjs/testing'
import { TransformService } from './transform.service'

describe('TransformService', () => {
  let transformService: TransformService

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [TransformService],
    }).compile()

    transformService = moduleRef.get<TransformService>(TransformService)
  })

  it('should be defined', () => {
    expect(transformService).toBeDefined()
  })

  describe('handle', () => {
    it('should change the log format', () => {
      const log = '312|200|HIT|"GET /robots.txt HTTP/1.1"|100.2'
      expect(transformService.handle(log)).toEqual('"MINHA CDN" GET 200 /robots.txt 100 312 HIT')
    })
  })
})
