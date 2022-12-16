import React from "react";

type ItemType = {
    title: string
    value: any
}

type SelectPropsType = {
    value: any
    onChange: (value: any) => void
    items: ItemType[]
}

export function Select(props: SelectPropsType) {
    console.log("UnControlledRating rendering")
    return (
        <div>
            <div> {}</div>
            {props.items.map(i => <div>{i.title}</div>)}
        </div>
    )
}