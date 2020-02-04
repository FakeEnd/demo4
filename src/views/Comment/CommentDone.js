import React, { Component } from 'react'
import { Icon } from 'antd-mobile'
import { Commentdonecard } from '../../components'

export default class CommentDone extends Component {
    componentDidMount(){
        if(this.props.location.state===undefined){
            this.props.history.goBack()
        }
    }
    render() {
        const { score , commentScore } = this.props.location.state
        return (
            <div>
                <p style={{ textAlign: 'center', margin: '15px auto', fontSize: '20px', color: 'green' }}>
                    <Icon type='antdiconwancheng' color='green' size='lg' style={{ margin: '-10px ' }} />
                    <span style={{ margin: '-30px 20px', letterSpacing: '2px' }} >评价完成 !</span>
                </p>
                <p style={{ textAlign: 'center', margin: ' 20px', fontSize: '12px', color: '#939191' }}>
                    感谢您的反馈，我们会继续努力为您提供更好的服务体验
                </p>
                <Commentdonecard score={score} commentScore={commentScore} />
            </div>
        )
    }
}
