import React from 'react';
import { Avatar, Divider, Tooltip } from 'antd';
import { UserOutlined, AntDesignOutlined } from '@ant-design/icons';
import { Descriptions, Badge } from 'antd';
import { Steps } from 'antd';
import { SolutionOutlined, LoadingOutlined, SmileOutlined } from '@ant-design/icons';
import { Card } from 'antd';
import { Alert } from 'antd';

const { Step } = Steps;
//这里是比赛状态页面
//功能有：队伍成员，队伍参赛信息，比赛时间轴，作品类别，提交信息和提交文件功能
const Demo = () => (
  <>
    <Avatar.Group>
      <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
      <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>
      <Tooltip title="Ant User" placement="top">
        <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
      </Tooltip>
      <Avatar style={{ backgroundColor: '#1890ff' }} icon={<AntDesignOutlined />} />
    </Avatar.Group>
   
  </>
);



export default (): React.ReactNode => {
  return (
  
    <div >
        //比赛队伍头像
      <div className="Team-head">
      <Demo />
      </div>
      <div className="card">
      <Card style={{ width: 300 }}>
         <p><h4>队长：<span className="capital"> MISS.CHEN</span></h4></p>
         <p>队员：六边形学picpo</p>
         <p>队员： 88888</p>
         <p>队员： 88887</p>
          </Card>,
      </div>
      //比赛队伍表格
      <div className="team-information">
      <Descriptions title="比赛信息" layout="比赛信息" bordered>
      <Descriptions.Item label="作品名称">摸鱼速成和进阶指南</Descriptions.Item>
      <Descriptions.Item label="团队名称">休闲学第一小队</Descriptions.Item>
      <Descriptions.Item label="指导老师">王二蛋</Descriptions.Item>
      <Descriptions.Item label="作品类别">科学研究</Descriptions.Item>
      </Descriptions>,
      </div>
      <div className="Step">
        //这里是进度条
        <Steps>
        <Step status="finish" title="比赛报名中" icon={<UserOutlined />} />
        <Step status="finish" title="比赛审查中" icon={<SolutionOutlined />} />
        <Step status="process" title="正在比赛中" icon={<LoadingOutlined />} />
        <Step status="wait" title="比赛审计中" icon={<SmileOutlined />} />
        <Step status="wait" title="比赛结果已经公示" icon={<SmileOutlined />} />
        </Steps>,
      </div>
      /*提交栏目表 */
      <div className="submit">
      <Alert message="提交成功" type="success"showIcon closable />
      <Alert message="正在提交哦" type="info" showIcon closable />
      <Alert message="提交不符合规范" type="warning" showIcon closable />
      <Alert message="提交失败" type="error" showIcon closable />
      </div>
   
    </div>
 

    );
  };



