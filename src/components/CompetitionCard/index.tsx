import { Card, Row, Space, Image, Typography, Button } from 'antd';
import './index.less';

const { Title } = Typography;

// eslint-disable-next-line @typescript-eslint/ban-types
const CompetitionCard: React.FunctionComponent<{
  data: {
    contestId: 0,
    masterId: 0,
    contestName: "",
    description: "",
    currAdmin: 0,
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
    minInstru
  }
}> = ({data}) => {
  return (
    <Card bordered={false} style={{ width: '900px' }}>
      <Row>
        <Space direction="horizontal" size={50}>
          <Image
            width={240}
            height={160}
            src="https://cdn.jsdelivr.net/gh/moroshima/CDN-Repository@0.4/Pixiv/71249655_p0.jpg"
          />
          <Space direction="vertical" size={12} style={{ width: '420px' }}>
            <Title level={3}>{data.contestName}</Title>
            <text>个人赛</text>
            <text>报名时间：</text>
            <text>主办方：</text>
          </Space>
          <Button type="primary" size="large">
            报名
          </Button>
        </Space>
      </Row>
    </Card>
  );
};

export default CompetitionCard;
