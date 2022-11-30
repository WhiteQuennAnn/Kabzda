import React, {useState} from 'react';

type PropsType = {
    on: boolean
    onChange: (on: boolean) => void

}

function OnOff(props: PropsType) {
    console.log("OnOffRenedering")

    console.log("on:" + props.on)

    const onStyle = {
        widht: "50px",
        height: "40px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        backgroundColor: props.on ? "green" : "white"
    }
    const offStyle = {
        widht: "50px",
        height: "40px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "2px",
        padding: "2px",
        backgroundColor: props.on ? "white" : "red"
    }
    const indicatorStyle = {
        widht: "50px",
        height: "50px",
        borderRadius: "5px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        padding: "2px",
        backgroundColor: props.on ? "green" : "red"
    }

    return (
        <div>
            <div style={onStyle} onClick={() => props.onChange(true)}></div>
            <div style={offStyle} onClick={() => props.onChange(false)}></div>
            <div style={indicatorStyle}></div>
        </div>
    )
}

export default OnOff;