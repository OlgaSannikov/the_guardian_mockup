import React from 'react';
import './App.css';
// import Header from "./components/Header";
import Sports from "./components/Sports";

console.log(process.env.REACT_APP_API_KEY_NEWS);
class App extends React.Component {
render(){
  return (
    <div className="App">
    
     {/* <Header /> */}
     {/* <Sports /> */}
    </div>
  );
}
}

export default App;
