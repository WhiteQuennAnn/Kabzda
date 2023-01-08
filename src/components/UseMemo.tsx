import React, {useState} from "react";

export const Example1 = () => {

    const [a, setA] = useState<number>(3)
    const [b, setB] = useState<number>(3)

    let resultA = 1
    let resultB = 1

    for (let i = 1; i <=
    a; i++) {
        resultA = resultA * i;
        for (let i = 1; i <=
        b; i++) {
            resultB = resultB * i;
        }

        return <>
            <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
            <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/> //можно и так, и так
            <hr/>
            <div>
                Result for a: {}
            </div>
            <div>
                Result for b: {}
            </div>
        </>
    }