// Declare a varibale and assign string value to it and check if the string contains a word Script using includes() method.

// it contains word - Tab
let list = ["Computer", "Mobile", "Tab", "Phone"];

// It will give result in Boolean
console.log("The word Tab is present in this Array :" + list.includes("Tab"));

/**
 * Output
 *
 * The word Tab is present in this Array :true
 */

// It doesn't contains word - Tab
let newList = ["Computer", "Mobile", "Phone"];

console.log(
  "The word Tab is Present in this Array : " + newList.includes("Tab")
);

/**
 * Output
 *
 * The word Tab is Present in this Array : false
 */