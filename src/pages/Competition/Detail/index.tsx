import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Card, Typography, Tag, Steps, Button, Space } from 'antd';

const { Title } = Typography;
const { Step } = Steps;

const tagsData = ['校科协', '计软网安院科协',];
const StepNow = 3
const StepData = [
  ['报名时间', '1919.8.10'],
  ['比赛时间', '2019.9.10'],
  ['比赛结束'],
  ['123'],
  ['12345']];

/* eslint max-classes-per-file: ["error", 2] */
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
  state = {
    list: {
      currentStage: {
        stageType: "",
        file: {
          fileDescription: "",
          fileLimit: "",
        },
        richText: "",
        stageId: "",
      },
      stages: [
        {
          stageName: "",
          stageTimes: {
            stageBegin: "",
            stageEnd: "",
          },
        }
      ],
    }
  }
  componentDidMount() {
    fetch('https://yapi.sast.fun/mock/13/user/conteststage', {
      method: 'get',
    })
      .then(res => res.json())
      .then(json => {
        this.setState({ list: json });
        // console.log(this.state.list);
      })
  }
  render() {
    return (
      <>
        {console.log(this.state.list)}
        <Steps current={this.state.list.currentStage.stageId}>
          {this.state.list.stages.map(data => (
            <Step title={data.stageName} description={data.stageTimes.stageBegin+"——"+data.stageTimes.stageEnd} />
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
        <Card bordered={false}>
          <Title level={2}>比赛简介</Title>
          //富文本
        </Card>
      </Card>
    </PageContainer>
  );
};
