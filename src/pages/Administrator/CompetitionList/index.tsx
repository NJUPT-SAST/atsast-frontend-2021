import React from 'react';
<<<<<<< HEAD
import { Typography, Row, Col, Card, Button, Radio, Space } from 'antd';
=======
import { Typography, Row, Col, Card, Button, Radio, Breadcrumb, PageHeader} from 'antd';
>>>>>>> be8c6c199a3749a5da43bdfdf663ea0b720b61bb
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
<<<<<<< HEAD
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
=======
        <Card.Grid style={gridStyle}>
          <Typography>
            <Title level={3}>xx比赛</Title>
            <Button href="">修改</Button>
            <Button href="/admin/competition-list/competition-state">状态</Button>
            <Button href="/admin/competition-list/judge-management">评委</Button>
            <Button href="">结束</Button>
          </Typography>
        </Card.Grid>
>>>>>>> be8c6c199a3749a5da43bdfdf663ea0b720b61bb
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
    </div>
  );
}

export default CompetitionList;
