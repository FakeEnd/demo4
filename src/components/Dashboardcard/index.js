import React, { Component } from 'react'
import { Card, Flex, Icon } from 'antd-mobile';
import { withRouter } from 'react-router-dom'
//import { dishChangeNum } from '../../Requests'
@withRouter
class Dashboardcard extends Component {
    constructor() {
        super()
        this.state = { click: false }
    }

    // clickDishChangeNum = (flag ,dishName) => {
    //     dishChangeNum(flag ,dishName)
    //         .then(res => this.setState({click:!this.state.click}))
    // }

    Detail = (name, dishId) => {
        this.props.history.push(`/admin/dashBoard/detail/${name}/${dishId}`)
    }
    render() {
        //const { badNum, date, dishId, msg, name, niceNum, price, tu, window , dishChangeNum} = this.props
        const { badNum,  dishId, msg, name, niceNum, price, window } = this.props
        //onClick={()=>dishChangeNum(1, name)}
        return (
            <Card style={{ width: '49%', height: '240px', margin: '5px 0px ',float:'left' }}>
                <Card.Header
                    style={{ padding: '5px' }}
                    thumb="http://106.15.192.117:8080/picture/15.jpg"
                    thumbStyle={{ height: '125px', width: '100%' }}
                    onClick={this.Detail.bind(this, name, dishId)}
                />
                <Card.Body style={{ padding: '5px' }} onClick={this.Detail.bind(this, name, dishId)}>
                    <Flex wrap="wrap" justify="between">
                        <p>{name}</p>
                        {this.props.isDashBoard
                            ?
                            <p style={{ fontSize: '14px' }} >窗口：1-{window}</p>
                            :
                            ''}
                    </Flex>
                    <br></br>
                    <div style={{ fontSize: '12px' }}>
                        <p>价格：{price}元</p>
                        <p
                            style={{
                                overflow: "hidden",
                                whiteSpace: "nowrap",
                                textOverflow: "ellipsis"
                            }}
                        >主要原料：{msg}</p>
                    </div>
                    <br></br>
                </Card.Body>
                <Flex justify="between">
                    <Icon type="antdiconicon-test" />
                    <div>
                        {niceNum}
                        {this.state.click
                            ?
                            <Icon type="antdicongood" style={{ color: 'green' }} />
                            :
                            <Icon type="antdicongood"  />
                        }

                        {badNum}
                        {this.props.isDashBoard
                            ?
                            <Icon type="antdiconbad"  />
                            :
                            ''}
                    </div>
                </Flex>
            </Card>
        )
    }
}
export default Dashboardcard