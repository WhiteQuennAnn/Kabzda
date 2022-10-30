import React from "react";

export function Rating() {
    console.log("Rating rendering")
    return (
        <div>
            <Star selected={true} />
            <Star selected={true}/>
            <Star selected={false}/>
            <Star selected={false}/>
            <Star selected={false}/>
        </div>
    )
}

function Star() {
    console.log("Star rendering")
    return (
              <span> <b>star </b></span>

    )
}