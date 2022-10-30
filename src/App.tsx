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
            <AppTitle/>
            Article 1
            <Rating value={3}/>
           <Accordion/>
            Article 2
            <Rating value={4}/>
        </div>
    );
}

function AppTitle() {
    console.log("AppTitle rendered")
    return <div> This is APP component</div>
}

export default App;
