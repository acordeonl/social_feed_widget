import React, { Component } from 'react';
import SocialFeed from './components/SocialFeed'
import s from './app.module.css';
import './App.css'

class App extends Component {
  render() {
    return (<div className={s.feed}>
        <SocialFeed feedUrl='http://api.massrelevance.com/MassRelDemo/kindle.json' numberPosts='3' updateInterval='2'></SocialFeed>
    </div>) ;
  }
}

export default App;
