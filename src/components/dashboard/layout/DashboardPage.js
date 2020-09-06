import React, {useEffect, useState} from 'react';
import '../../../util/config/variable'
import '../../../App.css'
import {Avatar, Button, Dropdown, Layout, Menu, Space, PageHeader, Descriptions} from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    SearchOutlined,
} from '@ant-design/icons';
import LeftMenu from "./LeftMenu";

const { Header, Content } = Layout;

const DashboardPage = (props) => {
    useEffect(() => {
        document.title = `${props.title} | ${global.final.appName}`
    }, [props.title])


    const [collapsed, setCollapsed] = useState(false)

    const toggle = () => {
        setCollapsed(toogle => !toogle)
    };

    const menu = (
        <Menu>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
                    Profile
                </a>
            </Menu.Item>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
                    Setting
                </a>
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
                    Logout
                </a>
            </Menu.Item>
        </Menu>
    );

    return (
        <>
            <Layout className="full-height">
                <LeftMenu collapsed={collapsed}/>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{ padding: 0 }}>
                        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger',
                            onClick: toggle,
                        })}

                        <Space className="float-right right-margin-25">
                            <Avatar size={40} icon={<SearchOutlined />} />
                            <Dropdown overlay={menu} placement="bottomRight" trigger={["click"]} arrow>
                                <Avatar size={40} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                            </Dropdown>
                        </Space>

                    </Header>
                    <Content
                        className="site-layout-background"
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 280,
                        }}
                    >

                        {props.children}


                    </Content>
                </Layout>
            </Layout>
        </>
    )
};

export default DashboardPage;