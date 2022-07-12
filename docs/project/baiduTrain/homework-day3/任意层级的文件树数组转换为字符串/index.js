const arr1= ["index.html", "js", ["index.js"], "css", ["index.css"],['b1','b2',['c1','c2']]];

let res = ''
function foo(arr) {
  let len = arr.length
  for(let i = 0; i < len; i++) {
    if(typeof arr[i] === 'string') {
      res += arr[i]
    }else {
      foo(arr[i]) // 递归
    }
  }
}
foo(arr1)
console.log(res)
