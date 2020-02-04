import React, { PureComponent } from 'react'
import { ImagePicker, WingBlank, TextareaItem, WhiteSpace, Button } from 'antd-mobile';

import axios from 'axios'
import qs from 'qs'

export default class Add extends PureComponent {

    constructor() {
        super()
        this.state = {
            files: [],
            multiple: false,
            name:'',
            msg:''
        }
    }
    changhead = (e) => {
        var apicture = e.target.files[0];
        var reader = new FileReader();
        reader.onload = this.showpicture;
        reader.readAsDataURL(apicture)
    };

    onChange = (files, type, index) => {
        console.log(files, type, index);
        this.setState({
            files,
        });
    }

    changeName = (value) =>{
        this.setState({
            name:value
        })
    }

    changeMsg = (value) =>{
        this.setState({
            msg:value
        })
    }

    jianInsert = (name,msg) => {
        let url = `http://106.15.192.117:8080/canteen/jianInsert`;       
        let tu = this.state.files[0].url
        let para = {
            name,
            msg,
            userId: window.sessionStorage.getItem('auToken') ,
            tu
        };
        let pa = qs.stringify(para);
        axios.post(url ,pa)
            .then((response) => {
                if (response.data.message === 'Success！！') {
                    alert('提交成功')
                    this.props.history.goBack()
                }
            })
    }

    render() {
        const { files } = this.state;
        return (
            <WingBlank>
                <p style={{color:'green',fontSize:'20px',margin:'15px'}}>推荐菜谱</p>
                <WhiteSpace></WhiteSpace>
                <TextareaItem
                    title="菜品名称"
                    placeholder="这里是填写菜品名称的地方..."
                    autoHeight
                    onChange={this.changeName}
                />
                <WhiteSpace size='lg' />
                <WhiteSpace size='lg' />
                <TextareaItem
                    title="主要原料"
                    placeholder="这里是填写菜品主要原料的地方..."
                    autoHeight
                    rows={3}
                    onChange={this.changeMsg}
                />
                <WhiteSpace size='lg' />
                <WhiteSpace size='lg' />
                <div
                    className='recommendImg'
                    style={{
                        backgroundColor: 'white',
                        minHeight: '135px',

                    }}
                >
                    <p style={{
                        width: '85px',
                        fontSize: '16px',
                        padding: '10px 0px 5px 10px'
                    }}>菜品图片</p>
                    <ImagePicker
                        style={{
                            height: '90px',
                        }}
                        files={files}
                        onChange={this.onChange}
                        //onImageClick={(index, fs) => console.log(index, fs)}
                        selectable={files.length < 4}
                    />

                </div>
                <WhiteSpace size='lg' />
                <WhiteSpace size='lg' />
                <Button
                    onClick={this.jianInsert.bind(this,this.state.name,this.state.msg)} 
                    style={{ marginRight: '4px', fontSize: '18px', color: 'green' }}>
                    提交
                        </Button>
            </WingBlank>
        )
    }
}
