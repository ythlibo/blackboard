import React, {Component} from 'react'

import ReactDOM from 'react-dom'

// 使用ES6 Class声明一个组件
class App extends Component {
  
  static defaultProps = {
  	color : 'blue'  
  }
  
  render(){
    
    const {text, color} = this.props
  	return <h1 style={{color}}>{text}</h1>  
  }
}


const appEle = document.getElementById("app")

const app = <App text="hello world"   />
ReactDOM.render( app, appEle)











