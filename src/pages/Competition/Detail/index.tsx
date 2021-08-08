import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Card, Typography, Tag, Button, Space } from 'antd';
import { history } from 'umi';

const { Title } = Typography;
// const { Step } = Steps;
// class StepTag extends React.Component {
//   state = {
//     list: {
//       teamId: "",
//       memberUid: "",
//       enable: "",
//       leadberUid: "",
//       instructor: "",
//       instrutorId: "",
//       contestId: "",
//       teamName: "",
//       score: "",
//       result: "",
//       teamGroup: "",
//       subjectCategory: "",
//     }
//   }
//   componentDidMount() {

//     fetch('https://yapi.sast.fun/mock/13/user/conteststage', {
//       method: 'get',
//     })
//       .then(res => res.json())
//       .then(json => {
//         this.setState({ list: json });
//         // console.log(this.state.list);
//       })
//   }
//   render() {
//     return (
//       <>
//         {console.log(this.state.list)}
//         {/* <Steps current={this.state.list.currentStage.stageId}>
//           {this.state.list.stages.map(data => (
//             <Step title={data.stageName} description={data.stageTimes.stageBegin + "——" + data.stageTimes.stageEnd} />
//           ))}
//         </Steps> */}
//       </>
//     );
//   }
// }

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
    let contestId = window.location.href.split('?contestId')[1]
    if (typeof (contestId) == "undefined") {
      console.log("参数错误");
      history.push('/404');
    }
    let url = 'http://pipe.sast.codes:7566/mock/13/user/contestInfo?contestId=' + contestId
    fetch(url, {
      method: 'get',
    })
      .then(res => res.json())
      .then(json => {
        this.setState({ list: json });
        console.log(this.state.list);
        if (!this.state.list.success) {
          console.log("参数错误");
          // history.push('/404');
        }
      })

  }

  render() {
    return (
      <>
        <Card>
          <Card>
            <Title>{this.state.list.data.contestName}</Title>
            <Space>
              <span style={{ marginRight: 8 }}>主办单位:</span>
            <Tag color="blue">
              {this.state.list.data.contestOrganizer}
            </Tag>
            <span style={{ marginRight: 8 }}>承办单位:</span>
            <Tag color="blue">
              {this.state.list.data.contestHost}
            </Tag>
            <span style={{ marginRight: 8 }}>协办单位:</span>
            <Tag color="blue">
              {this.state.list.data.contestHelper}
            </Tag>
            </Space>
            <br />
            <br />
            <span style={{ marginRight: 8 }}>赛制:</span>
            <Tag color="blue">
              {this.state.list.data.isTeam}
            </Tag>
            <br />
            <br />
            <span style={{ marginRight: 8 }}>比赛类目:</span>
            <Tag color="blue">
              {this.state.list.data.contestType}
            </Tag>
            
          </Card>

          {/* <Card>
            <StepTag />
          </Card> */}
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
