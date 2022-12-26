import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import OnOff from "./components/OnOff/OnOff";
import UnControlledAccordion from "./components/AccordionUnControlled/UnControlledAccordion";
import {UnControlledRating} from "./components/UnControlledRating/UnControlledRating";
import UnControlledOnOff from "./components/UnControlledOnOff/UnControlledOnOff";
import {
    ControlledCheckbox,
    ControlledInput, ControlledInputWithFixedValue, ControlledSelect,
    GetValueOfUncontrolledInputByButtonPress,
    TrackValueOfUncontrolledInput,
    UncontrolledInput
} from "./components/Input/UncontrolledInput";
import {Select} from "./components/Select/Select";

// function declaration
function App(props: any) {
    console.log("App rendering")
    let [ratingValue, setRatingValue] = useState<RatingValueType>(4)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [switchOn, setSwitchOn] = useState<boolean>(false); //hook with init value
    const [value, setValue] = useState('2')
    const onClick = (value: string) => {
        alert(`some item was clicked ${value}`)
    }
    return (
        <div className={"App"}>
            <Select value={value} items={
                [
                    {value: '1', title: 'Minsk'},
                    {value: '2', title: 'Dubai'},
                    {value: '3', title: 'London'},
                ]
            } onChange={setValue}/>
            <Accordion titleValue={"Users"}
                       collapsed={accordionCollapsed}
                       items={[
                           {title: 'anya', value: '1'},
                           {title: 'ira', value: '2'},
                           {title: 'feliks', value: '3'}
                       ]}
                       onChange={() => {
                           setAccordionCollapsed(!accordionCollapsed)
                       }}
                       onClick={onClick}/>
            <Accordion titleValue={"Menu"}
                       collapsed={accordionCollapsed}
                       items={[]}
                       onChange={() => {
                           setAccordionCollapsed(accordionCollapsed)
                       }}
                       onClick={onClick}/>


            <Rating value={ratingValue}
                    onClick={setRatingValue}/>
            <UnControlledRating/>
            <OnOff on={switchOn} onChange={setSwitchOn}/>

            <UnControlledOnOff onChange={setSwitchOn}/> {switchOn.toString()}
            <UncontrolledInput/>
            <TrackValueOfUncontrolledInput/>
            <ControlledInputWithFixedValue/>
            <ControlledInput/>
            <ControlledCheckbox/>
            <ControlledSelect/>
            <GetValueOfUncontrolledInputByButtonPress/>

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
