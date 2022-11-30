import React, {useState} from 'react';

type PropsType = {
    onChange: (on: boolean) => void
}

function UnControlledOnOff(props: PropsType) {
    console.log("OnOffRenedering")

    let [on, setOn] = useState(false); //hook with init value
    console.log("on:" + on)

    const onStyle = {
        widht: "50px",
        height: "40px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        backgroundColor: on ? "green" : "white"
    }
    const offStyle = {
        widht: "50px",
        height: "40px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "2px",
        padding: "2px",
        backgroundColor: on ? "white" : "red"
    }
    const indicatorStyle = {
        widht: "50px",
        height: "50px",
        borderRadius: "5px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        padding: "2px",
        backgroundColor: on ? "green" : "red"
    }

    const onClicked = () => {
        setOn(false)
        props.onChange(true)
    }

    const offClicked = () => {
        setOn(false)
        props.onChange(false)
    }

    return <div>
        <div style={onStyle} onClick={onClicked}> On</div>
        <div style={offStyle} onClick={offClicked}>Off</div>
        <div style={indicatorStyle}></div>
    </div>
}

export default UnControlledOnOff
;