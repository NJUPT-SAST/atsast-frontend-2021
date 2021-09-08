import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Card, Typography, Steps, } from 'antd';

const { Title } = Typography;
const { Step } = Steps;
const StepNow = 3
const StepData = [
  ['xx阶段', ],
  ['xx阶段', ],
  ['xx阶段',],
  ['xx阶段',],
  ['xx阶段',]];

const TitleStyle = {
  textAlign: 'center',
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
      <Card style={TitleStyle}>
        <Title >蓝桥杯程序设计大赛</Title>
        <Card>
          <StepTag />
        </Card>
        <br />
        <Title level={3}>
          你已经成功报名xxx比赛，比赛将于xx月xx号在xxxx举行， 请提前15分钟准备入场。
        </Title>
      </Card>
    </PageContainer>
  );
};
