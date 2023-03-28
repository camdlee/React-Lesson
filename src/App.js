import './App.css';
import Nav from './components/Nav'
import Home from './views/Home';
import Pokemon from './views/Pokemon';
import { Routes, Route, BrowserRouter } from 'react-router-dom'

import React, { Component } from 'react'
import Feed from './views/Feed';

export default class App extends Component {
  constructor(){
    super()
    this.state = {
      name: 'dylan',
      age: 101
    }
  }

  addOne = () => {
    console.log('button clicked')
    this.setState({
      age: this.state.age + 1
    })
  }

  render(){
  return (
    <BrowserRouter>
      <div>
        <Nav/>
        <Routes>
          <Route path='/' element={<Home age={this.state.age} addOne={this.addOne} name={this.state.name}/>}/>
          <Route path='/pokemon' element={<Pokemon/>}/>
          <Route path='/feed' element={<Feed/>}/>
        </Routes>
      </div>
    </BrowserRouter>
    );
  }

}

