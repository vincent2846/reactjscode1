import { useEffect, useState } from "react";

const Effect = () => {
    let [text, setText] = useState('');
    let [user, setUser] = useState({});
    let [seconds, setSeconds] = useState(0);

    useEffect(()=>{
        console.log('GetApi')
        // setDisplay(() => localStorage.getItem('text'));
        fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(res => res.json())
        .then(res => setUser(res))
    },[]) //biar nga looping dependency set array kosong sadja

    useEffect(() => {
        localStorage.setItem('text', text)
        console.log('singkronisasi')
        // return () => {
        //     console.log('Clean') // ini atau cleanup jalan kalau dependensi berubah (contoh yg ini textnya berybah jadi cleanup)
  
        // }
    }, [text])

    useEffect(() => {
        let intervalId = setInterval(() =>{
            setSeconds(s => s + 1)
        }, 1000)

        return () => {
            console.log('Clean')
            clearInterval(intervalId);
        }
    }, [])

    return(
        <div>  
            <textarea name="" id="" cols="30" rows="10" onChange={(e) => setText(e.target.value)}/>
            <p>{user.name}</p>
            <div>Waktu: {Math.floor(seconds / 60)} Menit {seconds % 60} Detik</div>
        </div>
    )
}

export default Effect;