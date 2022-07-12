let obj1 = {id: 1, obj: {id: 2}}

function clone(obj) {
  // 先将对象转换为JSON字符串
  let temp = JSON.stringify(obj)
  // 再将JSON字符串转换为新的对象，至此实现深拷贝,传入的对象和返回的对象相互独立
  let res = JSON.parse(temp)
  return res

}
let resObj = clone(obj1)
obj1.obj.id = 555
console.log(resObj.obj.id) // 2