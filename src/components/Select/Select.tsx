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
    const selectedItem = props.items.find( i=> i.value===props.value)
    return (
        <div>
            <h3> {selectedItem && selectedItem.title }</h3>
            {props.items.map(i => <div>{i.title}</div>)}
        </div>
    )
}