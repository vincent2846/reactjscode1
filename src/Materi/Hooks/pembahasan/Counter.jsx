import { useState } from "react";

const Counter = () =>{
    let [count, setCount] = useState(0)



    return(
        <div>
            <button onClick={() => setCount(count - 1)}>-</button>
            {' '} <span>{count}</span>{' '}
            <button onClick={() => setCount(count + 1)}>+</button>
        </div>
    )
}

export default Counter;