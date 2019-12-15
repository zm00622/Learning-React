// Starting node.js in the terminal and loading React

// To create or generate a React Project
//
// Type the following:
//
// cd Desktop
// (This will place you in the desktop directory)
//
// npx create-react-app <name of project>
// (This will create a new app)
// (Ex: npx create-react-app myfile)
//
// cd file name
// (locates the file name and opens it. Ex: cd myfile)
//
// npm start
// (to open a new React project you would type:
// cd Desktop
//
// So the whole process would be typed as follows:
//
//  npx create-react-app myfile [press enter]
//  cd myfile [press enter]
//  npm start [press enter]
//
// To close an application in the terminal press:
// Control+C


// Import the React and ReactDOM libraries
import React from 'react'; // react is a module in your node_modules folder on the left
import ReactDOM from 'react-dom'; // react-dom is a module in your node_modules folder on the left

// Create a react component
// Must make sure the first HTML tag is on the opening line of the return statement, or place HTML in ()
const App = function() {
  const buttonText = { text: 'Click me' };
  const labelText = 'Enter name:';

  return (
    <div>
     <label htmlFor="name" className="label">
     {labelText}
     </label>
     <input id="name" type="text"/>
     <button style={{backgroundColor:'blue', color: 'white'}}>
      {buttonText.text}
     </button>
    </div>
  );
};

/*
Can also be written with an arrow function such as:
const App = () => {
  return <div>Hi there!</div>;
};
*/

// Take the react component and show it on the screen
ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
