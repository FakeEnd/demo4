import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { dishShow , opinionDefaultSort } from '../../Requests'
import { Detailcard, Detailcommentcard } from '../../components'


export default class Detail extends Component {
    constructor() {
        super();
        this.state = {
            list: {},
            comment: []
        }
    }

    getDate = ( id, dishId) =>{
        dishShow(id)
            .then((response) => {
                this.setState({
                    list: response.data.data,
                })
            })
        opinionDefaultSort(dishId,1)
            .then((response) => {
                this.setState({
                    comment: response.data.data,
                })
            })
    }
    componentDidMount() {
        const { id , dishId } = this.props.match.params
        this.getDate( id ,dishId)
    }
    render() {
        return (
            <div>
                <Detailcard {...this.state.list}/>
                <div>
                    <div style={{ margin: '15px 20px 5px ', height: "2px", border: "1px solid green", width: '80%' }}></div>
                    <p style={{ margin: '5px 5px 5px 30px', fontSize: '18px', color: "green" }}>评论 ：{this.state.comment.length}条</p>

                </div>
                {this.state.comment.map(item => {
                    return (<Detailcommentcard key={item.opinionId} item={item} />)
                })}
                <Link to={`/admin/dashBoard/detailComment/${this.state.list.dishId}`}>
                    <div style={{
                        border: '1px green solid',
                        position: 'fixed',
                        bottom: '80px',
                        right: '5px',
                        height: '25px',
                        width: '60px',
                        textAlign: 'center',
                        lineHeight: '20px',
                        fontSize: '20px',
                        color: 'white',
                        backgroundColor: 'green',
                        borderRadius: ' 20px',
                    }}>评论</div>
                </Link>
            </div>
        )
    }
}
