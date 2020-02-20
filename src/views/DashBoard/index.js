import React, { PureComponent } from 'react'
import { dishSort, dishChangeNum } from '../../Requests'
import { Cart, Dashboardcard, Downbutton } from '../../components'
import { Flex, PullToRefresh } from 'antd-mobile';

export default class DashBoard extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            page: 1,
            flag: 1,
            flagchange:1,
            isLoadingMore: true,
            refreshing: false
        };
    }

    getDate = (page, flag) => {
        this.setState({
            page,
            flag
        })
        this.setState({
            refreshing: true
        })
        if(this.state.flag===flag){
            dishSort(page, flag)
            .then((response) => {
                if (response.data.data.length > 0) {
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
        }else{
            this.setState({
                flagchange: flag,
                isLoadingMore: true,
            })
            dishSort(page, flag)
            .then((response) => {
                if (response.data.data.length > 0) {
                    this.setState({
                        list: response.data.data,
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
        
    }
    dishChangeNumWay = (flag, name) => {
        dishChangeNum(flag, name)
        .then(()=>this.getDate(this.state.page, this.state.flag))
    }
    componentDidMount = () => {
        this.getDate(this.state.page, this.state.flag)
    }

    render() {
        return (
            <div>
                <Cart />
                <Downbutton getDate={this.getDate}  />
                <div style={{ padding: '0px', margin: '0px 13px 0px' }}>
                    <div className="flex-container" style={{ margin: '0 0' }} >
                        <Flex wrap="wrap" justify="between">
                            {
                                this.state.list.map((item, index) => {
                                    return (
                                        <Dashboardcard
                                            key={index}
                                            {...item}
                                            dishChangeNum={this.dishChangeNumWay}
                                            isDashBoard={true}
                                        />
                                    )
                                })
                            }
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
            </div>
        )
    }
}
