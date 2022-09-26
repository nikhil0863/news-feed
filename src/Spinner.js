import React, { Component } from 'react'
import loading from './loading.gif'

const Spinner=()=> {
    
    let textAlign={textAlign:"-webkit-center"}
    return (
      <div style={textAlign}>
        <img src={loading} alt="loading" />
      </div>
    )
  
}

export default Spinner