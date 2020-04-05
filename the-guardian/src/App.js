import React from 'react';
import './App.css';
import Header from "./components/Header";
import Sports from "./components/Sports";

class App extends React.Component {
render(){
  return (
    <div className="App">
    
     <Header />
     <Sports />
    </div>
  );
}
}

export default App;
