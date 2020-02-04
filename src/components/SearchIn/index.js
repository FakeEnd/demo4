import React, { Component } from 'react'
import { SearchBar , Flex , Icon } from 'antd-mobile';
import { withRouter } from 'react-router-dom'
@withRouter
class SearchIn extends Component {

    submitData = (value) => {
        this.props.history.push(`/admin/dashBoard/search/${value} `)
    }

    render() {
        return (
            <div className="flex-container">
                <Flex justify="between">
                    <Icon
                        type="antdiconfanhui" 
                        onClick={()=>this.props.history.goBack()}
                    />
                    <SearchBar
                        style={{
                            width: "90%",
                            backgroundColor: 'white',
                            margin: '15px 0px',
                            height: '38px',
                            borderRadius: '45px',
                            fontSize: '18px',
                            color: 'white',                        
                        }}
                        placeholder="新品上架"
                        onSubmit={this.submitData}
                        maxLength={8}                        
                    />
                </Flex>
            </div>
        )
    }
}
export default SearchIn