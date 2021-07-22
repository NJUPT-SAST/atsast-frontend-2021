import React from 'react';
import { Col, Row, Space, Breadcrumb, PageHeader, Upload, Switch, Popover, Button, Card, Typography } from 'antd';
import { CheckCircleTwoTone } from '@ant-design/icons';

const { Text, Link } = Typography;

/* 以下是返回显示页面 */
function CompetitionState() {
  return (
    <div>
      <Breadcrumb>
        <Breadcrumb.Item>
          <a href="/admin">管理页</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="/admin/competition-list/">比赛列表</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="/admin/competition-list/competition-state">比赛状态</a>
        </Breadcrumb.Item>
      </Breadcrumb>
      <Card>
        <Text>导出材料</Text>
        <Button type="primary">导出报销所需材料</Button>
      </Card>
      <Card>
        <Row>提交材料</Row>
        <Row>
          <Text>比赛照片</Text>
          <CheckCircleTwoTone/>
          <Text>上传成功</Text>
          <Button type="primary" danger>删除</Button>
        </Row>
        <Row>
          <Text>比赛照片</Text>
          <CheckCircleTwoTone/>
          <Text>上传成功</Text>
          <Button type="primary" danger>删除</Button>
        </Row><Row>
          <Text>比赛照片</Text>
          <CheckCircleTwoTone/>
          <Text>上传成功</Text>
          <Button type="primary" danger>删除</Button>
        </Row><Row>
          <Text>比赛照片</Text>
          <CheckCircleTwoTone/>
          <Text>上传成功</Text>
          <Button type="primary" danger>删除</Button>
        </Row>
      </Card>
      <Button>提交审核</Button>
    </div>
  );
}

export default CompetitionState;
