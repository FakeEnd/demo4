import React, { Component } from 'react'
import { Carousel, WingBlank } from 'antd-mobile';

export default class Cart extends Component {
    render() {
        return (
            <WingBlank>
                <Carousel
                    autoplay={true}
                    infinite={true}
                    dots={true}
                    dotStyle={{
                        margin:"0px 5px ",
                    }}
                    dotActiveStyle={{
                        margin:"0px 5px ",
                    }}
                >
                    {[15,15,15].map(val => (
                        <img
                            key={val}
                            src={`http://106.15.192.117:8080/picture/${val}.jpg`}
                            alt=""
                            style={{
                                width: '100%',
                                verticalAlign: 'top',
                                height: '200px',
                                touchAction: "none"
                            }}
                        />
                    ))}
                </Carousel>
            </WingBlank>
        )
    }
}
