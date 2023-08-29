import React from "react";
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

// let urlss = "https://newsapi.org/v2/everything?q=" + this.props.url + "from=2023-07-24&sortBy=publishedAt&apiKey=90200d1c141f4f228498fe02a314a390"


export default class InsideTest extends React.Component{


    constructor(props) {
        super(props);
  
        this.state = {
            items: [],
            DataisLoaded: false,
            url: ''
        };

        this.setState({
            url: "Hello"
        })

        // if(this.props.url !== '' && this.props.url !== null ){
        //     this.setState({
        //         url: this.props.url
        //     })
        // }else{
        //     this.setState({
        //         url: "Kosong"
        //     })
        
        // }


 
    }


    tick(){
        this.setState((props) =>({
            url: this.props.url
        }))
    }

    // tick2(){
    //     this.setState({
    //         url: this.props.url
    //     })
    // }
    

    

    componentDidMount(){

        console.log('DID MOUNT')

        console.log(this.state.url)
        fetch("https://newsapi.org/v2/everything?q=from=2023-07-24&sortBy=publishedAt&apiKey=90200d1c141f4f228498fe02a314a390")
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
        console.log(this.props.url)
        fetch('"' + this.props.url + '"')
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json?.articles,
                    DataisLoaded: true
                });
            console.log(json?.articles)

            })
    }

    // componentWillUnmount(){
    //     console.log('DID UNMOUNT')
    //     fetch("https://newsapi.org/v2/everything?q=from=2023-07-24&sortBy=publishedAt&apiKey=90200d1c141f4f228498fe02a314a390")
    //         .then((res) => res.json())
    //         .then((json) => {
    //             this.setState({
    //                 items: json.articles,
    //                 DataisLoaded: true
    //             });
    //         })
    // }

    render() {
        // return(
        //     <div>
        //         <h1>test</h1>
        //     <h1>{this.props.url}</h1>

        // </div>
        // )
        

        const { DataisLoaded, items } = this.state;
        if (!DataisLoaded) return <div>
            <h1>{this.props.url}</h1>
            <h1> Pleses wait some time.... </h1> </div> ;

  
        return (
        <div className = "App">
            <h1>{this.props.url}</h1>
            <h1> Fetch data from an api in react </h1>  
            {
                items.map((item) => (
                <ol key = { item.id } >
                    User_Name: { item.title }
                    </ol>
                ))
            }
            {/* <h1>{this.props.url}</h1> */}
        </div>
    )


}}