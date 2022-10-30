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
            < img src={"https://infogra.ru/wp-content/uploads/2016/09/halloween-greeting-card_23-2147519110.jpg"} />
            <PageTitle/>
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

function PageTitle() {
    console.log("PageTitle rendered")
    return <h1> This is APP component</h1>
}

export default App;
