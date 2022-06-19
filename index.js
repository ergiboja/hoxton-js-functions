/* WRITE THE CODE FOR THE FOLLOWING FUNCTIONS */

// Input: a (number), b (number)
// Action: Add both numbers together
// Output: The result (number)
function add(numba= 10, numbb=10) {
  console.log("The result is :",numba + numbb)
 
 
}

add()
// Input: number
// Action: Check if the number given is even or not
// Output: The result (boolean)
function isEven(num1=10) {
  if(num1 % 2 == 1){
    console.log("True")
  }
  else{
    console.log("False")
  }
  
}
isEven()

// Input: name (string)
// Action: Greet the user by name
// Output: The greeting (string)
function greet(user = "Ergi") {
  console.log("Hello" ,user, "How are u doing?")
}
greet()

// Input: age (number)
// Action: Check if the age is 18 or over
// Output: The result (boolean)
function isAnAdult(adultAge = 17) {
  if(adultAge >= 18){
    console.log("True")
  }
  else{
    console.log("False")
  }
}

isAnAdult()
// Input: age (number)
// Action: Check how many years are left until adulthood (18)
// Output: The result (number)
function yearsToAdulthood(age = 10) {
  if(age<18){
    let years = 18 - age
    console.log(years,"Years are left till adulthood !!")
  }
  else{
    console.log("Eyo u already are an adult")
  }
  
}
yearsToAdulthood()

// Input: person ({ age: number, name: string })
// Action:
//   - check if a person is an adult
//   - if they are, greet them
//   - if they are not, tell them to come back in X years (when they are)
// Output: The result (string)
function admit(admitAge=7, admitName="Nicolas") {
  // write your code here
  // use greet, isAnAdult and yearsToAdulthood to help you!
   isAnAdult(admitAge);
   greet(admitName);
  yearsToAdulthood(admitAge);
}
admit()