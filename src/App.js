import React, { Component } from 'react';
import "./Assets/scss/default.css";
import Header from './Components/Header/header'
import Footer from './Components/Footer/footer'
import Homepage from './Components/Pages/homePage'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
      <Homepage />
      <Footer />
      </div>
    );
  }
}

export default App;
