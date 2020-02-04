import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { jianSort } from '../../Requests'
import { Recommendcard } from '../../components'
import { Flex, PullToRefresh } from 'antd-mobile';

export default class Recommend extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            page: 1,
            flag: 1,
            isLoadingMore: true,
            refreshing: false
        };
    }

    getDate = (page, flag) => {
        this.setState({
            refreshing: true
        })
        jianSort(page, flag)
            .then((response) => {
                if (response.data.code === 0) {
                    this.setState({
                        list: this.state.list.concat(response.data.data),
                        page: this.state.page + 1,
                        refreshing: false
                    })
                    return
                }
                this.setState({
                    isLoadingMore: false,
                    refreshing: false
                })
            })
    }

    componentDidMount() {
        this.getDate(this.state.page, this.state.flag)
    }

    render() {
        return (
            <div>
                <div style={{ padding: '0px', margin: '0px 13px' }}>
                    <div className="flex-container" style={{ margin: '0 0' }} >
                        <Flex wrap="wrap" justify="between">
                            {this.state.list.map((item, index) => {
                                return (
                                    <Recommendcard key={index} {...item} />
                                )
                            })}
                        </Flex>
                    </div>
                </div>
                <PullToRefresh
                    direction="up"
                    distanceToRefresh={25}
                    refreshing={this.state.refreshing}
                    onRefresh={() => this.getDate(this.state.page, this.state.flag)}
                    damping={50}
                >
                    {
                        this.state.isLoadingMore
                            ?
                            <p style={{ textAlign: 'center', margin: '15px auto', color: 'green', fontSize: '14px' }}>点击上拉加载更多....</p>
                            :
                            <p style={{ textAlign: 'center', margin: '5px auto', color: 'green', fontSize: '14px' }}>~~~已经到底啦~~~</p>
                    }
                </PullToRefresh>
                <div>
                    <Link to='/admin/recommend/add'>
                        <div style={{
                            border: '1px green solid',
                            position: 'fixed',
                            bottom: '80px',
                            right: '5px',
                            height: '40px',
                            width: '40px',
                            textAlign: 'center',
                            lineHeight: '30px',
                            fontSize: '30px',
                            color: 'white',
                            backgroundColor: 'green',
                            borderRadius: ' 20px',
                        }}>+</div>
                    </Link>
                </div>
            </div>
        )
    }
}
