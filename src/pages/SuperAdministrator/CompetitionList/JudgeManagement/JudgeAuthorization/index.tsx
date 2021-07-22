import React from 'react';
import { Typography, Row, Card, Space, Button, Table, Breadcrumb, PageHeader } from 'antd';

const { Text } = Typography;

const columns = [
  {
    title: '作品类别',
    dataIndex: 'workCategory',
  },
  {
    title: '作品名称',
    dataIndex: 'workName',
  },
  {
    title: '学科类别',
    dataIndex: 'subjectCategory',
  },
  {
    title: '材料提交',
    dataIndex: 'state',
    filters: [
      {
        text: '已提交',
        value: '已提交',
      },
      {
        text: '评审中',
        value: '评审中',
      },
      {
        text: '未提交',
        value: '未提交',
      },
      {
        text: '已关闭',
        value: '已关闭',
      },
    ],
    onFilter: (value, record) => record.state.indexOf(value) === 0,
  },
  {
    title: '第一作者学号',
    dataIndex: 'schoolNumber',
  },
  {
    title: '组别',
    dataIndex: 'constituencies',
  },
];

const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    workCategory: `智能科学与技术 ${i}`,
    workName: 'PiCpo，yyds!',
    subjectCategory: '理科',
    state: '评审中',
    schoolNumber: `B${20040101 + i}`,
    constituencies: '本科组',
  });
}

class App extends React.Component {
  state = {
    selectedRowKeys: [], // Check here to configure the default column
  };
  onSelectChange = (selectedRowKeys) => {
    // eslint-disable-next-line no-console
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
  };
  render() {
    const { selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
      selections: [Table.SELECTION_ALL, Table.SELECTION_INVERT, Table.SELECTION_NONE],
    };
    return <Table rowSelection={rowSelection} columns={columns} dataSource={data} />;
  }
}

/* Row间Height（通用） */
const rowHeightStyle = {
  height: '16px',
};

function JudgeManagement() {
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
          <a href="/admin/competition-list/judge-management">评委管理</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="/admin/competition-list/judge-management/judge-authorization">评委授权</a>
        </Breadcrumb.Item>
      </Breadcrumb>
      <PageHeader className="site-page-header" title="评委授权" subTitle="评委授权页面" />
      <Card>
        <Row>
          <Text type="secondary">评委名单</Text>
        </Row>
        <Row style={rowHeightStyle}></Row>
        <Row>
          <Space size={'middle'}>
            <Text strong>一键勾选：</Text>
            <Button type="primary">自然科学类学术论文</Button>
            <Button type="primary">哲学社会科学类社会调查报告和学术论文</Button>
          </Space>
        </Row>
        <br />
        <App />
      </Card>
    </div>
  );
}

export default JudgeManagement;
