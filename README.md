# super-aop

实现JavaScript aop面向切面编程

### Usage

```bash
npm i super-aop
```

```js
import aop from 'super-aop'

let fn = () => console.log('fn')

fn = aop(fn, {
  before() {
    console.log('before')
  },
  after() {
    console.log('after')
  }
})
```
