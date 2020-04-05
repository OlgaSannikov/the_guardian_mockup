import React from "react";
import "../components/components.css";
import axios from 'axios';


class Culture extends React.Component{
    constructor (props){
        super(props);
        this.state={
            cultureArt1Title: null,
            cultureArt2Title: null,
            cultureArt3Title: null,
            cultureArt4Title: null,
            cultureArt5Title: null,
            cultureArt1Image: null,
            cultureArt2Image: null,
            cultureArt3Image: null,
            cultureArt4Image: null,
            cultureArt5Image: null

        }
    }
    async getInfo(){
        const key=process.env.REACT_APP_API_KEY_NEWS;
        try{
            const culture= await axios.get(`http://newsapi.org/v2/everything?q=culture&pageSize=70&sortBy=popularity&apiKey=${key}`);
            this.setState({cultureArt1Title: culture.data.articles[0].title});
            this.setState({cultureArt2Title: culture.data.articles[51].title});
            this.setState({cultureArt3Title: culture.data.articles[2].title});
            this.setState({cultureArt4Title: culture.data.articles[8].title});
            this.setState({cultureArt5Title: culture.data.articles[15].title});
            this.setState({cultureArt1Image: culture.data.articles[0].urlToImage});
            this.setState({cultureArt2Image: culture.data.articles[51].urlToImage});
            this.setState({cultureArt3Image: culture.data.articles[2].urlToImage});
            this.setState({cultureArt4Image: culture.data.articles[8].urlToImage});
            this.setState({cultureArt5Image: culture.data.articles[15].urlToImage});

          }
          catch(e){
            console.log(e);
   }
}
    componentDidMount() {
        this.getInfo();
    }
render(){

        return (<div id="cultureMainDiv" className="mainDivs">
        <div id="leftPartCulture">
    <p>Culture</p>
</div>
<div id="cultureArtdiv1">
    <img id="imgCulture1" src={this.state.cultureArt1Image} />
    <p>{this.state.cultureArt1Title}</p>
    

</div>
<div id="cultureArtdiv2">
    <img id="imgCulture2" src={this.state.cultureArt2Image} />
    <p>{this.state.cultureArt2Title}</p>
    

</div>
<div id="cultureArtdiv3">
   <img id="imgCulture3" src={this.state.cultureArt3Image} />
    <p>{this.state.cultureArt3Title}</p>
    
</div>
<div id="cultureArtdiv4">
    <img id="imgCulture4" src={this.state.cultureArt4Image} />
    <p>{this.state.cultureArt4Title}</p>
    
</div>
<div id="cultureArtdiv5">
    <img id="imgCulture2" src={this.state.cultureArt5Image} />
    <p>{this.state.cultureArt5Title}</p>
    
</div>
<div className="hideButton">
<button type="button">Hide</button> 
 </div>

        </div>)
    }
}

export default Culture;