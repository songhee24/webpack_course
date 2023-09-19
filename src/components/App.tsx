import {useState} from "react";
import classes from './App.module.scss'
const App = () => {
    const [counter, setCounter] = useState(0)

    const increment = () => setCounter(prevState => prevState+1)

    return (
        <div>
            <h1>{counter}</h1>
            <button className={classes.button} onClick={increment}>inc</button>
        </div>
    )
}

export default App
