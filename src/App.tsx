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
            <PageTitle title={"This is APP component"}/>
            <PageTitle title={"My friends"}/>
            Article 1
            <Rating value={3}/>
            <Accordion/>
            Article 2
            <Rating value={5}/>
            <Rating value={4}/>
            <Rating value={4}/>
            <Rating value={1}/>
        </div>
    );
}

function PageTitle(props: any) {
    console.log("PageTitle rendered")
    debugger
    return <h1> {props.title}</h1>
}

export default App;
