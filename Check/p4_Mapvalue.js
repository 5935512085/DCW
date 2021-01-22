//Text to Integer
const strArr = ['1', '2', '3', '4', '5', '6', '7'];

//method 1
const Str2T1 = strArr.map((item,index)=>{
    return +item
})
//method 2
const Str2T2 = strArr.map((item,index)=>{
    return Number(item)
})
//method 3 if Array merge with text as "24xxxx"
const Str2T3 = strArr.map((item,index)=>{
    return parseInt(item,10)
    //10 is standard for Int finding
})

 console.log(strArr)
 console.log(Str2T1)
 console.log(Str2T2)
 console.log(Str2T3)

 