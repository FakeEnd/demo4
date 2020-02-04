import React, { Component } from 'react'
import './index.less'
export default class Detailcommentcard extends Component {
    render() {
        return (
            <div>
                <div  style={{ postion: 'relative',backgroundColor:'white', }}>
                    <div style={{ display: 'flex', margin: '16px',padding: '16px',backgroundColor:'white',height:"100px" }}>
                        <div style={{ position: 'relative', marginRight: "12px",backgroundColor:'white'}}>
                            <span className='Myimg'>
                                <img style={{ width: '50px', height: '50px', borderRadius: '50%' }} src="http://106.15.192.117:8080/picture/15.jpg" alt="Han Solo" />
                            </span>
                        </div>
                        <div className='Mycomment'>
                            <div style={{ lineHeight: '20px', fontSize: '14px' }}>  <span style={{ lineHeight: '20px', fontSize: '16px', color: 'green' }}> 二十世纪电气目录</span> </div>
                            <div style={{  margin: '15px 0px' }}><p>&nbsp;&nbsp;{window.sessionStorage.getItem('auToken')}</p></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
