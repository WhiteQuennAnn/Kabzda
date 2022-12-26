import React from "react";
import styles from './Select.module.css';

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
        <>

            <select>
                <option value=""> Minsk</option>
                <option value=""> Dubai</option>
                <option value=""> London</option>
            </select>
            <div className={styles.select}>
                <h3> {selectedItem && selectedItem.title}</h3>

                <div className={styles.items}>
                    {props.items.map(i => <div key={i.value}>{i.title}</div>)} </div>

            </div>
        </>
    )
}