import React from 'react';
import { Typography, Row, Col, Card, Button, Radio, Breadcrumb, PageHeader } from 'antd';
const { Title, Paragraph, Text, Link } = Typography;

function AdminInformation() {
  return (
    <div>
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
            <h3>比赛名称</h3>
          </Col>
          <Col span={11}>
            <h3>主办方</h3>
          </Col>
          <Col span={13}>
            <h3>主办方</h3>
          </Col>
          <Col span={11}>
            <h3>承办方</h3>
          </Col>
          <Col span={13}>
            <h3>承办方</h3>
          </Col>
          <Col span={11}>
            <h3>协办方</h3>
          </Col>
          <Col span={13}>
            <h3>协办方</h3>
          </Col>
        </Row>
      </Card>
      <Card hoverable>
        <Row>
          <Col span={11}>
            <h3>赛制</h3>
          </Col>
        </Row>
      </Card>
      <div className="choice button">
        <Card hoverable className="nianji">
          <Row>
            <Col span={11}>
              <h3>是否限制参赛年级</h3>
            </Col>
          </Row>
        </Card>
        <Card hoverable >
          <Row>
            <Col span={11}>
              <h3>是否存在指导老师</h3>
            </Col>
            <Col>
            </Col>
          </Row>
        </Card>
        <Card hoverable>
          <Row>
            <Col span={11}>
              <h3>是否设置作品类别</h3>
            </Col>
            <Col>
            </Col>
          </Row>
        </Card>
        <Card hoverable>
          <Row>
            <Col span={11}>
              <h3>是否存设置团队组别</h3>
            </Col>
          </Row>
        </Card>
      </div>
      <Card hoverable>
        <Row>
          <Col span={11}>
            <h3>比赛流程</h3>
          </Col>
        </Row>

      </Card>
      <Card hoverable>
        <Row>
          <Col span={11}>
            <h3>比赛策划案</h3>
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
            <h3>横幅内容</h3>
          </Col>
          <Col span={13}>
              内容
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
        <Button danger>
          打回
        </Button>
      </Card>
    </div>
  );
}

export default AdminInformation;
