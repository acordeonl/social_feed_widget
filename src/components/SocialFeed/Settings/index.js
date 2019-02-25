import React, { Component } from 'react';
import s from './s.module.css'
import I18n from '../HOC/I18n'


class Settings extends Component {
    defaultFeedUrl = 'http://api.massrelevance.com/MassRelDemo/kindle.json'
    defaultNumberPosts = 3 ;
    defaultUpdateInterval = 2; 
    constructor(props) {
        super(props) ; 
        this.state = {
            feedUrl: props.feedUrl,
            numberPosts: props.numberPosts,
            updateInterval: props.updateInterval
        }
    }
    isValidNumber(event, element){
        if(event.target.value.length > 0 && !(/^\d+$/.test(event.target.value))){
            alert('input must be numeric') ;
            return false ;
        }
        let num = parseInt(event.target.value) ; 
        if(event.target.value.length > 0 && num < 1) {
            alert(`${element} must be greater than 0`) ; 
            return false ;
        }
        return true ; 
    }
    handleInputChange(event) {
        switch (event.target.id) {
            case 'numberPosts':
                if(!this.isValidNumber(event , 'Number of Posts'))
                    break ;
                let num = parseInt(event.target.value) ; 
                if(event.target.value.length > 0 && num > 200) {
                    alert(`Number of posts must be lower than 200`) ; 
                    return false ;
                }
                this.setState({
                    numberPosts:event.target.value
                })
                break;
            case 'feedUrl':
                this.setState({
                    feedUrl:event.target.value
                }) ;
                break;
            case 'updateInterval':
                if(!this.isValidNumber(event, 'Update Interval'))
                    break ;
                this.setState({
                    updateInterval:event.target.value
                }) ;
                break;
            default:
                this.setState({
                    feedUrl:this.defaultFeedUrl,
                    numberPosts:this.defaultNumberPosts,
                    updateInterval:this.defaultUpdateInterval
                }) ;
                break;
        }
    }
    saveChanges(){
        if(!(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/.test(this.state.feedUrl))){
            alert('Feed URL is invalid') ;
            return ;
        }
        if(this.state.numberPosts.length === 0) { 
            alert('Number of posts is empty')
            return ; 
        }
        if(this.state.updateInterval.length === 0) { 
            alert('Update Interval is empty')
            return ; 
        }
        this.props.onSaveChanges(this.state) ;
    }
    setDefault(){
        this.setState({
            feedUrl:this.defaultFeedUrl,
            numberPosts:this.defaultNumberPosts,
            updateInterval:this.defaultUpdateInterval
        }) ;
        this.props.onSetDefaultSettings() ;
    }
    render() {
        const t = this.props.t ; 
        return(<div className={s.wrapper}>
            <div className={s.formInput}>
                <div className={s.label}>{t('settings','feedUrl')}</div>
                <div>
                    <input id='feedUrl' className={s.input} value={this.state.feedUrl} onChange={this.handleInputChange.bind(this)}/>
                </div>
            </div>
            <div className={s.formInput}>
                <div className={s.label}> {t('settings','numberPosts')}</div>
                <div>
                    <input id='numberPosts' className={s.input} value={this.state.numberPosts} onChange={this.handleInputChange.bind(this)}/>
                </div>
            </div>
            <div className={s.formInput}>
                <div className={s.label}>{t('settings','updateInterval')}</div>
                <div>
                    <input id='updateInterval' className={s.input} value={this.state.updateInterval} onChange={this.handleInputChange.bind(this)}/>
                </div>
            </div>
            <div className={s.footer}>
                <div onClick={this.setDefault.bind(this)} className={s.saveButton}>
                    {t('settings','setDefault')}
                </div>
                <div onClick={this.saveChanges.bind(this)} className={s.saveButton}>
                    {t('settings','save')}
                </div>
            </div>
        </div>)
    }
}

export default I18n(Settings);  
