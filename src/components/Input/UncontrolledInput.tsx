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

export const ControlledInput = () => <input value={"Anna"}/>;

