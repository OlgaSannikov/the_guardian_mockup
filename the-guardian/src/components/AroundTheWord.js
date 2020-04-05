import React from "react";
import "../components/components.css";
import axios from 'axios';


class AroundTheWord extends React.Component{
    constructor (props){
        super(props);
        this.state={
            opinionArt1Txt: null,
            opinionArt2Txt: null,
            opinionArt1Title: null,
            opinionArt2Title: null,
            opinionArt3Title: null,
            opinionArt4Title: null,
            opinionArt5Title: null,
            opinionArt6Title: null,
            opinionArt1Image: null,
            opinionArt2Image: null,
            opinionArt3Image: null,
            opinionArt4Image: null,
            opinionArt5Image: null,
            opinionArt6Image: null,

        }
    }
    async getInfo(){
        const key=process.env.REACT_APP_API_KEY_NEWS;
        try{
            const inFocus= await axios.get(`http://newsapi.org/v2/top-headlines?country=us&category=inFocuss&apiKey=${key}`);
            this.setState({inFocusArt1Txt: inFocus.data.articles[1].description});
            this.setState({inFocusArt2Txt: inFocus.data.articles[2].description});
            this.setState({inFocusArt3Txt: inFocus.data.articles[3].description});
            this.setState({inFocusArt1Title: inFocus.data.articles[1].title});
            this.setState({inFocusArt2Title: inFocus.data.articles[2].title});
            this.setState({inFocusArt3Title: inFocus.data.articles[3].title});
            this.setState({inFocusArt4Title: inFocus.data.articles[4].title});
            this.setState({inFocusArt5Title: inFocus.data.articles[5].title});
            this.setState({inFocusArt6Title: inFocus.data.articles[6].title});
            this.setState({inFocusArt7Title: inFocus.data.articles[9].title});
            this.setState({inFocusArt8Title: inFocus.data.articles[10].title});
            this.setState({inFocusArt1Image: inFocus.data.articles[1].urlToImage});
            this.setState({inFocusArt2Image: inFocus.data.articles[2].urlToImage});
            this.setState({inFocusArt3Image: inFocus.data.articles[3].urlToImage});
            this.setState({inFocusArt4Image: inFocus.data.articles[4].urlToImage});
            this.setState({inFocusArt5Image: inFocus.data.articles[5].urlToImage});
            this.setState({inFocusArt6Image: inFocus.data.articles[6].urlToImage});
            this.setState({inFocusArt7Image: inFocus.data.articles[9].urlToImage});
            this.setState({inFocusArt8Image: inFocus.data.articles[10].urlToImage});

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
<div>
    <h2>{this.state.inFocusArt1Title}</h2>
    <p>{this.state.inFocusArt1Txt}</p>
    <img src={this.state.inFocusArt1Image} />
</div>
<div>
    <h2>{this.state.inFocusArt2Title}</h2>
    <p>{this.state.inFocusArt2Txt}</p>
    <img src={this.state.inFocusArt2Image} />
</div>
<div>
    <h2>{this.state.inFocusArt3Title}</h2>
    <p>{this.state.inFocusArt3Txt}</p>
    <img src={this.state.inFocusArt3Image} />
</div>
<div>
    <h2>{this.state.inFocusArt4Title}</h2>
    <img src={this.state.inFocusArt4Image} />
</div>
<div>
    <h2>{this.state.inFocusArt5Title}</h2>

    <img src={this.state.inFocusArt5Image} />
</div>
<div>
    <h2>{this.state.inFocusArt6Title}</h2>
  
    <img src={this.state.inFocusArt6Image} />
</div>
<div>
    <h2>{this.state.inFocusArt7Title}</h2>

    <img src={this.state.inFocusArt7Image} />
</div>
<div>
    <h2>{this.state.inFocusArt8Title}</h2>

    <img src={this.state.inFocusArt8Image} />
</div>
        </div>)
    }
}

export default AroundTheWord;