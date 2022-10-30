import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";

// function declaration
function App() {
    console.log("App rendering")
    // полезное что-то
       // обязана вернуть JSX
    return (

        <div>

            <input value = {"rtrtty"} />
            <input type = "date"/>

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
