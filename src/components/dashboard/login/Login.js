import React, {useContext} from 'react';
import StateContext from "../../../util/context/StateContext";
import DispatchContext from "../../../util/context/DispatchContext";
import {Button, Checkbox, Col, Form, Input, Row} from "antd";
import {useTranslation} from "react-i18next";
import LoginService from "../../../service/LoginService";
import './../../../service/LoginService'

const layout = {
    labelCol: { span: 7 },
    wrapperCol: { span: 13 },
};
const tailLayout = {
    wrapperCol: { offset: 7, span: 13 },
};

const Login = props => {
    const appState = useContext(StateContext)
    const appDispatch = useContext(DispatchContext)
    const {t} = useTranslation();

    const onFinish = values => {
        const service  = new LoginService()
        service.getLoginAuthentication("").then(data => {
            console.log(data)
        });
        console.log('Success:', values);
    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Form
            {...layout}
            className="login-form"
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >

            {/*<h2 style={{marginLeft:20, paddingTop:10}}>Error, login zamani sorun yandi</h2>*/}

            <Form.Item
                label={t('username')}
                name="username"
                rules={[{ required: true, message: t('input_username') }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label={t('password')}
                name="password"
                rules={[{ required: true, message: t('input_password') }]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    )
};

export default Login;