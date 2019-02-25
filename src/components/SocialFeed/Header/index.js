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
        if (this.props.inSettings) {
            return (<div className={s.settingsWrapper}>
                <img className={s.icon} src={backIcon} alt="back" onClick={this.toggleSettings.bind(this)} />
                <div className={s.settingsText}> Settings </div>
            </div>) ;
        }
        else {
            return (<div className={s.wrapper}>
                <div className={s.text}> Social Feed </div>
                <img className={s.icon} src={settingsIcon} alt="settings" onClick={this.toggleSettings.bind(this)} />
            </div>) ;
        }
    }
}

export default Header;  