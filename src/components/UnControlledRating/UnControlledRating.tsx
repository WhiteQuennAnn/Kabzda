import React, {useState} from "react";

type RatingPropsType = {}

export function UnControlledRating(props: RatingPropsType) {
    console.log("UnControlledRating rendering")

    let [value, setValue] = useState(1)
    return (
        <div>
            <Star selected={value > 0}/>
            <Star selected={value > 1}/>
            <Star selected={value > 2}/>
            <Star selected={value > 3}/>
            <Star selected={value > 4}/>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
}

function Star(props: StarPropsType) {
    console.log("Star rendering")
    return props.selected ? <span> <b> star </b></span> : <span>star </span>

    return <span> {props.selected ? <b> star </b> : "star "} </span>

}



