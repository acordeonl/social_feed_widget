import React, { Component } from 'react';
import s from './s.module.css'

class ListItem extends Component {
    contentMaxLength = 75 ;
    authorMaxLength = 36 ;
    constructor(props) {
        super(props) ; 
        let author = props.author ;
        let summary = props.content ;
        let fullContent = props.content ;
        let displayViewMore = false ;
        if(props.content.length > this.contentMaxLength) {
            summary = fullContent.slice(0, this.contentMaxLength)+' ... ' ;
            displayViewMore = true ;
        }  
        if(props.author.length > this.authorMaxLength) 
            author = author.slice(0, this.authorMaxLength)+' ... ' ;
        this.state = {
            author,
            summary, 
            fullContent,
            displayViewMore
        } ;
    }
    displayFullContent(){
        this.setState({
            summary:this.state.fullContent,
            displayViewMore:false
        })
    }
    formatDate(date){
        var d = new Date(date);
        return d.toLocaleString("en-GB").slice(0,-3).replace(',','') ; 
    }
    render() {
        
        return(<div className={s.wrapper}>
            <div className={s.author}>
                {this.state.author}
            </div>
            <div className={s.content}>
                {this.state.summary}
                <div style={{display:this.state.displayViewMore?'inline-block':'none'}}> 
                    <div onClick={this.displayFullContent.bind(this)} className={s.viewMore}>
                        More 
                    </div>
                </div>
            </div>
            <div className={s.footer}>
                {this.formatDate(this.props.date)}
            </div>
        </div>)
    }
}

export default ListItem;  