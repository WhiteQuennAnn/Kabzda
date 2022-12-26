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

    const selectedItem = props.items.find(i => i.value === props.value)

    return (
        <div>
            <option value=""> Minsk</option>
            <option value=""> Dubai</option>
            <option value=""> London</option>
            <h3> {selectedItem && selectedItem.title}</h3>
            {props.items.map(i => <div key={i.value}>{i.title}</div>)}
        </div>
    )
}