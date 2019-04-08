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
          <h1>Forgot your password?</h1>
          <p>Type your username or email in the filed bellow to receive your validation code</p>
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
              <Link to="/new-password">
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                >
                  Send Validation Code
                </Button>
              </Link>
              <br/>
            </FormItem>
          </Form>
          <p>If you don't have an account <Link to='/signup'>click here</Link> to setup a new account</p>
        </Col>
      </Row>
    );
  }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

export default WrappedNormalLoginForm
