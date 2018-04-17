import React, { Component } from 'react'
import './App.css'
import request from 'superagent'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      items: null
    }
  }
  componentWillMount () {
    request.get('../public/fruits.json')
      .accept('application/json')
      .end((err, res) => {
        this.loadedJSON(err, res)
      })
  }
  loadedJSON (err, res) {
    if (err) {
      console.log('JSON読み込みエラー')
      return
    }
    this.setState({
      items: res.body
    })
  }
  render () {
    if (!this.state.items) {
      return <div className='App'>現在読み込み中</div>
    }
  }
}
export default App;
