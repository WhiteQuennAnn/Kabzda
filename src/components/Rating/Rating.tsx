import React from "react";

export function Rating(props: any) {
    console.log("Rating rendering")
    if (props.value === 0 ) {
        return (
            <div>
                <Star selected={false}/>
                <Star selected={false}/>I
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={false}/>
            </div>
        )
    }
    if (props.value === 1 ) {
        return (
            <div>
                <Star selected={true}/>
                <Star selected={false}/>I
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={false}/>
            </div>
        )
    }
    if (props.value === 2 ) {
        return (
            <div>
                <Star selected={true}/>
                <Star selected={true}/>I
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={false}/>
            </div>
        )
    }
    if (props.value === 3 ) {
        return (
            <div>
                <Star selected={true}/>
                <Star selected={true}/>I
                <Star selected={true}/>
                <Star selected={false}/>
                <Star selected={false}/>
            </div>
        )
    }
    if (props.value === 4 ) {
        return (
            <div>
                <Star selected={true}/>
                <Star selected={true}/>I
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={false}/>
            </div>
        )
    }
    if (props.value === 5 ) {
        return (
            <div>
                <Star selected={true}/>
                <Star selected={true}/>I
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
            </div>
        )
    }



}

function Star(props: any) {
    console.log("Star rendering")
    if (props.selected === true) {
        return <span> <b>star </b></span>
    } else {
        return <span>star </span>

    }

}