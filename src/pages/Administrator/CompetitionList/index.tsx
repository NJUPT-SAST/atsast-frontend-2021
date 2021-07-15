import React from 'react';
import { Typography, Row, Col, Card, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
const { Title, Paragraph, Text, Link } = Typography;
function CompetitionList() {
  return (
    <Typography>
      <Title>比赛列表</Title>
      <Row gutter={[16, 24]}>
        <Col span={8}>
          <Card hoverable={true}>
          </Card>
        </Col>
        <Col span={8}>
          <Card hoverable={true}>
          </Card>
        </Col>
        <Col span={8}>
          <Card hoverable={true}>
            <Button type="dashed" block={true} icon={<PlusOutlined />}>
              新建比赛
            </Button>
          </Card>
        </Col>
      </Row>
    </Typography>
  );
}

export default CompetitionList;