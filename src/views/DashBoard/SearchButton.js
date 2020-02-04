import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
//import { message } from '_antd@3.26.0@antd'

//这个页面已经放弃，所以可以勿看
export default class SearchButton extends Component {
    constructor() {
        super()
        this.state = {
            list: [],
            message: ''
        }
    }
    getdate = (id) => {
        var url = `http://106.15.192.117:8080/canteen/dishSelectByWindow?window=${id}&page=${id}`;

        axios.post(url)
            .then((response) => {
                console.log(response.data);
                // this.setState({
                //     list: response.data.obj
                // })
                this.setState({
                    message: response.data.message,
                    list: response.data.data
                })
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    componentDidMount() {

        this.getdate(this.props.match.params.id)
    }
    render() {
        return (
            <div >


                <p
                    style={{
                        marginTop: '20px',
                        textAlign: 'center',
                        fontsize: '24px',
                        color: 'green'
                    }}
                >{this.state.message}</p>
                <div className="all" style={{
                    margin: '0px',
                    padding: '0px'
                }}>

                    {this.state.list.map((value) => {
                        return (
                            <Link to={`/admin/dashBoard/detail/${value.name}/${value.dishId}`}>
                                <div className="item" key={value.name} style={{
                                    border: "1px solid #DBDBDB",
                                    position: 'relative',
                                    borderRadius: '10px',
                                    display: 'flex',
                                    flexDirection: 'row',
                                    margin: '20px',
                                    backgroundColor: 'white'
                                }}>
                                    <div className="imgbox" style={{

                                        width: '150px',
                                        height: '150px',
                                        backgroundImage: `url(${value.tu})`,
                                        backgroundRepeat: 'no-repeat',
                                        backgroundSize: '100% 100%',
                                    }}>

                                    </div>
                                    <div className="note"
                                        style={{
                                            lineHeight: '20px'
                                        }}>
                                        <h1 className="title" style={{
                                            fontFamily: 'Georgia, serif',
                                            fontSize: '18px',
                                            color: 'black'
                                        }}> {value.name}</h1>
                                        <p className="price" style={{
                                            fontSize: '15px',
                                            color: 'black'
                                        }}>&nbsp;  主要食材：{value.msg}</p>
                                        <br></br>
                                        <br></br>
                                        <div
                                            style={{
                                                display: 'flex'
                                            }}
                                        >
                                            <div
                                                style={{
                                                    backgroundImage: "url(" + require("../../assests/images/pinglun.png") + ")",
                                                    backgroundRepeat: 'no-repeat',
                                                    backgroundSize: '100% 100%',
                                                    height: '20px',
                                                    width: '20px'
                                                }}
                                            ></div>

                                            <div
                                                style={{
                                                    marginLeft: '60px',
                                                    display: 'flex',
                                                    backgroundImage: "url(" + require("../../assests/images/nice.png") + ")",
                                                    backgroundRepeat: 'no-repeat',
                                                    backgroundSize: '100% 100%',
                                                    height: '20px',
                                                    width: '20px'
                                                }}
                                            ></div>
                                            <p
                                                style={{
                                                    lineHeight: '15px',
                                                    fontSize: '15px'
                                                }}
                                            >{value.niceNum}</p>
                                            <div
                                                style={{
                                                    marginLeft: '15px',
                                                    backgroundImage: "url(" + require("../../assests/images/bad.png") + ")",
                                                    backgroundRepeat: 'no-repeat',
                                                    backgroundSize: '100% 100%',
                                                    height: '20px',
                                                    width: '20px'
                                                }}
                                            ></div>
                                            <p
                                                style={{
                                                    lineHeight: '15px',
                                                    fontSize: '15px'
                                                }}
                                            >{value.badNum}</p>
                                        
                                        </div>




                                    </div>



                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>
        )
    }
}
