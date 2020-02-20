import React, { Component } from 'react'
import './index.less'
//import { dishChangeNum } from '../../Requests'
import { Flex, Icon } from 'antd-mobile'
export default class Detailcard extends Component {
    render() {
        //const { badNum, date, dishId, msg, name, niceNum, price, tu, window } = this.props
        const { badNum, msg, name, niceNum, price, window, dishChangeNum, zanclick, chaclick } = this.props
        return (
            <div>
                <div className="searchshitang">
                    <img src="http://106.15.192.117:8080/picture/15.jpg"
                        style={{
                            width: "50%",
                            height: "150px"
                        }}
                        alt="头像"
                    />
                    <div className="searchdiv">
                        <h1>{name}</h1>
                        <p className="Detailcard">价格：{price}元</p>
                        <p className="Detailcard">窗口：1-{window}</p>
                        <p className="Detailcard" >主要原料：{msg}</p>


                    </div>
                </div>
                <Flex justify="center">
                    {
                        zanclick
                            ?
                            <div className='DetailIcon'>
                                <Icon color='green' type="antdicongood" onClick={() => dishChangeNum(1, name)} />
                                {niceNum}人
                            </div>
                            :
                            <div className='DetailIcon'>
                                <Icon type="antdicongood" onClick={() => dishChangeNum(1, name)} />
                                {niceNum}人
                            </div>
                    }
                    {
                        chaclick
                            ?
                            <div className='DetailIcon'>
                                <Icon type="antdiconbad" color='red' onClick={() => dishChangeNum(0, name)} />
                                {badNum}人
                            </div>
                            :
                            <div className='DetailIcon'>
                                <Icon type="antdiconbad" onClick={() => dishChangeNum(0, name)} />
                                {badNum}人
                            </div>
                    }
                </Flex>
            </div>
        )
    }
}
