import React from "react";
import "../components/components.css";
import axios from 'axios';


class AroundTheWorld extends React.Component{
    constructor (props){
        super(props);
        this.state={
            aroundWorldArt1Txt: null,
            aroundWorldArt1Title: null,
            aroundWorldArt2Title: null,
            aroundWorldArt3Title: null,
            aroundWorldArt4Title: null,
            aroundWorldArt5Title: null,
            aroundWorldArt6Title: null,
            aroundWorldArt7Title: null,
            aroundWorldArt8Title: null,
            aroundWorldArt9Title: null,
            aroundWorldArt10Title: null,
            aroundWorldArt1Image: null,
            aroundWorldArt2Image: null,
            aroundWorldArt3Image: null,
            aroundWorldArt4Image: null,
            aroundWorldArt5Image: null,
            aroundWorldArt6Image: null,
            aroundWorldArt7Image: null,
            aroundWorldArt8Image: null,
            aroundWorldArt9Image: null,
            aroundWorldArt10Image: null

        }
    }
    async getInfo(){
        const key=process.env.REACT_APP_API_KEY_NEWS;
        try{
            const aroundWorld= await axios.get(`https://newsapi.org/v2/everything?q=country&pageSize=100&apiKey=${key}`);
            this.setState({aroundWorldArt1Txt: aroundWorld.data.articles[84].description});
            this.setState({aroundWorldArt1Title: aroundWorld.data.articles[84].title});
            this.setState({aroundWorldArt2Title: aroundWorld.data.articles[64].title});
            this.setState({aroundWorldArt3Title: aroundWorld.data.articles[21].title});
            this.setState({aroundWorldArt4Title: aroundWorld.data.articles[30].title});
            this.setState({aroundWorldArt5Title: aroundWorld.data.articles[31].title});
            this.setState({aroundWorldArt6Title: aroundWorld.data.articles[34].title});
            this.setState({aroundWorldArt7Title: aroundWorld.data.articles[46].title});
            this.setState({aroundWorldArt8Title: aroundWorld.data.articles[83].title});
            this.setState({aroundWorldArt9Title: aroundWorld.data.articles[51].title});
            this.setState({aroundWorldArt10Title: aroundWorld.data.articles[52].title});
            this.setState({aroundWorldArt1Image: aroundWorld.data.articles[84].urlToImage});
            this.setState({aroundWorldArt2Image: aroundWorld.data.articles[64].urlToImage});
            this.setState({aroundWorldArt3Image: aroundWorld.data.articles[21].urlToImage});
            this.setState({aroundWorldArt4Image: aroundWorld.data.articles[30].urlToImage});
            this.setState({aroundWorldArt5Image: aroundWorld.data.articles[31].urlToImage});
            this.setState({aroundWorldArt6Image: aroundWorld.data.articles[34].urlToImage});
            this.setState({aroundWorldArt7Image: aroundWorld.data.articles[46].urlToImage});
            this.setState({aroundWorldArt8Image: aroundWorld.data.articles[83].urlToImage});
            this.setState({aroundWorldArt9Image: aroundWorld.data.articles[51].urlToImage});
            this.setState({aroundWorldArt10Image: aroundWorld.data.articles[52].urlToImage});

          }
          catch(e){
            console.log(e);
   }
}
    componentDidMount() {
        this.getInfo();
    }
render(){

    return (
            <div className="mainDivs">
                <div>
                    <h2>{this.state.aroundWorldArt1Title}</h2>
                    <p>{this.state.aroundWorldArt1Txt}</p>
                    <img src={this.state.aroundWorldArt1Image} />
                </div>
                <div>
                    <h2>{this.state.aroundWorldArt2Title}</h2>
                    <img src={this.state.aroundWorldArt2Image} />
                </div>
                <div>
                    <h2>{this.state.aroundWorldArt3Title}</h2>
                    <img src={this.state.aroundWorldArt3Image} />
                </div>
                <div>
                    <h2>{this.state.aroundWorldArt4Title}</h2>
                    <img src={this.state.aroundWorldArt4Image} />
                </div>
                <div>
                    <h2>{this.state.aroundWorldArt5Title}</h2>
                    <img src={this.state.aroundWorldArt5Image} />
                </div>
                <div>
                    <h2>{this.state.aroundWorldArt6Title}</h2>
                    <img src={this.state.aroundWorldArt6Image} />
                </div>
                <div>
                    <h2>{this.state.aroundWorldArt7Title}</h2>
                    <img src={this.state.aroundWorldArt7Image} />
                </div>
                <div>
                    <h2>{this.state.aroundWorldArt8Title}</h2>
                    <img src={this.state.aroundWorldArt8Image} />
                </div>
                <div>
                    <h2>{this.state.aroundWorldArt9Title}</h2>
                    <img src={this.state.aroundWorldArt9Image} />
                </div>
                <div>
                    <h2>{this.state.aroundWorldArt10Title}</h2>
                    <img src={this.state.aroundWorldArt10Image} />
                </div>
            </div>)
    }
}

export default AroundTheWorld;