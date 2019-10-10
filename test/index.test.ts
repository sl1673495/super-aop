import aop from "../src"

/**
 * Dummy test
 */

describe("aop test", () => {
  it("rightly run the function", () => {
    const source = function() {
      return true
    }
    const aopSource = aop(source)
    expect(aopSource()).toBeTruthy()
  })

  it("before works and will affect source's result", () => {
    let callTimes = 0
    const source = function() {
      callTimes++
      return callTimes
    }
    const aopSource = aop(source, {
      before() {
        callTimes++
      }
    })
    expect(aopSource()).toBe(2)
  })

  it("after works and should return source's result", () => {
    let callTimes = 0
    const source = function() {
      callTimes++
      return callTimes
    }
    const aopSource = aop(source, {
      after() {
        callTimes++
      }
    })
    expect(aopSource()).toBe(1)
  })

  it("before and after works and should return source's result", () => {
    let callTimes = 0
    const source = function() {
      callTimes++
      return callTimes
    }
    const aopSource = aop(source, {
      before() {
        callTimes++
      },
      after() {
        callTimes++
      }
    })
    expect(aopSource()).toBe(2)
  })


  it("execution sequence", () => {
    let res = []
    const source = function() {
      res.push(1)
      return res
    }
    const aopSource = aop(source, {
      before() {
        res.push(0)
      },
      after() {
        res.push(2)
      }
    })
    expect(aopSource()).toEqual([0, 1, 2])
  })

  it("rightly pass arguments", () => {
    const source = function(a: any) {
      return a
    }
    const aopSource = aop(source)
    expect(aopSource(true)).toBeTruthy()
  })

  it("after could receive source's return", () => {
    let dummy
    const source = function(a: any) {
      return a
    }
    const aopSource = aop(source, {
      after(sourceReturn) {
        dummy = sourceReturn + 1
      }
    })
    aopSource(1)
    expect(dummy).toBe(2)
  })
})
