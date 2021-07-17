import React from 'react';
import { Typography, Row, Col, Card, Button, Radio, Breadcrumb } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
const { Title, Paragraph, Text, Link } = Typography;
import { PageHeaderWrapper } from '@ant-design/pro-layout';
const gridStyle = {
  width: '400px',
  height: '200px',
};
const NewStyle = {
  height: '100%',
  textAlign: 'center',
};
class ComCard extends React.Component {
  render() {
    return (
      <>
        <Card.Grid style={gridStyle}>
          <Typography>
            <Title level={3}>xx比赛</Title>
            <Button href="">修改</Button>
            <Button href="">状态</Button>
            <Button href="/admin/competition-list/judge-management">评委</Button>
            <Button href="">结束</Button>
          </Typography>
        </Card.Grid>
      </>
    );
  }
}
function CompetitionList() {
  return (
    <div>
      <Breadcrumb>
        <Breadcrumb.Item>
          <a>管理页</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="">比赛列表</a>
        </Breadcrumb.Item>
      </Breadcrumb>
      <Card>
        <ComCard />
        <ComCard />
        <ComCard />
        <ComCard />
        <ComCard />
        <Card.Grid style={gridStyle}>
          <a href="/admin/create-competition">
            <Button type="dashed" block icon={<PlusOutlined />} style={NewStyle}>
              新建比赛
            </Button>
          </a>
        </Card.Grid>
      </Card>
    </div>
  );
}

export default CompetitionList;
