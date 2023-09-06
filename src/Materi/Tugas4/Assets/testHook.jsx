import { useEffect, useState } from "react";
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './stylin.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';



const NavHead = styled.h2`
color: white; padding-left: 15px;
`

const Searchbar = styled.div`
    margin: 20px;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);
`



const Testhook = () => {
    let [text, setText] = useState('');
    let [user, setUser] = useState({});
    let [seconds, setSeconds] = useState(0);
    let [num, setNum] = useState('');


    useEffect(()=>{
        if(num !== null && num !== '' ){
                console.log('GetApi')
                // setDisplay(() => localStorage.getItem('text'));
                fetch('https://newsapi.org/v2/everything?q='+ num +'&from=2023-08-06&sortBy=publishedAt&apiKey=90200d1c141f4f228498fe02a314a390')
                    .then(res => res.json())
                    .then(res => setUser(res.articles))
                    console.log(user)

                console.log('close')

        
        }else{
            console.log('GetApi empty')
                // setDisplay(() => localStorage.getItem('text'));
                fetch('https://newsapi.org/v2/everything?q=tesla&from=2023-08-06&sortBy=publishedAt&apiKey=90200d1c141f4f228498fe02a314a390')
                    .then(res => res.json())
                    .then(res => setUser(res.articles))
                    console.log(user)
        }
    },[num]) //biar nga looping dependency set array kosong sadja



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
            <nav class="navbar navbar-dark bg-dark">
                   <NavHead>News</NavHead>
                </nav>
                <div>Waktu: {Math.floor(seconds / 60)} Menit {seconds % 60} Detik</div>
                <Searchbar>
                    <form class="form-outline mb-4" id="search" >
                        <input type="search" name="search" class="form-control" id="searchinput" onChange={(e) => setNum(e.target.value)}/>
                        <label class="form-label" for="searchinput">Search</label>
                        <div id="livesearch"></div>
                    </form>
                </Searchbar>
            <div>
                {
                    Array.isArray(user) ? user.map((item) => (
                        <ol key = { item.id } >

                            <div class="container" id="ggimang">
                                <div class="row" id="testgg">
                                    <div class="col-md-4">
                                        <div class="card">
                                            <img src={item.urlToImage} class="card-img-top"  alt="..."/>    
                                            <div class="card-body">
                                                <h5 class="card-title">{item.title}</h5>
                                                <p class="card-text">{item.description}</p>
                                                <p class="card-text"><small class="text-muted">{item.publishedAt}</small></p>
                                                <input type="button" onclick="location.href='{item.url}';" value="News Detail" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
         
                           </ol>
                       )) : ''
                }
            </div>

        </div>
    )
}

export default Testhook;