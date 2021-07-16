import React from 'react';
import { Typography, Row, Col } from 'antd';
const { Title, Paragraph, Text, Link } = Typography;
import { PageHeaderWrapper } from '@ant-design/pro-layout';
function CreateCompetition() {
  return (
    <PageHeaderWrapper title={<Title level={2}>创建比赛</Title>}>
    </PageHeaderWrapper>
  );
}

export default CreateCompetition;