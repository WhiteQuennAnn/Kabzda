import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import OnOff from "./components/OnOff/OnOff";
import UnControlledAccordion from "./components/AccordionUnControlled/UnControlledAccordion";
import {UnControlledRating} from "./components/UnControlledRating/UnControlledRating";

// function declaration
function App(props: any) {
    console.log("App rendering")
    let [ratingValue, setRatingValue] = useState<RatingValueType>(4)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)


    return (
        <div className={"App"}>
            {/*<UnControlledAccordion titleValue={"Users"}/>*/}

            <Accordion titleValue={"Menu"}
                       collapsed={accordionCollapsed}  onClick={setAccordionCollapsed}/>

            <Rating value={ratingValue}
                    onClick={setRatingValue}/>
<UnControlledRating/>

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
