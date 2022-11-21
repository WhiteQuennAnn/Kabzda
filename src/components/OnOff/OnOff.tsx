import React from 'react';

type PropsType = {
    on: boolean
    // off: boolean
}

function OnOff(props: PropsType) {
    const onStyle = {
        widht: "50px",
        height: "40px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px"
    }
    const offStyle = {
        widht: "50px",
        height: "40px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "2px",
        padding: "2px"
    }
    const indicatorStyle = {
        widht: "50px",
        height: "50px",
        borderRadius: "5px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        padding: "2px"
    }
    return (
        <div>
            <div style={onStyle}></div>
            <div style={offStyle}></div>
            <div style={indicatorStyle}></div>
        </div>
    )
}

export default OnOff;