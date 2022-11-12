import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";


// function declaration
function App(props: any) {
    console.log("App rendering")
    // полезное что-то
    // обязана вернуть JSX
    return (

        <div>
            <Accordion titleValue={"Menu"} collapsed={true}/>
            <Accordion titleValue={"Users"} collapsed={false}/>

        </div>
    );
}


type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log("PageTitle rendered")
    debugger
    return <h1> {props.title}</h1>
}

export default App;
