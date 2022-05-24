import React from 'react'
import { Typography } from "antd";
import {StylInput} from './StyledComponents'
import { Layout, Menu, Input, Button,Form,Checkbox  } from "antd";
const { Header, Content, Footer, Sider, } = Layout;
const { Title, Paragraph, Text, Link } = Typography;

const onFinish = (e) => {
  console.log(e);
};
function Contact() {
  return (
    <Content>
            <Title level={2}>Contact</Title>
            <Form
              onFinish={onFinish}
              name="basic"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              initialValues={{ remember: false }}
              // autoComplete="off"
            >
              <Form.Item
                label="Username"
                name="username"
                required
                // value={password}
                rules={[
                  {
                    required: true,
                    message: "Please input your usename!",
                  },
                ]}
              >
                <StylInput placeholder="Enter Username" />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                required
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <StylInput placeholder="Enter Password" />
              </Form.Item>

              <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{ offset: 8, span: 16 }}
              >
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                  Log in
                </Button>
              </Form.Item>
            </Form>
          </Content>
  )
}

export default Contact