export default {
    title: "React memo demo",
}


const NewMessagesCounter = (props: { count: number }) => {
    return <div> {props.count}</div>
}

const Users = (props: { users: string[] }) => {
    return <div> {props.users.map((u, i) => <div>{u}</div>)}</div>
}
const Example = () => {
    return <>
        <  NewMessagesCounter count={20}/>
        <Users users={["Anna", "Igor", "Dima"]}/>
    </>
}
