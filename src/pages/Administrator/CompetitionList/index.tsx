import React from 'react';
import { Typography, Row, Col, Card, Button, Radio, Space } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
const { Title, Paragraph, Text, Link } = Typography;
import { PageHeaderWrapper } from '@ant-design/pro-layout';
const CardStyle = {
  height:'150px',
};
const NewStyle = {
  height:'100px',
  textAlign: 'center',
};
class ComCol extends React.Component {
  render() {
    return (
      <>
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
              xx比赛
            </Title>
          </Card>
        </Col>
      </>
    );
  }
}
function CompetitionList() {
  return (
    <PageHeaderWrapper title={<Title level={2}>比赛列表</Title>}>
      <Card>
        <Row gutter={[36, 18]}>
          <ComCol />
          <ComCol />
          <ComCol />
          <ComCol />
          <ComCol />
          <ComCol />
          <ComCol />
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
    </PageHeaderWrapper>
  );
}

export default CompetitionList;