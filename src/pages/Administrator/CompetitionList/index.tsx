import React from 'react';
import { Typography, Row, Col, Card, Button, Radio, Breadcrumb, PageHeader } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
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
                <a href="">修改</a>,
                <a href="/admin/competition-list/competition-state">状态</a>,
                <a href="/admin/competition-list/judge-management">评委</a>,
                <a href="">结束</a>,
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
function CompetitionList() {
  return (
    <div>
      <Breadcrumb>
        <Breadcrumb.Item>
          <a href="/admin">管理页</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="/admin/competition-list/">比赛列表</a>
        </Breadcrumb.Item>
      </Breadcrumb>
      <PageHeader
        className="site-page-header"
        title="比赛列表"
        subTitle="比赛列表页面"
      />
      <Card>
        <Row gutter={[36, 18]}>
          <ComCol />
          <Col xs={24} md={12} xl={8}>
            <Card style={CardStyle} hoverable>
              <a href="/admin/create-competition">
                <Button type="dashed" block icon={<PlusOutlined />} style={NewStyle}>
                  新建比赛
                </Button>
              </a>
            </Card>
          </Col>
        </Row>
      </Card>
    </div>
  );
}

export default CompetitionList;
