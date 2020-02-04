import React, { Component } from 'react'
import { Card, Flex, Icon } from 'antd-mobile';
import { withRouter } from 'react-router-dom'
import { dishChangeNum } from '../../Requests'
@withRouter
class Recommendcard extends Component {
    constructor() {
        super()
        this.state = { click: false }
    }

    clickDishChangeNum = (flag, dishName) => {
        dishChangeNum(flag, dishName)
            .then(res => this.setState({ click: !this.state.click }))
    }

    render() {
        //const { badNum, date, dishId, msg, name, niceNum, price, tu, window } = this.props
        const { msg, name, niceNum, price } = this.props
        return (
            <Card style={{ width: '49%', height: '240px', margin: '5px 0px' }}>
                <Card.Header
                    style={{ padding: '5px' }}
                    thumb="http://106.15.192.117:8080/picture/15.jpg"
                    thumbStyle={{ height: '125px', width: '100%' }}
                />
                <Card.Body style={{ padding: '5px' }}>
                    <Flex wrap="wrap" justify="between">
                        <p>{name}</p>
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
                            <Icon type="antdicongood" style={{ color: 'green' }} onClick={this.clickDishChangeNum.bind(this, 1, name)} />
                            :
                            <Icon type="antdicongood" onClick={this.clickDishChangeNum.bind(this, 1, name)} />
                        }


                    </div>
                </Flex>
            </Card>
        )
    }
}
export default Recommendcard