import React, { Component } from 'react';
import Header from './Header'
import Settings from './Settings'
import List from './List'
import s from './s.module.css'
import I18n from './HOC/I18n'


class SocialFeed extends Component {
    defaultFeedUrl = 'http://api.massrelevance.com/MassRelDemo/kindle.json'
    defaultNumberPosts = 3 ;
    defaultUpdateInterval = 2; 
    constructor(props) {
        super(props) ; 
        this.state = {
            loading:false,
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
            loading:true,
            displayingSettings: !this.state.displayingSettings,
            settings:{...state}
        }) ;
        // alert('Settings have been updated') ;
    }
    loadedPosts(){
        this.setState({
            loading:false
        })
    }
    render() {
        let view ;
        const t = this.props.t ; 
        if(this.state.displayingSettings) {
            view = (<div className={s.settings}>
                <Settings {...this.state.settings} onSetDefaultSettings={this.setDefaultSettings.bind(this)} onSaveChanges={this.updateSettings.bind(this)} ></Settings>
            </div>)
        }
        else{
            view = (<div className={s.list}>
                <List {...this.state.settings} onLoadedPosts={this.loadedPosts.bind(this)}></List>
            </div>) ; 
        }
        return (<div className={s.wrapper}>
            <div className={s.header}>
                <Header inSettings={this.state.displayingSettings} onToggleSettings={this.toggleSettings.bind(this)} ></Header>
            </div>
            <div className={s.separator} />
            <div style={{display:this.state.loading?'flex':'none'}}> 
                <div className={s.loading}>
                    {t('main','loading')}
                </div>
            </div>
            {view}
        </div>)
    }
}

export default I18n(SocialFeed);  