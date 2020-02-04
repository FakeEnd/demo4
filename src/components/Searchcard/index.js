import React, { Component } from 'react'
import './index.less'
import { Flex, Icon } from 'antd-mobile'
import { withRouter } from 'react-router-dom'
@withRouter
class Searchcard extends Component {
    Detail = (name, dishId) => {
        this.props.history.push(`/admin/dashBoard/detail/${name}/${dishId}`)
    }
    render() {
        //const { badNum, date, dishId, msg, name, niceNum, price, tu, window } = this.props
        const { badNum, dishId, msg, name, niceNum, price, window } = this.props
        return (
            <div className="searchshitang" onClick={this.Detail.bind(this,name,dishId)}>
                <img src="http://106.15.192.117:8080/picture/15.jpg"
                    style={{
                        width: "50%",
                        height: "150px"
                    }}
                    alt="头像"
                />
                <div className="searchdiv">
                    <h1
                        style={{ margin: '10px 5px' }}
                    >{name}</h1>
                    <p className="food">价格：{price}元</p>
                    <p className="food" >主要原料：{msg}</p>
                    <p className="food">窗口：1-{window}</p>
                    <Flex justify="between">
                        <Icon type="antdiconicon-test" />
                        <div>
                            {niceNum}<Icon type="antdicongood" />
                            {badNum}<Icon type="antdiconbad" />
                        </div>
                    </Flex>
                </div>
            </div>

        )
    }
}
export default Searchcard