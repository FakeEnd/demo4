import React, { Component } from 'react'
import './index.less'

export default class index extends Component {
    render() {
        return (
            <div className="dropdown">
                <button className="dropbtn">最新上架</button>
                <div className="dropdown-content">
                    <div onClick={() => this.props.getDate(1, 2)} >按时间排序</div>
                    <div onClick={() => this.props.getDate(1, 3)} >按热度排序</div>
                </div>
            </div>
        )
    }
}
