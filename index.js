var clauses = [10, 9, "+", "D", "C", "+"];
//value = value at index x
// f value is int push it into the array
// 
var array = []

for (let i = 0; i < clauses.length; i++) {
    if(typeof(clauses[i]) === "number"){
       array.push(clauses[i])
       console.log(array)
    }else if (clauses[i] === "+"){
        array.push(array[array.length-1] + array[array.length-2])
        console.log(array)
    }else if (clauses[i] === "D"){
        array.push(array[1] * array[2])
        console.log(array)        
    }else if (clauses[i] === "C"){
        array.pop()
        console.log(array)
    }else {
         
    }
}

let sum = 0;
         for (i = 0; i < array.length; i++){
             sum += array[i];
             }
         return console.log(sum);