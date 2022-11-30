import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import OnOff from "./components/OnOff/OnOff";
import UnControlledAccordion from "./components/AccordionUnControlled/UnControlledAccordion";
import {UnControlledRating} from "./components/UnControlledRating/UnControlledRating";

// function declaration
function App(props: any) {

    console.log("App rendering")
    // полезное что-то
    // обязана вернуть JSX
    return (
        <div className={"App"}>
            <OnOff/>
            {/*<OnOff/>*/}
            {/*<OnOff/>*/}


            <UnControlledAccordion titleValue={"Users"}/>
            <Accordion titleValue={"Menu"} collapsed={false}/>
            <Rating value={2}/>


            {/*<UnControlledRating value={1}/>*/}
            {/*<UnControlledRating value={2}/>*/}
            {/*<UnControlledRating value={3}/>*/}
            {/*<UnControlledRating value={4}/>*/}
            {/*<UnControlledRating value={5}/>*/}

        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log("PageTitle rendered")
    return <h1> {props.title}</h1>
}

export default App;
