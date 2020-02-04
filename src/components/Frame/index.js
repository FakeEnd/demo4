import React, { Component } from "react";
import { TabBar } from "antd-mobile";
import { Icon } from 'antd'
import { withRouter } from "react-router-dom";
import "./index.less";

const IconFont = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1624579_zi4wjpjng3f.js',
});
@withRouter

class Frame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: "/admin/dashBoard"
    };
  }
  onPress = (pathname) => {
    this.props.history.push(pathname);
    this.setState({
      selectedTab: pathname
    });
  }

  componentDidMount = () => {
    this.setState({
      selectedTab: this.props.history.location.pathname
    });
  };
  render() {
    const { menus } = this.props;
    return (
      <div style={{ position: "fixed", height: "100%", width: "100%", top: 0 }}>
        <TabBar
          unselectedTintColor="#868686"
          tintColor="#038B73"
        >
          {
            menus.map(item => {
              return (
                <TabBar.Item
                  title={item.title}
                  key={item.title}
                  icon={
                    <IconFont type={item.Type} style={{ fontSize: '30px', width: "30px", height: "30px" }} />
                  }
                  selectedIcon={
                    <IconFont type={item.Type} style={{ fontSize: '30px', width: "30px", height: "30px" }} />
                  }
                  selected={this.state.selectedTab === item.pathname}
                  onPress={this.onPress.bind(this, item.pathname)}
                >
                  {this.props.children}
                </TabBar.Item>
              )
            })
          }
        </TabBar>
      </div>
    );
  }
}
export default Frame;
