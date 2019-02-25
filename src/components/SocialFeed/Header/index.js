import React, { Component } from 'react';
import s from './s.module.css'
import backIcon from './icons/back.svg';
import settingsIcon from './icons/settings.svg'
import I18n from '../HOC/I18n'

class Header extends Component {
    toggleSettings() {
        this.props.onToggleSettings();
    }
    render() {
        const t = this.props.t ; 
        if (this.props.inSettings) {
            return (<div className={s.settingsWrapper}>
                <img className={s.icon} src={backIcon} alt="back" onClick={this.toggleSettings.bind(this)} />
                <div className={s.settingsText}> {t('header','headerSettings')} </div>
            </div>);
        }
        else {
            return (<div className={s.wrapper}>
                <div className={s.text}> {t('header','headerMain')} </div>
                <img className={s.icon} src={settingsIcon} alt="settings" onClick={this.toggleSettings.bind(this)} />
            </div>);
        }
    }
}

export default I18n(Header);  