import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Card, Typography, Tag, Steps, Button, Space } from 'antd';

const { Title } = Typography;
const { Step } = Steps;

const tagsData = ['校科协', '计软网安院科协',];

// class Units extends React.Component {
//   render() {
//     return (
//       <>
//         <span style={{ marginRight: 8 }}>主办单位:</span>
//         {tagsData.map(tag => (
//           <Tag color="blue">
//             {tag}
//           </Tag>
//         ))}
//       </>
//     );
//   }
// }
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
            <Step title={data.stageName} description={data.stageTimes.stageBegin + "——" + data.stageTimes.stageEnd} />
          ))}
        </Steps>
      </>
    );
  }
}

class Apps extends React.Component {
  state = {
    list: {
      success: "",
      errMsg: "",
      errCode: "",
      data: {
        contestId: "",
        masterUid: "",
        contestName: "",
        description: "",
        currAdmin: "",
        isTeam: "",
        isJoin: "",
        comment: "",
        pushlink: "",
        contestOrganizer: "",
        contestHost: "",
        contestHelper: "",
        currStu: "",
        banners: "",
        teamGroup: "",
        subjectCategory: "",
        workCategory: "",
        joinGrade: "",
        isInstructor: "",
        enable: "",
        judging: "",
        minMember: "",
        maxMember: "",
        minInstructor: "",
        maxInstructor: "",
        isTech: "",
        contestType: "",
        stageTemps: "",
        stages: "",
      }
    }
  }

  componentDidMount() {
    fetch('https://yapi.sast.fun/mock/13/user/contestInfo', {
      method: 'get',
    })
      .then(res => res.json())
      .then(json => {
        this.setState({ list: json });
      })
  }

  render() {
    return (
      <>
        <Card>
          <Title>{this.state.list.data.contestName}</Title>
          <span style={{ marginRight: 8 }}>主办单位:</span>
          <Tag color="blue">
             {this.state.list.data.contestOrganizer}
           </Tag>
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
          {this.state.list.data.description}
          </Card>
        </Card>
      </>
    );
  }
}


function CompetitionDetail() {
  return (
    <div>
      <Apps />
    </div>
  );
}

export default CompetitionDetail;
