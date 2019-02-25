import React, { Component } from 'react';
import ListItem from './ListItem'
import s from './s.module.css'

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [], 
            settings:{...this.props}
        }
        this.getData();
    }
    
    async getData() {
        var sleep = n => new Promise(resolve => setTimeout(resolve, n));
        let condition = true;
        while (condition) {
            if(JSON.stringify(this.props) !== JSON.stringify(this.state.settings))
                this.setState({
                    settings:{ ...this.props}
                })
            let raw = await (await fetch(`${this.props.feedUrl}?limit=${this.props.numberPosts}`)).json();
            let posts = raw.map(post => {
                return {
                    author: post.user.name,
                    content: post.text,
                    date: post.created_at
                }
            });
            if (JSON.stringify(posts) !== JSON.stringify(this.state.posts)) {
                this.setState({ posts });
                this.props.onLoadedPosts() ;
            }
            await sleep(this.props.updateInterval * 1000);
        }
    }
    render() {
        const data = this.state.posts.map((post, index) => {
            return (
                <div key={index}>
                    <ListItem  {...post} ></ListItem>
                </div>
            )
        });
        return (<div>
            {data}
        </div>)
    }
}

export default List;  