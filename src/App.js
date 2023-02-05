import "./App.css";
import Header from "./components/header/header";
import Body from "./components/body/body";
import Footer from "./components/footer/footer";
import React from "react";
class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Header/>
        <Footer/>
      </div>
    );
  }
}

export default App;
