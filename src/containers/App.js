import React, { Component } from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import RouterView from '../routers/index'
import Head from '../components/Head'
export default class App extends Component {
  render() {
    return (
      <div className='wrap'>
        <Head></Head>
        <Router>
          <RouterView></RouterView>
        </Router>
      </div>
    )
  }
}
