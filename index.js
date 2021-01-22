let arr = [1,2,3,3]
let arr2 = [4,5,6,7]

let all = [...arr, ...arr2]
console.log(all)

arr.forEach((item,index)=>{
    console.log(item)})