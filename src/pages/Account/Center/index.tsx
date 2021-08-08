import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Descriptions, Card,} from 'antd';

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
        email:"",
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
  
  render() {
    return (
    <PageContainer>
      <Card>
        <Descriptions
          title="个人信息"
          bordered
          column={{ xxl: 4, xl: 2, lg: 3, md: 3, sm: 2, xs: 1 }}
        >
          <Descriptions.Item label="个人UID">{this.state.list.data.uid}</Descriptions.Item>
          <Descriptions.Item label="邮箱">{this.state.list.data.email}</Descriptions.Item>
          <Descriptions.Item label="姓名">{this.state.list.data.realName}</Descriptions.Item>
          <Descriptions.Item label="专业">{this.state.list.data.major}</Descriptions.Item>
          <Descriptions.Item label="学号">{this.state.list.data.stuId}</Descriptions.Item>
          <Descriptions.Item label="身份证号">{this.state.list.data.personId}</Descriptions.Item>
          <Descriptions.Item label="手机号">{this.state.list.data.phone}</Descriptions.Item>
          <Descriptions.Item label="宿舍号">{this.state.list.data.dormitoryNumber}</Descriptions.Item>
          <Descriptions.Item label="QQ">{this.state.list.data.qq}</Descriptions.Item>
          <Descriptions.Item label="微信">{this.state.list.data.wx}</Descriptions.Item>
          <Descriptions.Item label="学院">{this.state.list.data.faculty}</Descriptions.Item>
          <Descriptions.Item label="政治面貌">{this.state.list.data.politicalStatus}</Descriptions.Item>
          <Descriptions.Item label="籍贯">{this.state.list.data.hometown}</Descriptions.Item>
        </Descriptions>
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