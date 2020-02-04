import React, { Component } from 'react'
import { opinionInsert } from '../../Requests'
import { List, TextareaItem, WingBlank, WhiteSpace , Button } from 'antd-mobile';

export default class DetailComment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishId: this.props.match.params.id,
            msg: "",
        }
    }
    changValue = (value) =>{
        this.setState({
            msg:value
        })
    }

    render() {
        const {msg ,dishId} = this.state
        return (
            <div style={{ padding: '15px 0' }}>               
                <WingBlank>
                    <List renderHeader={() => <p style={{color:'green',fontSize:'18px',lineHeight:'18px',marginBottom:'15px'}}>该菜谱的评论</p>}>
                        <TextareaItem
                            //title='评论区'
                            name='评论区'
                            rows={7}
                            placeholder='我的评论...'
                            count={100}
                            onChange={this.changValue}
                        />
                    </List>
                    <WhiteSpace  size='lg'/>
                    <WhiteSpace  size='lg'/>
                    <Button                      
                    onClick={opinionInsert.bind(this,dishId,msg)} 
                    style={{ marginRight: '4px',fontSize:'18px',color:'green' }}>
                        提交
                        </Button>
                </WingBlank>
            </div>

        )
    }

}
