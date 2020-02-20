import React, { useState, useEffect } from 'react'
import { Flex, Button, WingBlank, WhiteSpace } from 'antd-mobile';
import { getScore } from '../../Requests'

//函数式组件的路由应该有如下文档
//import { useHistory } from "react-router-dom";
//let history = useHistory();
//history.push("/admin/comment/start");

// eslint-disable-next-line
export default Comment = (props) => {
    let [score, setScore] = useState(0)
    let pushCommentStart = () => {
        props.history.push("/admin/comment/start")
    }
    useEffect(() => {
        getScore()
            .then(res => setScore(res.data.data))
    }, [])

    return (
        <div style={{ margin: '15px 15px' }}>
            <p style={{ color: 'green', fontSize: '20px', margin: '30px', textAlign: 'center', letterSpacing: '0.15em' }}>就餐环境评价</p>
            <WhiteSpace />
            <WingBlank style={{ backgroundColor: 'white', border: '1px solid white', borderRadius: '10px', height: '180px' }}>
                <Flex
                    direction='column'
                    justify='space-between'
                >
                    <p style={{ margin: '30px 0px', fontSize: '18px', color: 'green', }} >当月评分</p>
                    <p style={{ margin: '40px 0px', fontSize: '14px', color: 'green' }} >{score}分</p>
                </Flex>
            </WingBlank>
            <Button
                onClick={pushCommentStart}
                style={{ margin: '30px 15px', fontSize: '18px', color: 'green', }}
            >
                我要评论
                </Button>
        </div>
    )
}
