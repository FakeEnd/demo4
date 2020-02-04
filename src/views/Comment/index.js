import React, { Component } from 'react'
import { Flex, Button , WingBlank, WhiteSpace } from 'antd-mobile';

export default class Comment extends Component {
    pushCommentStart = () => {
        this.props.history.push("/admin/comment/start")
    }
    render() {
        return (
            
                <div style={{ margin: '15px 15px' }}>
                <p style={{ color: 'green', fontSize: '20px', margin: '30px', textAlign: 'center', letterSpacing: '0.15em' }}>就餐环境评价</p>
                <WhiteSpace />
                <WingBlank style={{ backgroundColor: 'white', border: '1px solid white', borderRadius: '10px',height:'180px' }}>
                    <Flex
                        direction='column'
                        justify='space-between'
                    >
                        <p style={{ margin: '30px 0px',fontSize: '18px', color: 'green', }} >当月评分</p>
                        <p style={{ margin: '40px 0px',fontSize: '14px', color: 'green' }} >4.3分</p>
                    </Flex>
                </WingBlank>
                <Button
                    onClick={this.pushCommentStart}
                    style={{ margin: '30px 15px', fontSize: '18px', color: 'green', }}
                >
                    我要评论
                </Button>
            </div>
            
        )
    }
}
