import React from "react";
import "../components/components.css";
import APIKey from "./APIKey";
import axios from 'axios';


class Sports extends React.Component{
    constructor (props){
        super(props);
        this.state={
            sportArt1Txt: null
            // sportArt2Txt: null,
            // sportArt3Txt: null,
            // sportArt4Txt: null,
            // sportArt5Txt: null,
            // sportArt6Txt: null,
            // sportArt7Txt: null,
            // sportArt8Txt: null,
            // sportArt1Image: null,
            // sportArt2Image: null,
            // sportArt3Image: null,
            // sportArt4Image: null,
            // sportArt5Image: null,
            // sportArt6Image: null,
            // sportArt7Image: null,
            // sportArt8Image: null,
        }
    }
    async getInfo(){
        try{
            const sport= await axios.get(`http://newsapi.org/v2/top-headlines?country=us&category=sports&${APIKey()}`);
            this.setState({sportArt1Txt: sport.data.articles[0].title});
            console.log(this.state.sportArt1Txt);
          }
          catch(e){
            console.log(e);
    }
}
    componentDidMount() {
        this.getInfo();
    }
render(){

        return (<div>

        </div>)
    }
}

export default Sports;