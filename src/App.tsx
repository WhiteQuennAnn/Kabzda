import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import OnOff from "./components/OnOff/OnOff";
import UnControlledAccordion from "./components/AccordionUnControlled/UnControlledAccordion";
import {UnControlledRating} from "./components/UnControlledRating/UnControlledRating";
import UnControlledOnOff from "./components/UnControlledOnOff/UnControlledOnOff";
import {ControlledInput, TrackValueOfUncontrolledInput, UncontrolledInput} from "./components/Input/UncontrolledInput";

// function declaration
function App(props: any) {
    console.log("App rendering")
    let [ratingValue, setRatingValue] = useState<RatingValueType>(4)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [switchOn, setSwitchOn] = useState<boolean>(false); //hook with init value

    return (
        <div className={"App"}>
            {/*<UnControlledAccordion titleValue={"Users"}/>*/}

            <Accordion titleValue={"Menu"}
                       collapsed={accordionCollapsed} onChange={() => {
                setAccordionCollapsed(!accordionCollapsed)
            }}/>

            <Rating value={ratingValue}
                    onClick={setRatingValue}/>
            <UnControlledRating/>
            <OnOff on={switchOn} onChange={setSwitchOn}/>

            <UnControlledOnOff onChange={setSwitchOn}/> {switchOn.toString()}
            <UncontrolledInput/>
            <TrackValueOfUncontrolledInput/>
            <ControlledInput/>

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
