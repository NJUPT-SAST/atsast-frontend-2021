import React from 'react';
import { Typography, Row, Col, Card, Button,Radio } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
const { Title, Paragraph, Text, Link } = Typography;

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
            <Title level={3}>
              xx比赛
            </Title>
                <Button>修改</Button>
                <Button>状态</Button>
                <Button>评委</Button>
                <Button>结束</Button>
          </Typography>
        </Card.Grid>
      </>
    );
  }
}
function CompetitionList() {
  return (
    <Typography>
      <Title>比赛列表</Title>
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
    </Typography>
  );
}

export default CompetitionList;