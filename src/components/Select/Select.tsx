import React, {KeyboardEventHandler, useEffect, useState} from "react";
import styles from './Select.module.css';

type ItemType = {
    title: string
    value: any
}

type SelectPropsType = {
    value?: any
    onChange: (value: any) => void
    items: ItemType[]
}

export function Select(props: SelectPropsType) {
    const [active, setActive] = useState(false);
    const [hoveredElementValue, setHoveredElementValue] = useState(props.value);

    const selectedItem = props.items.find(i => i.value === props.value)
    const hoveredItem = props.items.find(i => i.value === hoveredElementValue)

    useEffect(() => {
        setHoveredElementValue(props.value)
    }, [props.value])


    const toggleItems = () => {
        setActive(!active)
    }
    const onItemClick = (value: string) => {
        props.onChange(value)
        toggleItems()
    }

    const onKeyUp = (e:  KeyboardEvent<HTMLDivElement> ) => {
        if (e.key === "ArrowDown" || e.key === "ArrowUp") {
            for (let i = 0;
                 i < props.items.length;
                 i++
            ) {
                if (props.items[i].value === hoveredItem) {
                    const pretendentElement = e.key === "ArrowDown" ? props.items[i + 1] : props.items[i - 1]
                    if (pretendentElement) {
                        props.onChange(pretendentElement.value)
                        return;
                    }
                }
            }
            if (!selectedItem) {
                props.onChange(props.items[0].value)
            }
            props.onChange(props.items[0].value)
        }
        if (e.key === "Enter" || e.key === "Escape") {
            setActive(false)
        }
    }

    return (
        <>
            <select>
                <option value=""> Minsk</option>
                <option value=""> Dubai</option>
                <option value=""> London</option>
            </select>
            <div className={styles.select}
                 tabIndex={0}
                 onKeyUpCapture={onKeyUp}>

                <span className={styles.main} onClick={toggleItems}>
                    {selectedItem && selectedItem.title}</span>
                {
                    active &&

                    <div className={styles.items}>
                        {props.items.map(i => <div
                            onMouseEnter={() => {
                                setHoveredElementValue(i.value)
                            }}
                            className={styles.item + " " +
                                (selectedItem === i ? styles.selected : " ")}
                            key={i.value}
                            onClick={() => {
                                onItemClick(i.value)
                            }}>
                            {i.title}
                        </div>)}
                    </div>
                }
            </div>
        </>
    )
}