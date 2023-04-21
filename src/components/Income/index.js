import React, { memo, useEffect, useState } from "react";
import { Button, Form, Spin } from "antd";
import ChartData from "../Chart";
import ChartForm from "../Form";
import './style.css';

const Income = () => {
    const [income, _income] = useState(
        {
            januray: 5000,
            february: 6000,
            march: 7000,
            april: 8000,
        }
    )
    const [form] = Form.useForm()
    useEffect(() => {
        form.setFieldsValue(income)
    }, [])
    const onFinish = (values) => {
        _income('')
        setTimeout(() => {
            _income(values)
        }, 1500);
        form.setFieldsValue({
            januray: '',
            february: '',
            march: '',
            april: '',
        })
    }
    return (

        <div className="constant">
            <div style={{ hight: '100%', }}>
                <h1 style={{ color: 'white', textAlign: 'center' }}> Income Form</h1>
                <Form
                    onFinish={onFinish}
                    form={form}
                    labelCol={{ span: 7 }} 
                    wrapperCol={{ span: 17 }}
                >
                    <ChartForm />
                </Form>
                <Button type="primary" onClick={form.submit} > save</Button>
            </div>
            <div>
                {income ?
                    <ChartData
                        income={income}
                    />
                    : <Spin />
                }
            </div>
        </div>
    )
}

export default memo(Income)