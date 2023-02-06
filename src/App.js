import "./App.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import BackToTop from 'react-back-to-top';
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
