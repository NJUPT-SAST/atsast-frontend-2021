import { Card, Row, Col, Image } from 'antd';

const CompetitionCard: React.FC<unknown> = () => {
  return (
    <Card bordered={false}>
      <Row>
        <Col span={14}>
          <Card bordered={false}>
            <text>left</text>
          </Card>
        </Col>
        <Col span={10}>
          <Card bordered={false}>
          <Image
            width={300}
            height={"auto"}
            src="https://cdn.jsdelivr.net/gh/moroshima/CDN-Repository@0.4/Pixiv/71249655_p0.jpg"
          />
          </Card>
        </Col>
      </Row>
    </Card>
  );
};

export default CompetitionCard;