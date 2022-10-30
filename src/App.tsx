import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";

// function declaration
function App() {
    console.log("App rendering")
    // полезное что-то
    debugger
    // обязана вернуть JSX
    return (
        <div>
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

function Rating() {
    console.log("Rating rendering")
    return (
        <Star/>
    )
}

function Star() {
    console.log("Star rendering")
    return (
        <div>
            <div>star</div>
            <div>star</div>
            <div>star</div>
            <div>star</div>
            <div>star</div>
        </div>
    )
}



export default App;
