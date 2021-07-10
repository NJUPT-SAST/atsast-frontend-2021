import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Card, Typography, Divider, Tag, Steps,} from 'antd';
const { Title, Paragraph, Text, Link } = Typography;
const { Step } = Steps;

const tagsData = ['校科协', '计软网安院科协', ];
class Units extends React.Component {
  render() {
    return (
      <>
        <span style={{ marginRight: 8 }}>主办单位:</span>
        {tagsData.map(tag => (
          <Tag color="blue">
            {tag}
          </Tag>
        ))}
      </>
    );
  }
}
export default (): React.ReactNode => {
  return (
    <PageContainer>
      <Card>
        <Title>蓝桥杯程序设计大赛</Title>
        <Units />
        <Card>
          <Steps current={1}>
            <Step title="报名时间" description="2021.7.1-2021.7.5" />
            <Step title="比赛时间" description="2021.7.10
            11.45.14-19.19.00" />
            <Step title="比赛结束" description="" />
          </Steps>
        </Card>
        <Card>
          <Title level={2}>比赛简介</Title>
          //富文本
        </Card>
      </Card>
    </PageContainer>
  );
};
