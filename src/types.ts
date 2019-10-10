export interface AopOptions {
  before?: (...args: any[]) => any
  after?: (...args: any[]) => any
}
