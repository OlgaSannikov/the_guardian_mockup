import React from "react";
import "../components/components.css";
import axios from 'axios';


class Sports extends React.Component{
    constructor (props){
        super(props);
        this.state={
            sportArt1Txt: null,
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
            sportArt8Image: null
        }
    }
    async getInfo(){
        const key=process.env.REACT_APP_API_KEY_NEWS;
        try{
            const sport= await axios.get(`http://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=${key}`);
            this.setState({sportArt1Txt: sport.data.articles[0].description});
            this.setState({sportArt1Txt: sport.data.articles[1].description});
            this.setState({sportArt1Txt: sport.data.articles[2].description});
            this.setState({sportArt1Txt: sport.data.articles[3].description});
            this.setState({sportArt1Txt: sport.data.articles[4].description});
            this.setState({sportArt1Txt: sport.data.articles[5].description});
            this.setState({sportArt1Txt: sport.data.articles[6].description});
            this.setState({sportArt1Txt: sport.data.articles[7].description});
            this.setState({sportArt1Title: sport.data.articles[0].title});
            this.setState({sportArt2Title: sport.data.articles[1].title});
            this.setState({sportArt3Title: sport.data.articles[2].title});
            this.setState({sportArt4Title: sport.data.articles[3].title});
            this.setState({sportArt5Title: sport.data.articles[4].title});
            this.setState({sportArt6Title: sport.data.articles[5].title});
            this.setState({sportArt7Title: sport.data.articles[6].title});
            this.setState({sportArt8Title: sport.data.articles[7].title});
            this.setState({sportArt1Image: sport.data.articles[0].urlToImage});
            this.setState({sportArt2Image: sport.data.articles[1].urlToImage});
            this.setState({sportArt3Image: sport.data.articles[2].urlToImage});
            this.setState({sportArt4Image: sport.data.articles[3].urlToImage});
            this.setState({sportArt5Image: sport.data.articles[4].urlToImage});
            this.setState({sportArt6Image: sport.data.articles[5].urlToImage});
            this.setState({sportArt7Image: sport.data.articles[6].urlToImage});
            this.setState({sportArt8Image: sport.data.articles[7].urlToImage});
            console.log(this.state.sportArt1Title,this.state.sportArt1Image,this.state.sportArt1Txt);
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