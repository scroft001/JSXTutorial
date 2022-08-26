//1) Import react and reactdom libs
import React from "react";
import ReactDOM from "react-dom/client";

//2) get a reference to div with id root
const el = document.getElementById('root');

//3) tell react to take control of that element
const root = ReactDOM.createRoot(el);

//4) create a component
function App(){
    const inputType = 'number'
    const minValue = 5;
    // plain html for numbers would be <input type="numbers"> need to make that jsx
    return <input style={{border: '3px solid red'}} type={inputType} min={minValue} />;
}

//5) show component on screen
root.render(<App />);