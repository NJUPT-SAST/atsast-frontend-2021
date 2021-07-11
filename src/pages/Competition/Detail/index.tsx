import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Card, Typography, Divider, Tag, Steps, Button, Space} from 'antd';
const { Title, Paragraph, Text, Link } = Typography;
const { Step } = Steps;

const tagsData = ['校科协', '计软网安院科协',];
const StepNow = 3
const StepData = [
  ['报名时间', '1919.8.10'],
  ['比赛时间', '2019.9.10'],
  ['比赛结束'],
  ['123'],
  ['12345']];
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
class StepTag extends React.Component {
  render() {
    return (
      <>
        <Steps current={StepNow}>
          {StepData.map(data => (
            <Step title={data[0]} description={data[1]} />
          ))}
        </Steps>
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
          <StepTag />
        </Card>
        <Card>
          <Space>
            <Button type="primary" href="/welcome" target="_blank" >比赛报名</Button>
            <Button type="primary" href="/welcome" target="_top" >我的状态</Button>
          </Space>
        </Card>
        <Card>
          <Title level={2}>比赛简介</Title>
          //富文本
        </Card>
      </Card>
    </PageContainer>
  );
};
