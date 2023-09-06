import { useState } from "react";
import Counter from "./pembahasan/Counter";
import Effect from "./pembahasan/Efffect";
import Identity from "./pembahasan/Identity";
import { useToogle } from "./pembahasan/hook/useToogle";

const Hooks = () => {
    let [label, setLabel] = useState('On')
    let [lampu, setLampu] = useToogle();

    const style = {
        background: lampu? 'yellow' : 'black',
        textAlign: 'center',
        height: '400px'
    }

    const saklar = () => {
        setLampu(!lampu);
        setLabel(e => {
            if(e === 'On'){
                return 'Off'
            }
            return 'On';
        })
    }

    return(
        <div style={style}>
            {/* <Counter /> */}
            {/* <Effect /> */}
            <Identity />
            <button onClick={saklar}> {label} </button>
        </div>
    )
}

export default Hooks;