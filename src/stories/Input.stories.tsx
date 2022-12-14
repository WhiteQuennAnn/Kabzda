import React, {useState} from 'react';

export default {
    title: 'input',
    // component: OnOff,
}

export const UncontrolledInput = () => <input/>;

export const TrackValueUncontrolledInput = () = {
    const [value, setValue] = useState(" ");
    return <> <input onChange={(event) => {
        const actualValue = event.currentTarget.value;
        setValue(actualValue)
    }

    }

    /> - {value} </>
}


export const ControlledInput = () => <input value={"Anna"}/>;

