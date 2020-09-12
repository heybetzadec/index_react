import React, {useContext} from 'react';
import StateContext from "../../../util/context/StateContext";
import DispatchContext from "../../../util/context/DispatchContext";
import {Button, Checkbox, Col, Form, Input, Row} from "antd";

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

const Login = props => {
    const appState = useContext(StateContext)
    const appDispatch = useContext(DispatchContext)

    const onFinish = values => {
        console.log('Success:', values);
    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    return (
        <>
            <Row>
                <Col style={{backgroundColor:"green"}} flex="1 1 300px">1</Col>
                <Col style={{backgroundColor:"blue"}} flex="1 1 300px">
                    <Form
                        {...layout}
                        style={{
                            marginTop:"50%"
                        }}
                        name="basic"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                    >
                        <Form.Item
                            label="Username"
                            name="username"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
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
                </Col>
                <Col style={{backgroundColor:"red"}} flex="1 1 300px">3</Col>
            </Row>

        </>
    )
};

export default Login;