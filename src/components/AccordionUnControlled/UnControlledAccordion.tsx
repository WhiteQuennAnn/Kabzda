import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string
    // collapsed: boolean
}

function UnControlledAccordion(props: AccordionPropsType) {

    console.log("UnControlledAccordion rendering")
    let [collapsed, setCollapsed ]  = useState(false);

    return (
        <div>
            <AccordionTitle title={props.titleValue}/>
            <button> TOGGLE</button>
            {!collapsed && <AccordionBody/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")
    return (
        <h3> {props.title} </h3>
    )
}

function AccordionBody(props: any) {
    console.log("AccordionBody rendering")
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

export default UnControlledAccordion;