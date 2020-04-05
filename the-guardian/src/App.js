import React from 'react';
import './App.css';
import Header from "./components/Header";
import Sports from "./components/Sports";
import Culture from "./components/Culture"

class App extends React.Component {
render(){
  return (
    <div className="App">
    
     <Header />
     <Sports />
     {/* <Culture /> */}
    </div>
  );
}
}

export default App;
