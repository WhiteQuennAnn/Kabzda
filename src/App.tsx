import React from 'react';
import './App.css';



 function hello() {
     debugger
     alert('Hello, Anya')
 }
 hello();



// function declaration
function App() {
    // полезное что-то
    debugger
    // обязана вернуть JSX
    return (
        <div>
            This is APP component
        </div>
    );
}

function Rating() {
    debugger
    return (
        <div>
            <div>start</div>
            <div>start</div>
            <div>start</div>
            <div>start</div>
            <div>start</div>
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
