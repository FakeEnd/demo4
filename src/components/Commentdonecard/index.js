import React, { Component } from 'react'
import { Flex, Icon, Button } from 'antd-mobile';
import { WingBlank, WhiteSpace } from 'antd-mobile';
import { withRouter } from 'react-router-dom'

@withRouter

class Commentdonecard extends Component {

    starRender = () => {
        let star = [];
        for (let i = 0; i < this.props.score; i++) {
            star.push(<Icon key={i} style={{ margin: '0px 5px' }} className="CommentIcon" size="md" color="green" type="antdiconxingxing1" />)
        }
        for (let i = 0; i < 5-this.props.score; i++) {
            star.push(<Icon key={5-i} style={{ margin: '0px 5px' }} className="CommentIcon" size="md" color="green" type="antdiconxingxing" />)
        }
        return star
    }

    pushBackToComment = () => {
        this.props.history.push('/admin/comment')
    }

    render() {
        return (
            <div style={{ margin: '15px 15px' }}>
                <WhiteSpace />
                <WingBlank style={{ backgroundColor: 'white', border: '1px solid white', borderRadius: '10px', height: '130px' }}>
                    <Flex
                        direction='column'
                        justify='space-between'
                    >
                        <p style={{ margin: '10px 0px 15px', fontSize: '18px', color: 'green', }} >我的评分</p>
                        <div>
                            {
                                this.starRender()
                            }
                        </div>
                        <p style={{ margin: '10px 0px 5px', fontSize: '14px', color: 'green' }} >{this.props.score}.0分</p>
                    </Flex>
                    <p style={{ margin: '0px 20px', fontSize: '14px', float: 'right' }} >平均分{this.props.commentScore.toFixed(2)}分</p>
                </WingBlank>
                <Button
                    onClick={this.pushBackToComment}
                    style={{ textAlign: 'center', margin: ' 15px', fontSize: '16px', color: 'green', height: '40px', width: '100px' }}
                >
                    返回
                </Button>
            </div>
        )
    }
}
export default Commentdonecard