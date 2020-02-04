import React, { Component } from 'react'
import { WingBlank } from 'antd-mobile';

export default class Lastview extends Component {
    componentDidMount() {
        window.addEventListener('scroll', () => console.log("ssssss"))
    }
    render() {
        return (
            <WingBlank>
                <div style={{ textAlign: 'center', padding: '10px 0', color: '#999' }}>
                    <span>加载更多</span>
                </div>
            </WingBlank>

        )
    }
}

