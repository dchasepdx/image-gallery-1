import React, { Component } from 'react';
import './App.css';
import View from './components/View.js'
import imageData from './imagesApi';

export default class App extends Component {

  constructor() {
    super();

    this.state = {
      images: [],
    }

  }

  componentDidMount() {
    imageData.get()
      .then(images => {
        this.setState({ images })
      });
  }


  render() {
    const { images } = this.state;
    return (
        <div>
          <View classname="view-wrapper" images={images} />
        </div>
  
    );
  }
}

