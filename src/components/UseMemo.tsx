import React, {useMemo, useState} from "react";

export const DifficultCounter = () => {

    const [a, setA] = useState<number>(3)
    const [b, setB] = useState<number>(3)

    let resultA = 1
    let resultB = 1

    resultA = useMemo(() => {
        let tempResultA = 1;
        for (let i = 1; i <=
        a; i++) {
            let fake = 0;
            while (fake < 10000) {
                fake++;
                const fakeValue = Math.random();
            }
            resultA = resultA * i;

        }
        return tempResultA;
    }, [a])


    for (let i = 1; i <=
    b; i++) {
        resultB = resultB * i;
    }

    return <>
        <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
        <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
        {/*//можно и так, и так*/}
        <hr/>
        <div>
            Result for a: {resultA}
        </div>
        <div>
            Result for b: {resultB}
        </div>
    </>
}

const UsersSecret = (props: { users: string[] }) => {
    return <div> {props.users.map((u, i) => <div key={i}>{u}</div>)}</div>
}

const Users = React.memo(UsersSecret);

export const HelpsToReactMemo = () => {
    console.log('LikeUseCallBack')
    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(["Anna", "Igor", "Dima"]);

    const newArray = useMemo(() => {
        const newArray = users.filter(u => u.toLowerCase().indexOf("a") > -1)
        return newArray;

    }, [users]);
    const addUser = () => {
        const newUsers = [...users, 'Svetlana' + new Date().getTime()];
        setUsers(newUsers)
    }
    return <>
        <button onClick={() => {
            setCounter(counter + 1)
        }}> +
        </button>
        <button onClick={addUser}> add user
        </button>
        {counter}
        <Users users={newArray}/>
    </>
}

export const LikeUseCallBack = () => {
    console.log('LikeUseCallBack')
    const [counter, setCounter] = useState(0);
    const [books, setBooks] = useState(["JS", "React", "Css"]);

    const newArray = useMemo(() => {
        const newArray = books.filter(u => u.toLowerCase().indexOf("a") > -1)
        return newArray;

    }, [books]);
    const addBook = () => {
        const newBooks = [...books, 'Angular' + new Date().getTime()];
        setBooks(newBooks)
    }


    return <>
        <button onClick={() => {
            setCounter(counter + 1)
        }}> +
        </button>

        {counter}
        <Book books={newArray} addBook={addBook}/>
    </>
}


type bookSecretPropsType = {
    books: string[]
    addBook: () => void
}
const BooksSecret = (props: bookSecretPropsType) => {
    console.log('BooksSecret')
    return <div>
        <button onClick={() => props.addBook()}> add book
        </button>
        {props.books.map((book, i) => <div key={i}>{book}</div>)}</div>
}

const Book = React.memo(BooksSecret)

