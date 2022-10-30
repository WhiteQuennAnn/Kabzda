import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";



function sum(a:number, b:number) {
    alert (a+b)
}
sum(25,12);

// function declaration
function App() {
    console.log("App rendering")
    // полезное что-то
       // обязана вернуть JSX
    return (

        <div>

            <input value = {"rtrtty"} />
            <input checked={true} type = "date"/>

           <AppTitle />
            <Rating />
            <Rating />
            <Accordion />
        </div>
    );
}

function AppTitle() {
    console.log("AppTitle rendered")
    return <> This is APP component</>
}
export default App;
