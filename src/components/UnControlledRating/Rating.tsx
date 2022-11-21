import React from "react";

type RatingPropsType = {
    value: number
}

export function Rating(props: RatingPropsType) {
    console.log("Rating rendering")
    return (
        <div>
            <Star selected={props.value > 0}/> <button> 1</button>
            <Star selected={props.value > 1}/><button> 2</button>
            <Star selected={props.value > 2}/><button> 3</button>
            <Star selected={props.value > 3}/><button> 4</button>
            <Star selected={props.value > 4}/><button> 5</button>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
}

function Star(props: StarPropsType) {
    console.log("Star rendering")
    if (props.selected === true) {
        return <span> <b>star </b></span>
    } else {
        return <span>star </span>

    }
}



