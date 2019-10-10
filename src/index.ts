type Func = (...args: any[]) => any

interface AopOptions {
  before?: Func
  after?: Func
}

export default function aop(
  fn: Func,
  options?: AopOptions
): Func {
  const { before, after } = options || {}
  return function(...args: any[]): Func {
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
