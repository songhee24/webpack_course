import React from "react";

const App = () => {
    const [counter, setCounter] = React.useState(0)

    const increment = () => setCounter(prevState => prevState+1)

    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={increment}>inc</button>
        </div>
    )
}

export default App
