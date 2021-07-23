import React from 'react';
import { Card, Space, Table, Breadcrumb, PageHeader } from 'antd';

const columns = [
  {
    title: '作品名称',
    dataIndex: 'workName',
  },
  {
    title: '操作',
    dataIndex: 'action',
    render: () => (
      <Space size="middle">
        <a href="/judge/judge-list/judge-detail">评审</a>
      </Space>
    ),
  },
];

const data: readonly any[] | undefined = [];
// eslint-disable-next-line no-plusplus
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    workName: `PiCpo，yyds! ${i}`,
  });
}

class App extends React.Component {
  state = {
    showHeader: false,
  };
  render() {
    return <Table {...this.state} columns={columns} dataSource={data} />;
  }
}

function JudgeList() {
  return (
    <div>
      <Breadcrumb>
        <Breadcrumb.Item>
          <a href="/judge">评审页</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="/judge/judge-list">评审列表</a>
        </Breadcrumb.Item>
      </Breadcrumb>
      <PageHeader className="site-page-header" title="评审列表" subTitle="评审列表页面" />
      <Card>
        <App/>
      </Card>
    </div>
  );
}

export default JudgeList;
