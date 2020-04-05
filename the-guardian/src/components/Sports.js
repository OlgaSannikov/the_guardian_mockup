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
            this.setState({sportArt6Title: sport.data.articles[15].title});
            this.setState({sportArt7Title: sport.data.articles[9].title});
            this.setState({sportArt8Title: sport.data.articles[10].title});
            this.setState({sportArt1Image: sport.data.articles[14].urlToImage});
            this.setState({sportArt2Image: sport.data.articles[2].urlToImage});
            this.setState({sportArt3Image: sport.data.articles[11].urlToImage});
            this.setState({sportArt4Image: sport.data.articles[4].urlToImage});
            this.setState({sportArt5Image: sport.data.articles[5].urlToImage});
            this.setState({sportArt6Image: sport.data.articles[15].urlToImage});
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

        return (<div id="mainDivSport" className="mainDivs">
<div id="leftPartSport">
    <p>Sports</p>
</div>
<div id="sportArtdiv1">
<div><p>{this.state.sportArt1Title}</p>
    <p>{this.state.sportArt1Txt}</p></div>
    
    <img id="imgSport1" src={this.state.sportArt1Image} />

</div>
<div id="sportArtdiv2">
    <img id="imgSport2" src={this.state.sportArt2Image} />
    <p>{this.state.sportArt2Title}</p>
    <p>{this.state.sportArt2Txt}</p>
   
</div>
<div id="sportArtdiv3">
    <img id="imgSport3" src={this.state.sportArt3Image} />
    <p>{this.state.sportArt3Title}</p>
    <p>{this.state.sportArt3Txt}</p>
   

</div>
<div id="sportArtdiv4">
    <img id="imgSport4" src={this.state.sportArt4Image} />
    <p>{this.state.sportArt4Title}</p>
    

</div>
<div id="sportArtdiv5">
    <img  id="imgSport5" src={this.state.sportArt5Image} />
    <p>{this.state.sportArt5Title}</p>
    
</div>
<div id="sportArtdiv6">
     <img id="imgSport6" src={this.state.sportArt6Image} />
     <p>{this.state.sportArt6Title}</p>
   

</div>
<div id="sportArtdiv7">
    <img id="imgSport7" src={this.state.sportArt7Image} />
    <p>{this.state.sportArt7Title}</p>
    
    </div>
<div id="sportArtdiv8">
    <img id="imgSport8" src={this.state.sportArt8Image} />
    <p>{this.state.sportArt8Title}</p>  
</div>
<div className="hideButton">
<button type="button">Hide</button> 
 </div>
        </div>)
    }
}

export default Sports;