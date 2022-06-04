import React, { memo } from "react";
import { Form, InputNumber } from 'antd';
import './style.css';


const ChartForm = () => {
    return (
        <div>
            <Form.Item
                name={'januray'}
                label={<label style={{ color: "white", }}>Januray :</label>}
                rules={[{ required: true }]}
            >
                <InputNumber
                    className="inputNumber"
                    placeholder="enter here amount"
                />
            </Form.Item>
            <Form.Item
                name={'february'}

                label={<label style={{ color: "white" }}>February :</label>}

                rules={[{ required: true }]}>
                <InputNumber
                    className="inputNumber"
                    placeholder="enter here amount"
                />
            </Form.Item>
            <Form.Item
                name={'march'}

                label={<label style={{ color: "white" }}>March :</label>}

                rules={[{ required: true }]}>
                <InputNumber
                    className="inputNumber"
                    placeholder="enter here amount"
                />
            </Form.Item>
            <Form.Item
                name={'april'}

                label={<label style={{ color: "white" }}>April :</label>}

                rules={[{ required: true }]}>
                <InputNumber
                    className="inputNumber"
                    placeholder="enter here amount"
                />
            </Form.Item>
        </div>
    )
}

export default memo(ChartForm)