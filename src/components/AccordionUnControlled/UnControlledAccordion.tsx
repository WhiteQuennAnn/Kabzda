import React, {useReducer, useState} from "react";

type AccordionPropsType = {
    titleValue: string
    // collapsed: boolean
}

type ActionType = {
    type: string
}

const TOGGLE_CONSTANT = 'TOGGLE-COLLAPSED'

const reducer = (state: boolean, action: ActionType) => {

    switch (action.type) {
        case TOGGLE_CONSTANT:
            return !state;
        default:
            throw new Error('Bad action type')
    }

    return state
}

function UnControlledAccordion(props: AccordionPropsType) {

    console.log("UnControlledAccordion rendering")
    // let [collapsed, setCollapsed] = useState(false);
    let [collapsed, dispatch] = useReducer(reducer, false);

    return (
        <div>
            {/*<AccordionTitle title={props.titleValue} onClick={() => {*/}
            {/*    setCollapsed(!collapsed)*/}
            {/*}}/>*/}
            <AccordionTitle title={props.titleValue} onClick={() => {
                dispatch({type: TOGGLE_CONSTANT})
            }}/>

            {/*<button onClick={ () => {setCollapsed( !collapsed)}}> TOGGLE</button>*/}
            {!collapsed && <AccordionBody/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")
    return (
        <h3 onClick={() => {
            props.onClick()
        }}> {props.title} </h3>
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