let arr = Array.from(Array(50))
arr = arr.map(
    (i) => 
    Math.round(Math.random()*100)
)

console.log(arr)

let min = arr[0]
for(let i = 0; i <= arr.length; i++){
    if(arr[i] < min){
        min = arr[i]
    }
}
console.log("The smallest number:", min)