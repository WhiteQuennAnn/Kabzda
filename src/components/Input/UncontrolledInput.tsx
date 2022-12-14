import React, {useState} from 'react';

// export default {
//     title: 'input',
//     // component: OnOff,
// }

export const UncontrolledInput = () => <input/>;

export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState("");
    return <> <input onChange={(event) => {
        const actualValue = event.currentTarget.value;
        setValue(actualValue)
    }}/>
    </>
}
export const GetValueOfUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState("");
    const inputRef = useRef(null)


    return <> <input id={"inputId"}/>
        <button onClick={(e) => {
            const el = document.getElementById("inputId") as HTMLInputElement;
            setValue(el.value);
        }

        }> save
        </button>
        - actual value: {value}
    </>
}

export const ControlledInput = () => <input value={"Anna"}/>;

