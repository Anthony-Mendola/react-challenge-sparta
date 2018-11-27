import React, { Component } from 'react';
import "./Assets/scss/default.css";
import Header from './Components/Header/header'
import Footer from './Components/Footer/footer'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
      <Footer />
      </div>
    );
  }
}

export default App;
