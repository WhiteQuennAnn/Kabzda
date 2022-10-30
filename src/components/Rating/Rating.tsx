import React from "react";

export function Rating() {
    console.log("Rating rendering")
    return (<>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
        </>
    )
}

function Star() {
    console.log("Star rendering")
    return (
        <div>
            <span>star</span>

        </div>
    )
}