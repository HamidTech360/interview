import React from 'react';
import { useState } from 'react';
import styles from './counter.module.css'

const Counter = () => {

    const [counter, setCounter] = useState(0)

    const handleIncreaseCount = ()=>{
        setCounter(counter+1)
    }
    const handleDecreaseCount = ()=>{
        const newCount = counter - 1
        if(newCount < 0) return
        setCounter(newCount)
    }

    return ( 
        <div>
            <div>
                {counter}
            </div>

            <div>
                <button onClick={handleIncreaseCount} >+</button>
                <button onClick={handleDecreaseCount} >-</button>
            </div>
        </div>
     );
}
 
export default Counter;