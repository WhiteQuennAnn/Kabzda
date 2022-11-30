import React, {useState} from "react";

type RatingPropsType = {}

export function UnControlledRating(props: RatingPropsType) {
    console.log("UnControlledRating rendering")

    let [value, setValue] = useState(1)
    return (
        <div>
            <Star selected={value > 0} setValue={setValue}/>
            <Star selected={value > 1} setValue={setValue}/>
            <Star selected={value > 2} setValue={setValue}/>
            <Star selected={value > 3} setValue={setValue}/>
            <Star selected={value > 4} setValue={setValue}/>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
    setValue: (value: 1|2|3|4|5)=> void
}

function Star(props: StarPropsType) {
    console.log("Star rendering")

    return <span>
        {props.selected ? <b> star </b> : "star "}
    </span>

}



