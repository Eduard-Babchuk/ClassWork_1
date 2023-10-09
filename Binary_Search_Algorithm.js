let arr = Array.from(Array(11))

arr = arr.map((i) => Math.round(Math.random()*10)).sort((a, b) => a - b)
console.table(arr)

let random_num = Math.floor(Math.random()*arr.length)
let found_num = arr[random_num]

console.log("Found number:",found_num)
console.log("================")

let i = 0
let j = arr.length - 1

for(let y = arr[0]; y < arr.length; y++){

    let half_index_arr = Math.floor((i + j)/2)
    console.log(i, "+", j, "/ 2 =", half_index_arr)
    if (half_index_arr === found_num){
        console.log("================")
        console.log("Find:", half_index_arr)
        return
    }
    else if (half_index_arr > found_num){
        j = half_index_arr-1
        console.log("j =", j)
    }
    else{
        i = half_index_arr+1
        console.log("i =", i)
    }
}