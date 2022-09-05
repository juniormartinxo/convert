import { Injectable } from '@nestjs/common'

@Injectable()
export class TransformService {
  handle(log: string): string {
    log.replace('\r', '')

    const arrLog = log.split('|')

    const logMethodUriProtocol = arrLog[3].replace('"', '').split(' ')

    const http_method = logMethodUriProtocol[0]
    const status_code = arrLog[1]
    const uri_path = logMethodUriProtocol[1]
    const time_taken = Math.round(+arrLog[4])
    const response_size = arrLog[0]
    const cache_status = arrLog[2]

    return `"MINHA CDN" ${http_method} ${status_code} ${uri_path} ${time_taken} ${response_size} ${cache_status}`
  }
}
