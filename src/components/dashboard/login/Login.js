import React, {useContext, useState} from 'react';
import StateContext from "../../../util/context/StateContext";
import DispatchContext from "../../../util/context/DispatchContext";
import {Alert, Button, Checkbox, Col, Form, Input, Row} from "antd";
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
    const [warning, setWarning] = useState(false)
    const {t} = useTranslation();

    const onFinish = values => {
        const service  = new LoginService()
        service.getLoginAuthentication(values).then(data => {
            console.log(data)
            if (data.status === 'ok'){
                appDispatch({ type: "login", data: data })
            } else {
                setWarning(prevState => prevState=true)
            }
        });
    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    const getWarning = ()=>{
        return (
            <Alert
                style={{marginBottom:20}}
                message={t('not_match')}
                type="warning"
                closable
            />
        )
    }

    const onClose = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        console.log(e, 'I was closed.');
    };

    return (
        <div className="container-login100">
            <div className="wrap-login100">
                <h1 style={{textAlign:"center", paddingBottom:10}}>Login</h1>
                {warning ? getWarning() : <></>}
                <Form
                    {...layout}
                    className="login-form"
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >

                    <Form.Item
                        label={t('mail')}
                        name="email"
                        rules={[{ required: true, message: t('input_email') }]}
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
            </div>
        </div>
    )
};

export default Login;