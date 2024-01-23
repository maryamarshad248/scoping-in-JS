'use strict';
// function scope

function calcAge(birthyear) {
  const age = 2024 - birthyear;
  console.log(firstName);
  console.log(age);

  //function inside of another function
  function printAge() {
    let output = `${firstName} you are ${age} year old, born in ${birthyear}`;
    console.log(output);

    // block scope

    if (birthyear >= 1981 && birthyear <= 1996) {
      var millanial = true;
      //creating new variable with the same name
      const firstName = 'Edward';

      // reassigning outer scope variable:
      output = 'New Output';
      const str = `Oh, you are a millanial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
      console.log(add(5, 3));
      add();
    }
    console.log(millanial);
    console.log(output);
    //add(2, 3); // reference error

    // console.log(str); // reference error
  }
  printAge();

  return age;
}
//parent scope of the calcAge function is global scope
//  Global scope
const firstName = 'Maryam';
//console.log(age); reference erroe
calcAge(1991);
//console.log(age); //reference error
//printAge(); // reference error
