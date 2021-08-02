import React from 'react';
import { Typography, Row, Col, Card, Button, Radio, Breadcrumb, PageHeader  , Divider } from 'antd';
const { Title, Paragraph, Text, Link } = Typography;

class Detail extends React.Component {
  state = {
    list: {
      success: "",
      errMsg: "",
      errCode: "",
      data: {
        contestName: "",
        description: "",
        contestOrganizer: "",
        contestHost: "",
        contestHelper: "",
        isTeam: "",
        teamGroup: "",
        joinGrade: "",
        isInstructor: "",
        workCategory: "",
        subjectCategory: "",
        minMember: "",
        maxMember: "",
        minInstructor: "",
        maxInstructor: "",
        stages: [
          {
            stageName: "",
            stageType: "",
            stageBegin: "",
            stageEnd: "",
          }
        ],
        fileUrl: "",
        banners: [
          "",
        ]
      }
    }
  }

  componentDidMount() {
    fetch('https://yapi.sast.fun/mock/13/superadmin/check', {
      method: 'get',
    })
      .then(res => res.json())
      .then(json => {
        this.setState({ list: json });
      })
  }

  render() {
    return (
      <>
        <Breadcrumb>
          <Breadcrumb.Item>
            <a href="/super-admin">超级管理员</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="/super-admin/create-approval">创建审批</a>
          </Breadcrumb.Item>
        </Breadcrumb>
        <PageHeader
          className="site-page-header"
          title="创建审批"
          subTitle="创建审批页面"
        />
        <Card hoverable>
          <Row gutter={[36, 18]}>
            <Col span={11}>
              <h3>比赛名称</h3>
            </Col>
            <Col span={13}>
              <h3>{this.state.list.data.contestName}</h3>
            </Col>
            <Col span={11}>
              <h3>主办方</h3>
            </Col>
            <Col span={13}>
              <h3>{this.state.list.data.contestOrganizer}</h3>
            </Col>
            <Col span={11}>
              <h3>承办方</h3>
            </Col>
            <Col span={13}>
              <h3>{this.state.list.data.contestHost}</h3>
            </Col>
            <Col span={11}>
              <h3>协办方</h3>
            </Col>
            <Col span={13}>
              <h3>{this.state.list.data.contestHelper}</h3>
            </Col>
          </Row>
        </Card>
        <Card hoverable>
          <Row>
            <Col span={11}>
              <h3>赛制</h3>
            </Col>
            <Col span={13}>
              <h3>{this.state.list.data.isTeam}</h3>
            </Col>
          </Row>
        </Card>
        <div className="choice button">
          <Card hoverable>
            <Row>
              <Col span={11}>
                <h3>是否限制参赛年级</h3>
              </Col>
              <Col span={13}>
                <h3>{this.state.list.data.joinGrade}</h3>
              </Col>
            </Row>
          </Card>
          <Card hoverable >
            <Row>
              <Col span={11}>
                <h3>是否存在指导老师</h3>
              </Col>
              <Col span={13}>
                <h3>{this.state.list.data.isInstructor}</h3>
              </Col>
            </Row>
          </Card>
          <Card hoverable>
            <Row>
              <Col span={11}>
                <h3>是否设置作品类别</h3>
              </Col>
              <Col span={13}>
                <h3>{this.state.list.data.workCategory}</h3>
              </Col>
            </Row>
          </Card>
          <Card hoverable>
            <Row>
              <Col span={11}>
                <h3>是否存设置团队组别</h3>
              </Col>
              <Col span={13}>
                <h3>{this.state.list.data.teamGroup}</h3>
              </Col>
            </Row>
          </Card>
        </div>
        <Card hoverable>
          <Row>
            <Col span={11}>
              <h3>比赛流程</h3>
            </Col>
            <Col span={13}>
              {this.state.list.data.stages.map(stages => (
                <>
                  <h3>阶段名称：{stages.stageName}</h3>
                  <h3>阶段类型：{stages.stageType}</h3>
                  <h3>时间：{stages.stageBegin} —— {stages.stageEnd}</h3>
                  <Divider />
                </>
              ))}
            </Col>
          </Row>
        </Card>
        <Card hoverable>
          <Row>
            <Col span={11}>
              <h3>比赛策划案</h3>
            </Col>
            <Col span={13}>
              <Button type="primary" target={this.state.list.data.fileUrl}>
                查看
              </Button>
            </Col>
          </Row>
        </Card>
        <Card hoverable>
          <Row>
            <Col span={11}>
              <h3>横幅内容</h3>
            </Col>
            <Col span={13}>
              {this.state.list.data.banners.map(banners => (
                <h3>{banners}</h3>
              ))}
            </Col>
          </Row>
        </Card>
        <Card hoverable>
          <Row>
            <Col span={11}>
              <h3>比赛详情</h3>
            </Col>
            <Col span={13}>
              <Button type="primary">
                查看
              </Button>
            </Col>
          </Row>
        </Card>
        <Card hoverable>
          <Row>
            <Col span={11}>
            </Col>
            <Col span={12}>
              <Button danger>
                打回
              </Button>
            </Col>
            <Col >
            </Col>
          </Row>
        </Card>
      </>
    );
  }
}
function CreateApproval() {
  return (
    <div>
      <Detail />
    </div>
  );
}

export default CreateApproval;
