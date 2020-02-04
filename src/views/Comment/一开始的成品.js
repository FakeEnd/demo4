import React, { Component } from 'react'
import imgurl1 from "./shoucang-13@2x.png";
import imgurl2 from "./xingxing_selected-2@2x.png";
import axios from 'axios';
class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: "评",
            src1: imgurl1,
            src2: imgurl2,
            style: {
                "width": "15%",
            },

        };
    }
    changes0 = (e) => {
        this.refs.imgs0.src = this.state.src1;
        this.refs.imgs1.src = this.state.src1;
        this.refs.imgs2.src = this.state.src1;
        this.refs.imgs3.src = this.state.src1;
        this.refs.imgs4.src = this.state.src1;
        this.refs.imgs0.src = this.state.src2;
        var num = parseInt(e.target.id);
        this.setState({
            data: (num + 1) * 2,
        })
    }
    changes1 = (e) => {
        this.refs.imgs0.src = this.state.src1;
        this.refs.imgs1.src = this.state.src1;
        this.refs.imgs2.src = this.state.src1;
        this.refs.imgs3.src = this.state.src1;
        this.refs.imgs4.src = this.state.src1;
        this.refs.imgs0.src = this.state.src2;
        this.refs.imgs1.src = this.state.src2;
        var num = parseInt(e.target.id);
        this.setState({
            data: (num + 1) * 2,
        })

    }
    changes2 = (e) => {
        this.refs.imgs0.src = this.state.src1;
        this.refs.imgs1.src = this.state.src1;
        this.refs.imgs2.src = this.state.src1;
        this.refs.imgs3.src = this.state.src1;
        this.refs.imgs4.src = this.state.src1;
        this.refs.imgs0.src = this.state.src2;
        this.refs.imgs1.src = this.state.src2;
        this.refs.imgs2.src = this.state.src2;
        var num = parseInt(e.target.id);
        this.setState({
            data: (num + 1) * 2,
        })

    }
    changes3 = (e) => {
        this.refs.imgs0.src = this.state.src1;
        this.refs.imgs1.src = this.state.src1;
        this.refs.imgs2.src = this.state.src1;
        this.refs.imgs3.src = this.state.src1;
        this.refs.imgs4.src = this.state.src1;
        this.refs.imgs0.src = this.state.src2;
        this.refs.imgs1.src = this.state.src2;
        this.refs.imgs2.src = this.state.src2;
        this.refs.imgs3.src = this.state.src2;
        var num = parseInt(e.target.id);
        this.setState({
            data: (num + 1) * 2,
        })

    }
    changes4 = (e) => {
        this.refs.imgs0.src = this.state.src1;
        this.refs.imgs1.src = this.state.src1;
        this.refs.imgs2.src = this.state.src1;
        this.refs.imgs3.src = this.state.src1;
        this.refs.imgs4.src = this.state.src1;
        this.refs.imgs0.src = this.state.src2;
        this.refs.imgs1.src = this.state.src2;
        this.refs.imgs2.src = this.state.src2;
        this.refs.imgs3.src = this.state.src2;
        this.refs.imgs4.src = this.state.src2;
        var num = parseInt(e.target.id);
        this.setState({
            data: (num + 1) * 2,
        })
    }
    trans = () => {
        var api = `http://106.15.192.117:8080/canteen/judgeCanteen?newScore=${this.state.data}&userId=${window.sessionStorage.getItem('auToken')}`
        axios.post(api)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    render() {
        return (
            <div>
                <p style={{
                    "color": "#289C87",
                    "fontSize": "22px",
                    marginTop: '30px'
                }}>本月就餐环境评分:</p>
                <div >
                    <div style={{
                        "float": "left",
                        "textAlign": "center",
                        "marginTop": "32px",
                        "backgroundColor": "white",
                        "borderRadius": "20px",
                        "height": "228px"
                    }}><div style={{
                        "marginTop": "92px",
                    }}>
                            <img src={imgurl1} style={{
                                "width": "15%"
                            }}
                                id='0'
                                key='0'
                                onClick={this.change, this.changes0}

                                ref="imgs0"
                            />
                            <img src={imgurl1} style={{
                                "width": "15%"
                            }}
                                id='1'
                                key='1'
                                onClick={this.change, this.changes1}
                                ref="imgs1"
                            />
                            <img src={imgurl1} style={{
                                "width": "15%"
                            }}
                                id='2'
                                key='2'
                                onClick={this.change, this.changes2}

                                ref="imgs2" />
                            <img src={imgurl1} style={{
                                "width": "15%"
                            }}
                                id='3'
                                key='3'
                                onClick={this.change, this.changes3}

                                ref="imgs3" />
                            <img src={imgurl1} style={{
                                "width": "15%"
                            }}
                                id='4'
                                key='4'
                                onClick={this.change, this.changes4}
                                ref="imgs4" /></div>

                        <p>{this.state.data}分</p>
                    </div>
                </div>
                <div style={{
                    "textAlign": "center",
                    "marginTop": "360px"
                }}>
                    <input type="button" value="评分"
                        style={{
                            "width": "278px",
                            "height": "40px",
                            "borderRadius": "10px",
                            "border": "none",
                            "backgroundColor": "white",
                            "color": "#289C87",
                            "fontSize": "22px"
                        }} onClick={this.trans}></input>
                </div>
            </div>
        );
    }
}

export default index;
