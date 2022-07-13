import React, { Component } from 'react'
import loading from './loading.gif'

export class Spinner extends Component {
  render() {
    let textAlign={textAlign:"-webkit-center"}
    return (
      <div style={textAlign}>
        <img src={loading} alt="loading" />
      </div>
    )
  }
}

export default Spinner