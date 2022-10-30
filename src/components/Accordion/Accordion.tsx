import React from "react";

function Accordion() {
    console.log("Accordion rendering")
    return (
        <div>
            <AccordionTitle />
            <AccordionBody />
        </div>
    )
}
function AccordionTitle() {
    console.log("AccordionTitle rendering")
    return (
        <h3> Меню </h3>
    )
}
function AccordionBody() {
    console.log("AccordionBody rendering")
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}
export default Accordion;