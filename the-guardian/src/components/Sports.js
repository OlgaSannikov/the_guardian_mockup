import React from "react";
import "../components/components.css";
import axios from 'axios';


class Sports extends React.Component{
    constructor (props){
        super(props);
        this.state={
            sportArt1Txt: null
            sportArt2Txt: null,
            sportArt3Txt: null,
            sportArt4Txt: null,
            sportArt5Txt: null,
            sportArt6Txt: null,
            sportArt7Txt: null,
            sportArt8Txt: null,
            sportArt1Title: null,
            sportArt2Title: null,
            sportArt3Title: null,
            sportArt4Title: null,
            sportArt5Title: null,
            sportArt6Title: null,
            sportArt7Title: null,
            sportArt8Title: null,
            sportArt1Image: null,
            sportArt2Image: null,
            sportArt3Image: null,
            sportArt4Image: null,
            sportArt5Image: null,
            sportArt6Image: null,
            sportArt7Image: null,
            sportArt8Image: null,
        }
    }
    async getInfo(){
        const key=process.env.REACT_APP_API_KEY_NEWS;
        try{
            const sport= await axios.get(`http://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=${key}`);
            this.setState({sportArt1Txt: sport.data.articles[0].title});
            this.setState({sportArt1Txt: sport.data.articles[1].title});
            this.setState({sportArt1Txt: sport.data.articles[2].title});
            this.setState({sportArt1Txt: sport.data.articles[3].title});
            this.setState({sportArt1Txt: sport.data.articles[4].title});
            this.setState({sportArt1Txt: sport.data.articles[5].title});
            this.setState({sportArt1Txt: sport.data.articles[6].title});
            this.setState({sportArt1Txt: sport.data.articles[7].title});
            this.setState({sportArt1Txt: sport.data.articles[0].title});
            this.setState({sportArt1Txt: sport.data.articles[1].title});
            this.setState({sportArt1Txt: sport.data.articles[2].title});
            this.setState({sportArt1Txt: sport.data.articles[3].title});
            this.setState({sportArt1Txt: sport.data.articles[4].title});
            this.setState({sportArt1Txt: sport.data.articles[5].title});
            this.setState({sportArt1Txt: sport.data.articles[6].title});
            this.setState({sportArt1Txt: sport.data.articles[7].title});
            
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