// Declare variables to store your first name, last name, marital status, country and age and display them using interploation method.

// 1st way

// let firstName = "mohan";
// let lastName = "chaudhary";
// let maritalStatus = "single";
// let country = "India";
// let age = 23;

// console.log(`
// My First Name is ${firstName}
// My Last Name is ${lastName}
// My Marital Status is ${maritalStatus}
// I live in ${country}
// My age is ${age}
// `);

/***
 * Output
 *
 * My First Name is mohan
 * My Last Name is chaudhary
 * My Marital Status is single
 * I live in India
 * My age is 23
 *
 */

// 2nd way

function personalDetails(firstName, lastName, maritalStatus, age, country) {
    let result = console.log(
      `My Name is ${firstName} ${lastName}. My age is ${age}. My Marital Status is ${maritalStatus}. I live in ${country} `
    );
  }
  
  let details = personalDetails("mohan", "chaudhary", "Single", "23", "India");
  
  /**
   * Output
   *
   * My Name is Raj Ratan. My age is 23. My Marital Status is Single. I live in India
   *
   */