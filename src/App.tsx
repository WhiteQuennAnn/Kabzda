import React from 'react';
import './App.css';

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

function Accordion() {
    console.log("Accordion rendering")
       return (

        <div>
            <h3> Меню </h3>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    )
}

export default App;
