import "./index.scss";

// react
import React, { useState } from "react";
import { Form, Input, Button, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);


  // ---------------事件---------------
  /**
   * 点击切换登录/注册
   */
  const clickToggleLogin = (isLogin) => {
    setIsLogin(isLogin)
  }
  /**
   * 登录表单验证成功提交
   */
  const onLoginSubmit = (values) => {
    // 提交表单且验证成功后的事件
    console.log("Login Submit: ", values);
  };
  /**
   * 注册表单验证成功提交
   */
  const onRegisterSubmit = (form) => {
    console.log("Register Submit: ", form);
    // 验证两次密码是否一致
    if(form.register_password!==form.register_repassword){
      message.error('两次密码输入不一致')
      return
    }
    message.success('验证通过')
  }

  if (isLogin) {
    return (
      <div className="form_wrap">
        <div className="form_header">
          <h2>登录</h2>
          <span onClick={()=>{clickToggleLogin(false)}}>账号注册</span>
        </div>
        <Form name="normal_login" className="login-form" onFinish={onLoginSubmit}>
          <Form.Item
            name="login_username"
            rules={[{ required: true, message: "请输入用户名" }]}
            validateTrigger={["onBlur"]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="用户名"
            />
          </Form.Item>
          <Form.Item
            name="login_password"
            rules={[{ required: true, message: "请输入密码" }]}
            validateTrigger={["onBlur"]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="密码"
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  } else {
    return (
      <div className="form_wrap">
        <div className="form_header">
          <h2>注册</h2>
          <span onClick={()=>{clickToggleLogin(true)}}>去登陆</span>
        </div>
        <Form name="normal_register" className="login-form" onFinish={onRegisterSubmit}>
          <Form.Item
            name="register_username"
            rules={[{ required: true, message: "请输入用户名" }]}
            validateTrigger={["onBlur"]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="用户名"
            />
          </Form.Item>
          <Form.Item
            name="register_password"
            rules={[{ required: true, message: "请输入密码" }]}
            validateTrigger={["onBlur"]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="密码"
            />
          </Form.Item>

          <Form.Item
            name="register_repassword"
            rules={[{ required: true, message: "请再次输入密码" }]}
            validateTrigger={["onBlur"]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="重复密码"
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              注册
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
};

export default Login;
