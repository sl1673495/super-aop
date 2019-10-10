import { AopOptions } from './types'

export default function aop(
  fn: (...args: any[]) => any,
  options?: AopOptions
): (...args: any[]) => any {
  const { before, after } = options || {}
  return function(...args: any[]) {
    const self = this

    if (before) {
      before.apply(self, args)
    }

    const ret = fn.apply(self, args)

    const afterArgs = [ret, ...args]
    if (after) {
      after.apply(self, afterArgs)
    }

    return ret
  }
}
