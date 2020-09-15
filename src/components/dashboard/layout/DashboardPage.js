import React, {useContext, useEffect, useState} from 'react';
import '../../../util/config/variable'
import '../../../App.css'
import {Avatar, Col, Dropdown, Layout, Menu, Row, Space} from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    SearchOutlined,
} from '@ant-design/icons';
import LeftMenu from "./LeftMenu";
import PageBreadcrumb from "./PageBreadcrumb";
import StateContext from "../../../util/context/StateContext";
import DispatchContext from "../../../util/context/DispatchContext";
import Login from "../login/Login";
import UseWindowDimensions from "../../../util/helper/UseWindowDimensions";

const { Header, Content } = Layout;

const DashboardPage = (props) => {

    const appState = useContext(StateContext)
    const appDispatch = useContext(DispatchContext)


    useEffect(() => {
        document.title = `${props.title} | ${global.final.appName}`
    }, [props.title])


    const [collapsed, setCollapsed] = useState(false)

    const toggle = () => {
        setCollapsed(toogle => !toogle)
    };

    if (!appState.loggedIn) {
        const { height, width } = UseWindowDimensions();
        console.log(height + " -- " + width)
        return (
                <div className="container-login100">
                    <div className="wrap-login100">
                        <h1 style={{textAlign:"center", paddingBottom:20}}>Login</h1>
                        <Login/>
                    </div>
                </div>
            // <Row style={{display:'unset'}} className="login-page">
            //     <Col flex="1 1 300px"/>
            //     <Col flex="1 1 300px">
            //         {width>900 ? <Login/> : <></> }
            //     </Col>
            //     <Col flex="1 1 300px">
            //         <div style={{display: 'block',  justifyContent:'center', alignItems:'center'}}>
            //             {width<=900 ? <Login/> : <></> }
            //         </div>
            //     </Col>
            // </Row>
        )
    }

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
            <Layout className="dashboard-container">
                <LeftMenu collapsed={collapsed} menuKey={props.menuKey}/>
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

                        <PageBreadcrumb breadcrumbItems={props.breadcrumbItems}/>

                        {props.children}


                    </Content>
                </Layout>
            </Layout>
        </>
    )
};

export default DashboardPage;