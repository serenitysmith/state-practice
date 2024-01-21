import "./App.css";
// Import the necessary modules from the React library
import React, { useState } from "react";

// CORRECT ANSWERS BELOW

// 1. Pass in a new color of your choosing in place of the old one.

//     Hint: we don’t care what the previous color was.

//     ```jsx
//     const [color, setColor] = useState("pink")

// litterall just passed in blue to the parantheses
//     setColor("blue")
//     ```











// 2. Toggle between the colors pink and blue. If the current color is pink, we want to set it to blue. If it’s currently blue, set it back to pink.

//     ```jsx
//     const [color, setColor] = useState("pink")

//     setColor(prevColor => prevColor === "pink" ? "blue" : "pink")

// Explanation: to number 2

// setColor: This is a function that is used to update the state variable color. In this case, it appears to be a function returned by the useState hook to update the state.

// prevColor: This is the parameter of the arrow function, representing the previous value of the state variable color before the update.

// prevColor === "pink": This is a comparison that checks if the previous value of color is equal to the string "pink". It returns a boolean value (true if prevColor is "pink", and false otherwise).

// ?: This is the ternary operator, a concise way of writing a conditional statement. If the condition (prevColor === "pink") is true, the value after the ? is returned; otherwise, the value after the : is returned.

// "blue": This is the value returned if the condition (prevColor === "pink") is true. It means that if the previous color was "pink", the new color will be set to "blue".

// :: This separates the two possible outcomes of the ternary operator.

// "pink": This is the value returned if the condition (prevColor === "pink") is false. It means that if the previous color was not "pink" (i.e., it was "blue" or any other value), the new color will be set to "pink".

// In summary, the code uses a ternary operator to toggle the color between "blue" and "pink" each time the setColor function is called. If the previous color was "pink", the new color will be "blue", and if the previous color was anything other than "pink" (e.g., "blue"), the new color will be set to "pink". This way, the color state will toggle between "blue" and "pink" with each update.

//3.   // Add a new person object to the following people array in state. You can hard-code a new object but it must be a person object with firstName and lastName properties.

// const [people, setPeople] = useState([
// 	{
// 		firstName: "John",
// 		lastName: "Smith"
// 	}
// ])

// setPeople(prevPeople => {
// 	return [
//      ...prevPeople,
//      {
//         firstName: "Jane",
//         lastName: "Doe"
//      }
//   ]
// })













// EXPLANATION OF NUMBER 3

// people and setPeople: These are a state variable and its corresponding state-setting function, respectively. The useState hook is used to create the state variable people with an initial value of an array containing one object representing a person with properties firstName and lastName. The setPeople function is used to update the state of the people variable.

// prevPeople: This is the parameter of the arrow function inside the setPeople call, representing the previous value of the people state before the update.

// ...prevPeople: This uses the spread operator ... to create a new array containing all the elements from the previous people state. This ensures that we don't directly modify the original people array.

// { firstName: "Jane", lastName: "Doe" }: This is a new person object being added to the state. It has a firstName property set to "Jane" and a lastName property set to "Doe".

// return [...]: The setPeople function returns a new array, which includes all the elements from the previous state (using the spread operator) and the new person object. This new array will be used as the updated state for the people variable.

// In summary, the code uses the setPeople function to update the people state by adding a new person object with the first name "Jane" and last name "Doe" to the existing array of people. The previous state is copied using the spread operator to create a new array with all the existing people, and then the new person object is added to this array. The component will re-render with the updated people state, showing both "John Smith" and "Jane Doe" as people in the list.





// 4-Change the following state-setting functions to use an implicit return

const [colors, setColors] = setState(["pink", "blue"])

// explicit return 
setColors(prevColors => {
	return [...prevColors, "green"]
})
// EXPLaNATION NUMBER 4 explicit return


// The setColors function is called with an arrow function that takes prevColors as a parameter.
// Inside the function, a new array is created using the spread operator ... to copy all the elements from the previous colors state.
// The new color "green" is added to the end of the new array.
// The function explicitly returns the updated array with the new color, which will be used as the updated state for the colors variable.
// implicit return


  

setColors(prevColors => [...prevColors, "green"])

// Explanantion of number 4 implicit return// 


//This code is identical to the explicit return version, except it uses an implicit return.
// Instead of using curly braces {} and the return keyword, the expression inside the parentheses () is directly returned as it is the only expression in the arrow function.
// The prevColors array is spread into a new array, and then the new color "green" is added at the end, forming the updated state for the colors variable.

// Both explicit and implicit returns achieve the same result of adding the color "green" to the colors state array. The implicit return is a shorter and more concise way to write the same code, and it is commonly used in modern JavaScript and React code for simple expressions.



// number 4 two 
//the line below remains unchanged. It declares a state variable called 
//countObject and a function called setCountObject to update that state. The initial state is an object with a single property count initialized to 0.
const [countObject, setCountObject] = setState({
	count: 0
})

//see below  This is the original state-setting function with an explicit return. It takes the previous state (prevState) as an argument and returns a new state object with the count property incremented by 1.
// explicit return 
setCountObject(prevState=> {
	return {
		count: prevState.count + 1
	}
})
// explanation of below code 
// This is the updated state-setting function using an implicit return. We remove the curly braces {} around the returned object, and instead, we wrap the object in parentheses () to signify an implicit return. The expression ({ count: prevState.count + 1 }) is now an object literal representing the new state with the count property incremented by 1.
// implicit return 
setCountObject(prevState=> ({count: prevState.count + 1}))




//.5=Update the following state to add an additional property age and set the value to 30, ensuring that the other properties are not overwritten.

const [person, setPerson] = useState({
  firstName: "John",
  lastName: "Smith"
})
// notes explaination of above code 
// This line declares a state variable called person and a function called setPerson to update that state. The initial state is an object with two properties, firstName set to "John," and lastName set to "Smith."


// i did this myself but i used brackets which menas array intsztead of curly braces that means object which we wanted return
//     My TRYYYY ------setPerson(prevPerson => {
//   return[
//     ...prevPerson,{
//       Age:30
//     }
//   ]
// })

setPerson(prevPerson => {
  return{
    ...prevPerson,
      Age:30
    };
  });
//The setPerson function is called with a callback as an argument, which receives the previous state (prevPerson) as its argument. This is often referred to as "functional updates" in React, allowing you to work with the previous state to calculate and update the new state.

//Explnaton of above code 

//In this part, the spread syntax (...) is used to create a shallow copy of the previous state (prevPerson). This spread syntax copies all the properties of prevPerson into a new object. After the spread, we add a new property Age with a value of 30 to the new object.

//Explanatio of above code..
// The setPerson function is called with a callback as an argument, which receives the previous state (prevPerson) as its argument.



// return { ... }: The callback function returns an object, which is the updated state. The spread syntax is used here to preserve the existing properties firstName and lastName from the prevPerson object, while also adding the new Age property with a value of 30.

// The code correctly updates the state to add the Age property while ensuring that the other properties (firstName and lastName) are not overwritten. The updated state will look like this:

// {
//   firstName: "John",
//   lastName: "Smith",
//   Age: 30
// }


// below is the the same code as above but with implicit return 
setPerson(prevState => ({
  ...prevState,
  age: 30
}))
// What’s wrong with the following state update?


// const [colors, setColors] = useState(["pink", "blue"])

// setColors("green")


// Answer: 1. Previous state has been overwritten, and
// 2. Data type has changed from an array to a string







// setPeople(prevPeople => {
  // 	return [
  //      ...prevPeople,
  //      {
  //         firstName: "Jane",
  //         lastName: "Doe"
  //      }
  //   ]




export default App;
