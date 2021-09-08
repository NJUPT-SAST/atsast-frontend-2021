import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Descriptions, Card, Input, Form, DatePicker, Button, Typography, Row, Col } from 'antd';


const { TextArea } = Input;

class App extends React.Component {


  state = {
    list: {
      success: "",
      errMsg: "",
      errCode: "",
      "data": {
        "uid": "",
        "realName": "",
        "stuId": "",
        "phone": "",
        "faculty": "",
        "personId": "",
        "major": "",
        "qq": "",
        "wx": "",
        "email": "",
        "politicalStatus": "",
        "dormitoryNumber": "",
        "hometown": "",
        "enable": "",

      }
    },
  }

  componentDidMount() {
    fetch('http://pipe.sast.codes:7566/mock/13/user/selfinfo', {
      method: 'get',
    })
      .then(res => res.json())
      .then(json => {
        this.setState({
          list: json,
        });
        // console.log(this.state.list.data)
      })
  }

  inputChange1 = (val) => {
    // console.log(val)
    // console.log(val.target.value)
    let obj = Object.assign(this.state.list.data, { realName: val.target.value });
    this.setState({
      list: {
        data: obj
      }
    })
  }
  inputChange2 = (val) => {
    // console.log(val)
    // console.log(val.target.value)
    let obj = Object.assign(this.state.list.data, { major: val.target.value });
    this.setState({
      list: {
        data: obj
      }
    })
  }
  inputChange3 = (val) => {
    // console.log(val)
    // console.log(val.target.value)
    let obj = Object.assign(this.state.list.data, { stuId: val.target.value });
    this.setState({
      list: {
        data: obj
      }
    })
  }
  inputChange4 = (val) => {
    // console.log(val)
    // console.log(val.target.value)
    let obj = Object.assign(this.state.list.data, { personId: val.target.value });
    this.setState({
      list: {
        data: obj
      }
    })
  }
  inputChange5 = (val) => {
    // console.log(val)
    // console.log(val.target.value)
    let obj = Object.assign(this.state.list.data, { phone: val.target.value });
    this.setState({
      list: {
        data: obj
      }
    })
  }
  inputChange6 = (val) => {
    // console.log(val)
    // console.log(val.target.value)
    let obj = Object.assign(this.state.list.data, { dormitoryNumber: val.target.value });
    this.setState({
      list: {
        data: obj
      }
    })
  }
  inputChange7 = (val) => {
    // console.log(val)
    // console.log(val.target.value)
    let obj = Object.assign(this.state.list.data, { qq: val.target.value });
    this.setState({
      list: {
        data: obj
      }
    })
  }
  inputChange8 = (val) => {
    // console.log(val)
    // console.log(val.target.value)
    let obj = Object.assign(this.state.list.data, { wx: val.target.value });
    this.setState({
      list: {
        data: obj
      }
    })
  }
  inputChange9 = (val) => {
    // console.log(val)
    // console.log(val.target.value)
    let obj = Object.assign(this.state.list.data, { faculty: val.target.value });
    this.setState({
      list: {
        data: obj
      }
    })
  }
  inputChange10 = (val) => {
    // console.log(val)
    // console.log(val.target.value)
    let obj = Object.assign(this.state.list.data, { politicalStatus: val.target.value });
    this.setState({
      list: {
        data: obj
      }
    })
  }
  inputChange11 = (val) => {
    // console.log(val)
    // console.log(val.target.value)
    let obj = Object.assign(this.state.list.data, { hometown: val.target.value });
    this.setState({
      list: {
        data: obj
      }
    })
  }

  Submit = () => {
    console.log(this.state.list.data)
    fetch('http://pipe.sast.codes:7566/mock/13/user/selfinfo', {
      method: 'post',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(
        this.state.list.data
      )
    })
      .then(res => {console.log(res)})
  }
  render() {
    return (
      <PageContainer>
        <Card>
          <Descriptions
            title="个人信息"
            bordered
            column={{ xxl: 4, xl: 2, lg: 3, md: 3, sm: 2, xs: 1 }}
          >
            <Descriptions.Item label="个人UID">
              <Input value={this.state.list.data.uid} disabled />
            </Descriptions.Item>
            <Descriptions.Item label="邮箱">
              <Input value={this.state.list.data.email} disabled />
            </Descriptions.Item>
            <Descriptions.Item label="姓名">
              <Input value={this.state.list.data.realName} onChange={this.inputChange1.bind(this)} />
            </Descriptions.Item>
            <Descriptions.Item label="专业">
              <Input value={this.state.list.data.major} onChange={this.inputChange2.bind(this)} />
            </Descriptions.Item>
            <Descriptions.Item label="学号">
              <Input value={this.state.list.data.stuId} onChange={this.inputChange3.bind(this)} />
            </Descriptions.Item>
            <Descriptions.Item label="身份证号">
              <Input value={this.state.list.data.personId} onChange={this.inputChange4.bind(this)} />
            </Descriptions.Item>
            <Descriptions.Item label="手机号">
              <Input value={this.state.list.data.phone} onChange={this.inputChange5.bind(this)} />
            </Descriptions.Item>
            <Descriptions.Item label="宿舍号">
              <Input value={this.state.list.data.dormitoryNumber} onChange={this.inputChange6.bind(this)} />
            </Descriptions.Item>
            <Descriptions.Item label="QQ">
              <Input value={this.state.list.data.qq} onChange={this.inputChange7.bind(this)} />
            </Descriptions.Item>
            <Descriptions.Item label="微信">
              <Input value={this.state.list.data.wx} onChange={this.inputChange8.bind(this)} />
            </Descriptions.Item>
            <Descriptions.Item label="学院">
              <Input value={this.state.list.data.faculty} onChange={this.inputChange9.bind(this)} />
            </Descriptions.Item>
            <Descriptions.Item label="政治面貌">
              <Input value={this.state.list.data.politicalStatus} onChange={this.inputChange10.bind(this)} />
            </Descriptions.Item>
            <Descriptions.Item label="籍贯">
              <Input value={this.state.list.data.hometown} onChange={this.inputChange11.bind(this)} />
            </Descriptions.Item>
          </Descriptions>
          <br/>
          <Button type="primary" htmlType="submit" onClick={this.Submit}>
            提交修改
          </Button>
        </Card>
      </PageContainer>
    )
  }


}


function Center() {
  return (
    <div>
      <App />
    </div>
  );
}

export default Center;