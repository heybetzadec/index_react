import React, {useState} from 'react';
import DashboardPage from "../layout/DashboardPage";
import {Button, Card, Input, PageHeader, Form, Select, Space} from "antd";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";

const { Option } = Select;

const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 10 },
};
const tailLayout = {
    wrapperCol: { offset: 4, span: 10 },
};


const CategoryDetail = props => {
    const {t} = useTranslation();
    const [size, setSize] = useState('small');

    const [form] = Form.useForm();

    const onGenderChange = value => {
        switch (value) {
            case "male":
                form.setFieldsValue({ note: "Hi, man!" });
                return;
            case "female":
                form.setFieldsValue({ note: "Hi, lady!" });
                return;
        }
    };

    const onFinish = values => {
        console.log(values);
    };

    const onReset = () => {
        form.resetFields();
    };


    // https://ant.design/components/form/#header
    return (
        <DashboardPage title={props.title} menuKey={props.menuKey}>
            <PageHeader
                title={t('add_category')}
                onBack={() => window.history.back()}
            />

            <Card >
                <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
                    <Form.Item name="note" label="Note" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name="gender" label="Gender" rules={[{ required: true }]}>
                        <Select
                            placeholder="Select a option and change input text above"
                            onChange={onGenderChange}
                            allowClear
                        >
                            <Option value="male">male</Option>
                            <Option value="female">female</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item {...tailLayout} className="form_button_group">
                        <Space>
                            <Button htmlType="button" onClick={onReset}>
                                Reset
                            </Button>
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Space>
                    </Form.Item>
                </Form>
            </Card>



        </DashboardPage>
    )
};

export default CategoryDetail;