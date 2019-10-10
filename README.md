# super-aop

实现JavaScript aop面向切面编程

### Usage

```bash
npm i super-aop
```

```js
import aop from 'super-aop'

let fn = () => {
  console.log('fn')
  return 1
}

fn = aop(fn, {
  before() {
    console.log('before')
  },
  after(fnReturn) {
    console.log('after')
    console.log(fnReturn)
  }
})

// before
// fn
// after
// 1
```
