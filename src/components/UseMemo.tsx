import React, {useState} from "react";

const Example1 = () => {

    const [a, setA] = useState(0)
    const [b, setB] = useState(0)

    return <>
    <input value={a} onChange={(e)=>setA(e.currentTarget.value)}/>
    <input value={b} onChange={(e)=>setB(e.currentTarget.value)}/>
    </>
}