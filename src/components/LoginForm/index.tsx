import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../store';
import { setIsLogin } from '../../store/authentication';

import styles from './styles.module.scss';

function LoginForm() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onFinish = (values: any) => {
    console.log('Success:', values);
    navigate('/')
    dispatch(setIsLogin(true))
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className={styles.formLogin} >
      <h1 className={styles.header}>Login</h1>
      <Form
        size='large'
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        layout="vertical"
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

        <Form.Item name="remember" valuePropName="checked" >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item >
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
};

export default LoginForm;