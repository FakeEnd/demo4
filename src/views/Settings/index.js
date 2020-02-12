import React, { Component } from 'react'
import { jianOfUser } from '../../Requests'
import { Mycard , My} from '../../components'
export default class Settings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
        }
    }
    getDate = () => {
        jianOfUser()
            .then((response) => {
                this.setState({
                    list: response.data.data
                })
            })

    }
    componentDidMount() {
        this.getDate()
    }
    render() {
        return (
            <div >
                <My />
                <div>
                    <div style={{ margin: '15px 20px 5px ', height: "2px", border: "1px solid green", width: '85%' }}></div>
                    <p style={{ margin: '5px 5px 5px 30px', fontSize: '18px', color: "green" }}>我推荐的菜品</p>

                </div>
                {this.state.list.map((item) => {
                    return (
                        <Mycard key={item.jianId} {...item} />
                    )
                })}
                <p style={{textAlign:'center',marginTop:'30px',color:'green',fontSize:'18px'}}>~~~已经到底啦~~~</p>
            </div>
        )
    }
}
