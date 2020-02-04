import React, { Component } from 'react'
import './index.less'
export default class Detailcommentcard extends Component {
    render() {
        let {item} = this.props
        return (
            <div>
                <div key={item.opinionId} style={{ postion: 'relative' }}>
                            <div style={{ display: 'flex', padding: '16px' }}>
                                <div style={{ position: 'relative', marginRight: "12px" }}>
                                    <span className='Detailimg'>
                                        <img style={{ width: '40px', height: '40px', borderRadius: '50%' }} src="http://106.15.192.117:8080/picture/15.jpg" alt="Han Solo" />
                                    </span>
                                </div>
                                <div className='Detailcomment'>
                                    <div style={{ lineHeight: '20px', fontSize: '14px' }}>  <span style={{ lineHeight: '20px', fontSize: '16px', color: 'green' }}> {item.userId} </span> &nbsp; date </div>
                                    <div style={{ lineHeight: '16px', marginTop: '5px' }}><p>{item.opinionMsg}</p></div>

                                </div>

                            </div>
                        </div>
            </div>
        )
    }
}
