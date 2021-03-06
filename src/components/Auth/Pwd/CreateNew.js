import React from "react";
import ReactDOM from "react-dom";
import { Row, Col,Form, Icon, Input, Button, Checkbox } from "antd";
import { Link } from "react-router-dom";

const FormItem = Form.Item;
class NormalLoginForm extends React.Component {
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
      <Row type="flex" justify="space-around" align="middle" style={{minHeight:'calc(100vh - 64px)',background:'#f0f2f5'}}>
        <Col xs={20} md={12} lg={10}>
          <h1>Create New Password</h1>
          <p>If you have any questions, please contact support@startse.com</p>
          <Form onSubmit={this.handleSubmit} className="login-form">
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
              <Link to="/login">
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                >
                  Save New Password
                </Button>
              </Link>
            </FormItem>
          </Form>
        </Col>
      </Row>
    );
  }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

export default WrappedNormalLoginForm
