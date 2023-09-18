import {useState} from "react";
import './App.scss'
import './test.scss'
const App = () => {
    const [counter, setCounter] = useState(0)

    const increment = () => setCounter(prevState => prevState+1)

    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={increment}>inc</button>
        </div>
    )
}

export default App
