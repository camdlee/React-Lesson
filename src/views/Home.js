import React, { Component } from 'react'

export default class Home extends Component {

  componentDidMount = () => {
    console.log('Component did mount')
  }

  render() {
    console.log('I am being rendered')
    return (
      <div>
        <h1>This is Thieves 110 Homepage</h1>
        <h2>{this.props.name}</h2>
        <h2>{this.props.age}</h2>
        <button onClick={this.props.addOne}>Happy Birthday!</button>
      </div>
    )
  }
}

