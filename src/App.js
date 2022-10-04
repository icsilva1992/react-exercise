import logo from './logo.svg';
import './App.css';
import Dog from './Dog';
import React, { Component } from 'react';
import axios from 'axios'

export default class App extends Component {

  state = {
    allBreeds: []
  }

  getAllBreeds() {
    axios.get('https://dog.ceo/api/breeds/list/all').then(res => this.setState({allBreeds: Object.keys(res.data.message)}))
  }

  componentDidMount(){
    this.getAllBreeds();
  }

  render() { 
    return(
      <div className="App">
        {this.state.allBreeds.slice(0, 10).map((breed, i) => 
          <Dog key={i} breed={breed} />
        )}
      </div>
    );
  }
}
