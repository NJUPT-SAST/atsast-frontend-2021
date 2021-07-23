import React from 'react';
import { Typography, Row, Col, Card, Button, Radio, Breadcrumb, PageHeader } from 'antd';
const { Title, Paragraph, Text, Link } = Typography;
const CardStyle = {
  height: '150px',
};
const NewStyle = {
  height: '100px',
  textAlign: 'center',
};
class ComCol extends React.Component {
  state = {
    list: {
      success: "",
      errMsg: "",
      errCode: "",
      data: [
        {
          contestId: "",
          masterUid: "",
          contestName: "",
          description: "",
          currAdmin: "",
          isTeam: "",
          isJoin: "",
          comment: "",
          pushlink: "",
          contestOrganizer: "",
          contestHost: "",
          contestHelper: "",
          currStu: "",
          banners: "",
          teamGroup: "",
          subjectCategory: "",
          workCategory: "",
          joinGrade: "",
          isInstructor: "",
          enable: "",
          judging: "",
          minMember: "",
          maxMember: "",
          minInstructor: "",
          maxInstructor: "",
          isTech: "",
          contestType: "",
          stageTemps: "",
          stages: "",
        }
      ]
    }

  }
  componentDidMount() {
    fetch('https://yapi.sast.fun/mock/13/user/contestlist/', {
      method: 'get',
      // mode: 'cors',
    })
      .then(res => res.json())
      .then(json => {
        this.setState({ list: json });
        // console.log(this.state.list);
      })
  }
  render() {

    return (
      <>
        {this.state.list.data.map(data => (
          <Col xs={24} md={12} xl={8}>
            <Card style={CardStyle} hoverable
              actions={[
                <a href="">详情</a>,
                <a href="">状态</a>,
                <a href="">审批</a>,
                <a href="">后续</a>,
              ]}
            >
              <Title level={3}>
                {data.contestName}
              </Title>
            </Card>
          </Col>
        ))}
      </>
    );
  }
}

function AdminInformation() {
  return (
    <div>
      <Breadcrumb>
        <Breadcrumb.Item>
          <a href="/super-admin">超级管理员</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="/super-admin/dash-board">仪表盘</a>
        </Breadcrumb.Item>
      </Breadcrumb>
      <PageHeader
        className="site-page-header"
        title="仪表盘"
        subTitle="仪表盘页面"
      />
      <Card>
        <Row gutter={[36, 18]}>
          <Col sm={24} xl={2}>
            管理员
          </Col>
          <Col sm={24} xl={6}>
            <Button type="primary">
              生成邀请注册链接
            </Button>
          </Col>
          <Col sm={24} xl={6}>
            <Button type="primary">
              导入Excel生成账号
            </Button>
          </Col>
        </Row>
      </Card>
      <Card>
        <Row gutter={[36, 18]}>
          <ComCol />
        </Row>
      </Card>
    </div>

  );
}

export default AdminInformation;
