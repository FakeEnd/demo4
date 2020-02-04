import React, { Component } from 'react'
import { WingBlank, WhiteSpace , Flex,  Button } from 'antd-mobile';
import { Commentcard } from '../../components'
import { judgeCanteen } from '../../Requests'

export default class CommentStart extends Component {
    constructor() {
        super()
        this.state = {
            comment: [{
                status: true,
                title: '餐具干净'
            }, {
                status: true,
                title: '餐桌干净'
            }, {
                status: true,
                title: '厨房干净'
            }, {
                status: true,
                title: '食物安全'
            }, {
                status: true,
                title: '无微生物'
            }]
        }
    }

    changeStatus = (index) => {
        let newcomment = this.state.comment
        newcomment[index].status = !newcomment[index].status
        this.setState({
            comment: newcomment,
        })
    }

    comment = () => {
        let newScore = 0;
        for (let index = 0; index < 5; index++) {
            if (this.state.comment[index].status) newScore++;
        }
        judgeCanteen(newScore)
            .then((res) => {
                if (res.data.code === 1) {
                    alert(res.data.message)
                    this.props.history.goBack()
                }
                if (res.data.code === 0) {
                    this.props.history.push({
                        pathname: '/admin/comment/done',
                        state: {
                            score: newScore,
                            commentScore:res.data.data
                        }
                    })
                }
            })
    }

    render() {
        return (
            <div style={{ margin: '15px 15px' }}>
                <p style={{ color: 'green', fontSize: '20px', margin: '10px', textAlign: 'center', letterSpacing: '0.15em' }}>就餐环境评价</p>
                <WhiteSpace />
                <WingBlank style={{ backgroundColor: 'white', border: '1px solid white', borderRadius: '10px' }}>
                    <Flex
                        direction='column'
                        justify='space-between'
                    >
                        {
                            this.state.comment.map((item, index) => {
                                return <Commentcard key={index} index={index} {...item} onclick={this.changeStatus} />
                            })
                        }
                    </Flex>
                </WingBlank>
                <Button
                    onClick={this.comment}
                    style={{ margin: '15px', fontSize: '18px', color: 'green', }}
                >
                    提交
                </Button>
            </div>
        )
    }
}
