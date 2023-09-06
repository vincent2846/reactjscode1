import React from "react";
import BeritaNews from "./Assets/berita";
import Testhook from "./Assets/testHook";



export default class Tugas4 extends React.Component{


    render(){
        console.log('RENDER')
        return(
            <div>
                <Testhook />
                {/* <BeritaNews /> */}
            </div>
        )
    }
}