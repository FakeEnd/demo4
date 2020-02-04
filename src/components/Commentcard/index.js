import React, { Component } from 'react'
import './index.less'
import { Icon } from 'antd-mobile';
export default class Comment extends Component {
    render() {
        return (
            <div className="commentdetail" >
                {
                    this.props.status
                    ?
                    <Icon className="CommentIcon" size="md" color="green" type="antdiconxingxing1" onClick={this.props.onclick.bind(this,this.props.index)} />
                    :
                    <Icon className="CommentIcon" size="md" color="green" type="antdiconxingxing" onClick={this.props.onclick.bind(this,this.props.index)} />
                }
                
            <div className="commentcontent" onClick={this.props.onclick.bind(this,this.props.index)} >{this.props.title}</div>
            </div>

        )
    }
}
