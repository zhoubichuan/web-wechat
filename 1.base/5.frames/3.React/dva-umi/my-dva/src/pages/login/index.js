import React from "react";
import { Layout } from "antd";
const { Footer, Content } = Layout;

class LoginForm extends Component {
  render() {
    const FromItemlayout = {
      labelCol: {
        span: 4
      },
      wrapperCol: {
        span: 20
      }
    };
    let {
      form: { getFieldDecorator }
    } = this.props;
    retrun(
      <Form onSubmit={this.handleSubmit} style={{ width: "500px" }}>
        <FromItem label="用户名">
          {getFieldDecorator({
            rules: [{ required: true, message: "请输入用户名" }]
          })(<Input placeholder={"请输入用户名"} />)}
        </FromItem>
      </Form>
    );
  }
}
LoginForm = Form.create()(LoginForm);

const FormWrapper=styled.div`
display:felx;
justify-content:center;

  
`