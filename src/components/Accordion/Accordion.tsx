import React from "react";

type ItemPropsType = {
    title: string[]
    value?: any
}

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: () => void
    items: string[]
}

function Accordion(props: AccordionPropsType) {
    console.log("UnControlledAccordion rendering")
    return (
        <div>
            <AccordionTitle title={props.titleValue}
                            onChange={props.onChange}/>
            {!props.collapsed && <AccordionBody items={props.items}/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    onChange: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")
    return (
        <h3 onClick={props.onChange}> {props.title} </h3>
    )
}

type AccordionBodyPropsType = {
    items: string[]
}

const AccordionBody = (props: AccordionBodyPropsType) => {

    return (
        <ul>
            {props.items.map((i, index) => <li key={index}> {i}</li>)}
        </ul>

    )
}

export default Accordion;