//1) Import react and reactdom libs
import React from "react";
import ReactDOM from "react-dom/client";

//2) get a reference to div with id root
const el = document.getElementById('root');

//3) tell react to take control of that element
const root = ReactDOM.createRoot(el);

//4) create a component
function App(){
    return <h1>Hi there!</h1>
}

//5) show component on screen
root.render(<App />);