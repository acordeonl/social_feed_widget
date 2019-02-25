import React, { Component } from 'react';
import Header from './Header'
import Settings from './Settings'
import List from './List'
import s from './s.module.css'

class SocialFeed extends Component {
    defaultFeedUrl = 'http://api.massrelevance.com/MassRelDemo/kindle.json'
    defaultNumberPosts = 3 ;
    defaultUpdateInterval = 2; 
    constructor(props) {
        super(props) ; 
        this.state = {
            displayingSettings:false,
            settings:{
                feedUrl: props.feedUrl,
                numberPosts: props.numberPosts,
                updateInterval: props.updateInterval
            },
        }
    }
    toggleSettings(){
        this.setState({
            displayingSettings:!this.state.displayingSettings,
            settings:this.state.settings
        })
    }
    setDefaultSettings(){
        this.setState({
            settings:{
                feedUrl:this.defaultFeedUrl,
                numberPosts:this.defaultNumberPosts,
                updateInterval:this.defaultUpdateInterval
            }
        }) ;
        // alert('Settings have been updated') ;
    }
    updateSettings(state){
        this.setState({ 
            displayingSettings: !this.state.displayingSettings,
            settings:{...state}
        }) ;
        // alert('Settings have been updated') ;
    }
    render() {
        let view ;
        if(this.state.displayingSettings) {
            view = (<div className={s.settings}>
                <Settings {...this.state.settings} onSetDefaultSettings={this.setDefaultSettings.bind(this)} onSaveChanges={this.updateSettings.bind(this)} ></Settings>
            </div>)
        }
        else{
            view = (<div className={s.list}>
                <List {...this.state.settings}></List>
            </div>) ; 
        }
        return (<div className={s.wrapper}>
            <div className={s.header}>
                <Header inSettings={this.state.displayingSettings} onToggleSettings={this.toggleSettings.bind(this)} ></Header>
            </div>
            <div className={s.separator} />
            {view}
        </div>)
    }
}

export default SocialFeed;  