import React from 'react';
import './App.css';

// function declaration
function App() {
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
    return <div> This is APP component</div>
}

function Rating() {
    debugger
    return (
        <Star/>
    )
}

function Star() {

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
    debugger
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
