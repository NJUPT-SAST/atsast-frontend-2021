import React from 'react';
import { Typography, Row, Col, Card, Button, Radio, Breadcrumb, PageHeader, Image, Space } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
const { Title, Paragraph, Text, Link } = Typography;

function EndVetting() {
  return (
    <div>
      <Breadcrumb>
        <Breadcrumb.Item>
          <a href="/admin">超级管理员</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="/admin/competition-list">比赛列表</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="/admin/competition-list/end-competition">结束审批</a>
        </Breadcrumb.Item>
      </Breadcrumb>
      <PageHeader
        className="site-page-header"
        title="结束审批"
        subTitle="结束审批"
      />
      <Card>
        <Row>
        <Space>
          <Text>图片</Text>
          <Image width={200} height={200} src="https://cdn.jsdelivr.net/gh/moroshima/CDN-Repository@0.4/Pixiv/71249655_p0.jpg"/>
          <Image width={200} height={200} src="https://cdn.jsdelivr.net/gh/moroshima/CDN-Repository@0.4/Pixiv/71249655_p0.jpg"/>
        </Space>
        </Row>
        <Row>
        <Space>
          <Text>视频</Text>
          <Button>查看</Button>
        </Space>
        </Row>
        <Row>
        <Space>
          <Text>推送链接</Text>
          <Button>链接1</Button>
          <Button>链接2</Button>
        </Space>
        </Row>
        <Row>
        <Space>
          <Text>报销材料</Text>
          <Button>下载</Button>
        </Space>
        </Row>
      </Card>
      <Card>
        <Button type="link" danger>打回</Button>
      </Card>
    </div>
  );
}

export default EndVetting;
