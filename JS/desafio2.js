const arr = [10, 20, 0, 15, 28]
const arr2 = [10, 20, 0]
const arr3 = [10, 20]
const myArr = function (arr) {
  return arr.length > 3 ? arr.slice(3) : []
}

console.log(myArr(arr))
console.log(myArr(arr2))
console.log(myArr(arr3))
