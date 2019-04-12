import React from "react";
import ReactDOM from "react-dom";
import { Row, Col,Form, Icon, Input, Button, Checkbox } from "antd";
import { Link } from "react-router-dom";
import '../../index.css';

import pattern from '../../pattern.png';
import logo from '../../logo.svg';

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
      <div style={{background:'linear-gradient(90deg, #0C304D 3%, #04223A 100%)'}}>
      <Row type="flex" justify="space-around" align="middle" style={{textAlign:'center',minHeight:'100vh',backgroundImage:`url(${pattern})`, backgroundSize:'cover'}}>
        <Col xs={18} md={8} lg={6}>
          <img src={logo}/>
           <br/><br/><br/>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <FormItem>
              {getFieldDecorator("userName", {
                rules: [
                  { required: true, message: "Please input your username!" },
                  { validator: this.checkUsername }
                ]
              })(
                <div>
                <div style={{lineHeight:'24px',textAlign:'left',color:'white'}}>Label</div>
                <Input
                  prefix={<Icon type="user" style={{ fontSize: 13 }} />}
                  placeholder="Username"
                  large
                />
                </div>
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator("password", {
                rules: [{ required: true, message: "Please input your Password!" }]
              })(
                <div>
                  <div style={{lineHeight:'24px',textAlign:'left',color:'white'}}>Label</div>
                  <Input
                    prefix={<Icon type="lock" style={{ fontSize: 13 }} />}
                    type="password"
                    placeholder="Password"
                    large
                  />
                </div>
              )}
            </FormItem>
                <br/>
            <FormItem>
              <Link to="/logged">
                <Button
                  type="primary"
                  htmlType="submit"
                  className="buttonSpecial"
                  large
                  // style={{backgroundImage: 'linear-gradient(90deg, #05aba3 3%, #1890FF 100%)', minWidth:'100%'}}
                >
                  Log in
                </Button>
              </Link>
            </FormItem>
          </Form>
          <p style={{color:'white'}}>Forgot Password? <Link to='/recover' style={{marginLeft:'8px'}}>Let Us Help</Link></p>
          <br/><br/><br/>
          <p style={{color:'white'}}>Don’t Have an Account? <Link to='/signup' style={{marginLeft:'8px'}}>Sign Up Now</Link></p>
        </Col>
      </Row>
      </div>
    );
  }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

export default WrappedNormalLoginForm
