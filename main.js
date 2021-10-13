
let arr = [10,9,"+","D","C","+"];

//let splicedArr = arr.splice(1,4);

let arr2 = [];

for (let i = 0; i <= arr.length; i++) {

if (typeof(arr[i])==="number"){

arr2.push(arr[i]);

console.log(arr2);

}

else if ((arr[i])==="+"){

arr2.push(arr2[(arr2.length)-1]+arr2[(arr2.length)-2]);

console.log(arr2);

}

else if ((arr[i])==="D"){



arr2.push(arr2[i-1]*arr2[i-2]);

console.log(arr2);

}

else if ((arr[i])==="C"){

arr2.pop();

console.log(arr2);

}

else {

let sum = 0;

for (let i = 0; i < arr2.length; i++) {

sum += arr2[i];

}

return console.log(sum);

}}