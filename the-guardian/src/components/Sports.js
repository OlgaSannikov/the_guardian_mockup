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
            this.setState({sportArt1Txt: sport.data.articles[14].description});
            this.setState({sportArt2Txt: sport.data.articles[2].description});
            this.setState({sportArt3Txt: sport.data.articles[3].description});
            this.setState({sportArt1Title: sport.data.articles[14].title});
            this.setState({sportArt2Title: sport.data.articles[2].title});
            this.setState({sportArt3Title: sport.data.articles[11].title});
            this.setState({sportArt4Title: sport.data.articles[4].title});
            this.setState({sportArt5Title: sport.data.articles[5].title});
            this.setState({sportArt6Title: sport.data.articles[6].title});
            this.setState({sportArt7Title: sport.data.articles[9].title});
            this.setState({sportArt8Title: sport.data.articles[10].title});
            this.setState({sportArt1Image: sport.data.articles[14].urlToImage});
            this.setState({sportArt2Image: sport.data.articles[2].urlToImage});
            this.setState({sportArt3Image: sport.data.articles[11].urlToImage});
            this.setState({sportArt4Image: sport.data.articles[4].urlToImage});
            this.setState({sportArt5Image: sport.data.articles[5].urlToImage});
            this.setState({sportArt6Image: sport.data.articles[6].urlToImage});
            this.setState({sportArt7Image: sport.data.articles[9].urlToImage});
            this.setState({sportArt8Image: sport.data.articles[10].urlToImage});

          }
          catch(e){
            console.log(e);
   }
}
    componentDidMount() {
        this.getInfo();
    }
render(){

        return (<div className="mainDivs">
<div>
    <h2>{this.state.sportArt1Title}</h2>
    <p>{this.state.sportArt1Txt}</p>
    <img src={this.state.sportArt1Image} />
    <h1>**************************************************************</h1>
</div>
<div>
    <h2>{this.state.sportArt2Title}</h2>
    <p>{this.state.sportArt2Txt}</p>
    <img src={this.state.sportArt2Image} />
    <h1>**************************************************************</h1>
</div>
<div>
    <h2>{this.state.sportArt3Title}</h2>
    <p>{this.state.sportArt3Txt}</p>
    <img src={this.state.sportArt3Image} />
    <h1>**************************************************************</h1>
</div>
<div>
    <h2>{this.state.sportArt4Title}</h2>
    <img src={this.state.sportArt4Image} />
    <h1>**************************************************************</h1>
</div>
<div>
    <h2>{this.state.sportArt5Title}</h2>

    <img src={this.state.sportArt5Image} />
    <h1>**************************************************************</h1>
</div>
<div>
    <h2>{this.state.sportArt6Title}</h2>
  
    <img src={this.state.sportArt6Image} />
    <h1>**************************************************************</h1>
</div>
<div>
    <h2>{this.state.sportArt7Title}</h2>

    <img src={this.state.sportArt7Image} />
    <h1>**************************************************************</h1>
</div>
<div>
    <h2>{this.state.sportArt8Title}</h2>

    <img src={this.state.sportArt8Image} />
    <h1>**************************************************************</h1>
</div>
        </div>)
    }
}

export default Sports;