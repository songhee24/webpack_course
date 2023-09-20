import {useState} from "react";
import classes from './App.module.scss'
import {Link, Outlet} from "react-router-dom";
// import About from "@/pages/about/About";
const App = () => {
    const [counter, setCounter] = useState(0)

    const increment = () => setCounter(prevState => prevState+1)

    return (
        <div>
            <Link to={'/about'}>about</Link>
            <br />
            <Link to={'/shop'}>shop</Link>
            <h1>{counter}</h1>
            <button className={classes.button} onClick={increment}>inc</button>
            <Outlet />
            {/*<About />*/}
        </div>
    )
}

export default App
