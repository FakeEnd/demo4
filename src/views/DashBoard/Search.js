import React, { PureComponent } from 'react'
import { dishSelectByKeyWord } from '../../Requests'
import { Searchcard } from '../../components'

export default class Search extends PureComponent {
    constructor() {
        super()
        this.state = {
            list: [],
            message: ''
        }
    }

    getdate = (keyword) => {
        dishSelectByKeyWord(keyword)
            .then((response) => {
                this.setState({
                    list: response.data.data,
                    message: response.data.message
                })
            })
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.id !== prevProps.match.params.id) {
            this.getdate(this.props.match.params.id)
        }
    }

    componentDidMount() {
        this.getdate(this.props.match.params.id)
    }

    render() {
        return (
            <div>
                {
                    this.state.list.map((item)=><Searchcard key={item.dishId} {...item} />)
                }
                <p style={{textAlign:'center',marginTop:'20px',color:'green',fontSize:'20px'}}>~~~已经到底啦~~~</p>
            </div>
        )
    }
}