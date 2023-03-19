// Demonstrate the use of trim() to remove any trailing whitespace at the beginning and the end of a string.

let str = "       Hello This is String "
console.log("String with Whitespace : "+ str);

let withoutWhiteSpace = str.trim()
console.log("String without Whitespace : "+ withoutWhiteSpace);

/**
 * Output
 * 
 * String with Whitespace :        Hello This is String 
 * String without Whitespace : Hello This is String
 */