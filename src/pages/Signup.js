import React from "react";
import ReactDOM from "react-dom";
import { Row, Col,Form, Icon, Input, Button, Checkbox } from "antd";
import { Link } from "react-router-dom";

const FormItem = Form.Item;
class NormalSignupForm extends React.Component {
  checkUsername = (rule, value, callback) => {
    const form = this.props.form;
    form.setFields({
      username: {
        value: "hello"
      }
    });
    form.setFieldsValue("mundo");
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Row type="flex" style={{minHeight:'100vh',background:'pink'}}>
        <Col span={4}>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <FormItem>
              {getFieldDecorator("userName", {
                rules: [
                  { required: true, message: "Please input your username!" },
                  { validator: this.checkUsername }
                ]
              })(
                <Input
                  prefix={<Icon type="user" style={{ fontSize: 13 }} />}
                  placeholder="Username"
                />
              )}
            </FormItem>

            <FormItem>
              {getFieldDecorator("password", {
                rules: [{ required: true, message: "Please input your Password!" }]
              })(
                <Input
                  prefix={<Icon type="lock" style={{ fontSize: 13 }} />}
                  type="password"
                  placeholder="Password"
                />
              )}
            </FormItem>

            <FormItem>
              {getFieldDecorator("remember", {
                valuePropName: "checked",
                initialValue: true
              })(<Checkbox>Remember me</Checkbox>)}
              <a className="login-form-forgot" href="">
                Forgot password
              </a>
              <Link to="/project" activeClassName='item-selected'>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                >
                  Log in
                </Button>
              </Link>
              
              Or <a href="">register now!</a>
            </FormItem>
          </Form>
        </Col>
      </Row>
    );
  }
}

const WrappedNormalSignupForm = Form.create()(NormalSignupForm);

export default WrappedNormalSignupForm
