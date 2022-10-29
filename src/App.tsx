import React from 'react';
import './App.css';

// function declaration
function App() {
    // полезное что-то

    // обязана вернуть JSX
    return (
        <div>
            This is APP component
        </div>
    );
}

function Rating() {
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
    return
        <div>
            <h3> Меню </h3>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>

}

export default App;
