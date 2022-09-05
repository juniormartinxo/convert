import { Injectable } from '@nestjs/common'

@Injectable()
export class AnimationService {
  handle(text: string): NodeJS.Timer {
    const chars = ['⠙', '⠘', '⠰', '⠴', '⠤', '⠦', '⠆', '⠃', '⠋', '⠉']
    const delay = 100
    let x = 0

    const animation = setInterval(() => {
      text !== '' ? process.stdout.write('\r🔥' + chars[x++] + ' ' + text + '  ') : null
      x = x % chars.length
    }, delay)

    return animation
  }
}
