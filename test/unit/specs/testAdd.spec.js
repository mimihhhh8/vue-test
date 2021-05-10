import {add,del} from '@/components/testAdd.js'

describe('testAdd.js',()=>{
  it('测试两数相加',()=>{
    expect(add(3, 7)).toBe(10);
  })
  it('测试两数相减',()=>{
    expect(del(7, 3)).toBe(4);
  })
})