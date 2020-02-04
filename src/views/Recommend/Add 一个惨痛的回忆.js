import React, { Component } from 'react'
//import { ImagePicker, WingBlank, SegmentedControl } from 'antd-mobile';
import { Link } from "react-router-dom";
import { ImagePicker, WingBlank, SegmentedControl } from 'antd-mobile';
import { List, TextareaItem, WhiteSpace, Button } from 'antd-mobile';

import axios from 'axios'
import qs from 'qs'

export default class Add extends Component {

    constructor() {
        super()
        this.state = {
            files: [{
                url: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg',
                id: '2121',
            }, {
                url: 'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg',
                id: '2122',
            }],
            multiple: false,
        }
    }
    changhead = (e) => {
        var apicture = e.target.files[0];
        var reader = new FileReader();
        reader.onload = this.showpicture;
        reader.readAsDataURL(apicture)
    };
    showpicture = () => {
        // const data = new FormData()
        // let formData = new FormData();
        //     for (let i = 0; i < this.state.files.length; i++) {
        //         // antd mobile 把 File 对象放在了 .file中
        //         let file = this.state.files[i].file;
        //         formData.append('imageFile[]', file);
        //     }
        // console.log(this.state.files[0]);

        //data.append('file', this.state.files)
        var url = `http://106.15.192.117:8080/canteen/jianInsert`;
        //name=a&msg=a&userId=a&tu=${this.state.files[0].url}
        let formData = new FormData();
        formData.append('tu', "");
        formData.append('name', "axios");
        formData.append('userId', " a");
        formData.append('msg', "a");
        let tu=this.state.files[0].url
        while (tu.indexOf('+') >= 0)
        tu = tu.replace('+', '%2B');
        let para = {
            name: 'a',
            msg: 'a',
            userId: 11111,
            tu: tu
        };
        //var url = `http://10.27.213.242:8080/canteen/jianInsert/name=${'a'}&msg=${'a'}`;
        //console.log((this.state.files[0].url).replace(/+/g, "%2B"))
        console.log(tu)
        let pa = qs.stringify(para);
        //formData.append('name',"a");
        axios.post(url, pa)
            .then((response) => {
                console.log(response.data.data);
                this.setState({
                    list: response.data.data
                })
            })
            .catch(function (error) {
                console.log(error);
            });
        // var apicture = e.target.result;
        // this.setState({
        //     head: apicture
        // })
        // var aurl = "http://10.27.213.242:8080/canteen/jianInsert";
        // var data = {
        //     name: 'a',
        //     msg: 'a',
        //     tu: apicture
        // }
        // fetch(aurl, {
        //     method: 'POST',
        //     body: data
        // })
        //     .then(function (res) {
        //         return res.json();
        //     })
        //     .then(function (date) {
        //         console.log(date);

        //     }
        //     )
    }
    onChange = (files, type, index) => {
        console.log(files, type, index);
        this.setState({
            files,
        });
    }
    render() {
        const { files } = this.state;
        return (
            <WingBlank>

                <WhiteSpace></WhiteSpace>
                <TextareaItem
                    title="菜品名称"
                    placeholder="auto focus in Alipay client"
                    data-seed="logId"
                    ref={el => console.log(el)}
                    autoHeight
                />

                <WhiteSpace size='lg' />
                <WhiteSpace  size='lg'/>
                <TextareaItem
                    title="主要原料"
                    placeholder="click the button below to focus"
                    data-seed="logId"
                    autoHeight
                    ref={el => this.customFocusInst = el}
                />
                <WhiteSpace size='lg' />
                <WhiteSpace  size='lg'/>
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
                <WhiteSpace  size='lg'/>
                    <WhiteSpace  size='lg'/>
                    <Button                      
                    //onClick={opinionInsert.bind(this,dishId,msg)} 
                    style={{ marginRight: '4px',fontSize:'18px',color:'green' }}>
                        提交
                        </Button>
            </WingBlank>
        )
    }
}
