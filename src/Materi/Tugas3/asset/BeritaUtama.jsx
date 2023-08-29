import React from "react";
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';


const NavHead = styled.h2`
color: white; padding-left: 15px;
`

const Searchbar = styled.div`
    margin: 20px;
`

const Row = styled.div`
    --bs-gutter-x: 1.5rem;
    --bs-gutter-y: 0;
    display: flex;
    flex-wrap: wrap;
    margin-top: calc(var(--bs-gutter-y) * -1);
    margin-right: calc(var(--bs-gutter-x) * -.5);
    margin-left: calc(var(--bs-gutter-x) * -.5)
    flex-shrink: 0;
    width: 100%;
    max-width: 100%;
    padding-right: calc(var(--bs-gutter-x) * .5);
    padding-left: calc(var(--bs-gutter-x) * .5);
    margin-top: var(--bs-gutter-y)
}
`

const Card =styled.div`

    transition: 0.5s ease;
    cursor: pointer;
    margin: 30px;
  
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.9);
    font-family: roboto;
    text-align: center;

    &:hover{
        transform: scale(1.05);
        box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);
    }

`
export default class BeritaUtama extends React.Component{
   
    state={
        search: '',
        url: '',
        items: [],
        DataisLoaded: false,
        url: '',
        submittest: false
  
    }


    

    handleSubmit = (e)=> {
        e.preventDefault(); 
        
        this.setState({
            url: '',
            submittest: true
        })
        
        if(this.state.search !== null && this.state.search !== '' ){
            this.setState({
                url: "https://newsapi.org/v2/everything?q=" + this.state.search + "&from=2023-07-29&sortBy=publishedAt&apiKey=90200d1c141f4f228498fe02a314a390"
            })
    
        }else{
            this.setState({
                url: "https://newsapi.org/v2/everything?q=from=2023-07-29&sortBy=publishedAt&apiKey=90200d1c141f4f228498fe02a314a390"
            })
        }
        
    }

    componentDidMount(){

        console.log('DID MOUNT')
   
        fetch("https://newsapi.org/v2/everything?q=from=2023-07-29&sortBy=publishedAt&apiKey=90200d1c141f4f228498fe02a314a390")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json.articles,
                    DataisLoaded: true
                });
            console.log(json.articles)

            })


    };

    componentDidUpdate(){

        console.log('DID UPDATE')

        if(this.state.submittest === true){
     
            fetch(this.state.url)
                .then((res) => res.json())
                .then((json) => {
                    this.setState({
                        items: json.articles,
                        DataisLoaded: true,
                        submittest: false,
                        search: ''
                    });
     
          

                })
        }
       
    }


      
    render(){   
        const { DataisLoaded, items } = this.state;
        if (!DataisLoaded) return <div>
            <h1> Pleses wait some time.... </h1> </div> ;


        return(          
            <div>
                <nav class="navbar navbar-dark bg-dark">
                   <NavHead>News</NavHead>
                </nav>


                <Searchbar>
                    <form class="form-outline mb-4" id="search" onSubmit={this.handleSubmit}>
                        <input type="search" name="search" class="form-control" id="searchinput" onChange={e => this.setState({search: e.target.value})} value={this.state.search}/>
                        <label class="form-label" for="searchinput">Search</label>
                        <div id="livesearch"></div>
                        <button type="submit">Search</button>
                    </form>
                </Searchbar>
                <h2>{this.state.url}</h2>
      


                <div className = "App">
                    <h1>{this.state.url}</h1>
                    
                    <h1> Fetch data from an api in react </h1>  
                    {
                        items.map((item) => (
                         <ol key = { item.id } >
               
                        
                            <div class="row" id="testgg">
                                <div class="col-md-4">
                                    <Card class="card">
                                        <div class="card-body">
                                            <img src={item.urlToImage} class="card-img-top"  alt="..."/>
                                            <h5 class="card-title">{item.title}</h5>
                                            <p class="card-text">{item.description}</p>
                                            <p class="card-text"><small class="text-muted">{item.publishedAt}</small></p>
                                            <input type="button" onclick="location.href='{item.url}';" value="News Detail" />
                                        </div>
                                    </Card>

                                </div>
                            </div> 
                    
                            </ol>
                        ))
                    }
       
                </div>
                
            </div>
        )

        

    

       
    }
    
 
}