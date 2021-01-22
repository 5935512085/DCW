// Remove some value from array
const arr = [1, 3, 4, 5, null, 2, null, -4, null]

const removeNull = arr.filter((item,index)=>{
    return item!=null
})
 console.log(arr)
 console.log(removeNull)

 