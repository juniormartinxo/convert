import { Injectable } from '@nestjs/common'

@Injectable()
export class AnimationService {
  handle(text = 'Please, wait a moment...'): NodeJS.Timer {
    const chars = ['⠙', '⠘', '⠰', '⠴', '⠤', '⠦', '⠆', '⠃', '⠋', '⠉']
    const delay = 100
    let x = 0

    const animation = setInterval(function () {
      process.stdout.write('\r🔥' + chars[x++] + ' ' + text + '  ')
      process.stdout.write('')
      x = x % chars.length
    }, delay)

    return animation
  }
}
