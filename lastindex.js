// Declare an array containing the multiple values and use lastIndexOf to determine the position of the first and last 
// occurrence of a word "pw skills".

let online_study= ["iNeuron" ,"pw skills","LCO" ,"PrepBytes","Scaler","pw skills","Unacademy"];

// First Occurence is count from Last of the List
let first = online_study.lastIndexOf("pw skills", 1)
console.log("First Occurence is : " + first);

// Last Occurence is count from First of the List
let last = online_study.lastIndexOf("pw skills")
console.log("Last Occurence is : " + last);

// Output

// First Occurence is : 1
// Last Occurence is : 5