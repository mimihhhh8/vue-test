import {add,del} from '@/components/test1.js'

/**
 * 1、describe 描述, decribe会形成一个作用域
 * 2、it 断言
 * 3、expect 期望
 * 4、test 测试，类似it
 */

/**
 * expect和should是BDD(Behavior-Driven Development (行为驱动开发))风格的，二者使用相同的链式语言来组织断言，
 * 但不同在于他们初始化断言的方式：expect使用构造函数来创建断言对象实例，而should通过为Object.prototype新增方
 * 法来实现断言（所以should不支持IE）；expect直接指向chai.expect，而should则是chai.should()。
 * 较建议使用expect，should不仅不兼容IE，在某些情况下还需要改变断言方式来填坑。详细的比较可以看看官网Assertion Styles，说的很清楚
 */

// describe('测试标题', ()=> {
//   // todo
//   it('段落标题', () => {
//    // todo
//  })
// })


// (1)toBe 相当于===，比较的是内存地址
// describe('testAdd.js',()=>{
//   it('测试两数相加',()=>{
//     expect(add(3, 7)).toBe(10);
//   })
//   it('测试两数相减',()=>{
//     expect(del(7, 3)).toBe(4);
//   })
// })


// (2) 添加 not 可以表达相反匹配
// describe('相反匹配',()=>{
//   it('添加not',()=>{
//     expect(del(7, 3)).not.toBe(2)
//   })
// })


// (3) 如果测试对象可以使用 toEqual() ，递归检查数组或对象的每个字段
// describe('测试对象是否相等',()=>{
//   it('toEqual',()=>{
//     const data = {one: 1};
//     data['two'] = 2;
//     expect(data).toEqual({one: 1, two: 2});
//   })
// })


// (4)布尔值匹配器
/**
 * toBeNull 只匹配 null
 * toBeUndefined 只匹配 undefined
 * toBeDefined 与 toBeUndefined 相反
 * toBeTruthy 匹配任何 if 语句为真
 * toBeFalsy 匹配任何 if 语句为假
 */
//  test('null', () => {
//   const n = null;
//   expect(n).toBeNull();
//   expect(n).toBeDefined();
//   expect(n).not.toBeUndefined();
//   expect(n).not.toBeTruthy();
//   expect(n).toBeFalsy();
// });

// test('zero', () => {
//   const z = 0;
//   expect(z).not.toBeNull();
//   expect(z).toBeDefined();
//   expect(z).not.toBeUndefined();
//   expect(z).not.toBeTruthy();
//   expect(z).toBeFalsy();
// });


// (5)数字匹配器
/**
 * .toBeGreaterThan() - 大于
 * .toBeGreaterThanOrEqual() 大于等于
 * .toBeLessThan() - 小于
 * .toBeLessThanOrEqual() - 小于等于
 * .toBeCloseTo() - 浮点数比较
 */
 
// it('大于',()=>{
//   expect(6).toBeGreaterThan(5)
// })
// it('大于等于',()=>{
//   expect(6).toBeGreaterThanOrEqual(3) //6,3
// })
// it('小于',()=>{
//   expect(9).toBeLessThan(11)
// })
// it('小于等于',()=>{
//   expect(9).toBeLessThanOrEqual(10)//10,9
// })
// it('浮点数比较',()=>{
//   expect(1.2).toBeCloseTo(1.21)
// })


// (6)数组匹配器
/**
 * .toContain(item) - 判断数组是否包含特定子项
 * .toContainEqual(item) - 判断数组中是否包含一个特定对象
 */

it('判断数组是否包含特定子项',()=>{
  expect([1,2,3]).toContain(1)
})
it('判断数组中是否包含一个特定对象',()=>{
  expect([{ c: "c" }, { t: "t" }, { j: "j" }]).toContainEqual({ c: "c" })
})


// (7)对象匹配器 https://zhuanlan.zhihu.com/p/89515965




