import React, { Component } from 'react'
import {  Icon } from 'antd-mobile'
import './index.less'
export default class Mycard extends Component {
    render() {
        const { msg, name, niceNum } = this.props
        return (
            <div className="myshitang" >
                <img src="http://106.15.192.117:8080/picture/15.jpg"
                    style={{
                        width: "50%",
                        height: "125px"
                    }}
                    alt="头像"
                />
                <div className="mydiv">
                <h3
                    style={{ margin: '10px 5px' }}
                >{name}</h3>
                <p className="mycard" >主要原料：{msg}</p>
                <p><Icon type="antdicongood" />{niceNum}</p>
                </div>
            </div>

        )
    }
}
