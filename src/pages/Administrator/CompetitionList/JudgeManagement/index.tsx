import React from 'react';
import { Typography, Row, Col, Card, Space, Button, Upload, Popconfirm, Table} from 'antd';
const { Title, Paragraph, Text, Link } = Typography;
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { UploadOutlined, PlusOutlined, } from '@ant-design/icons'

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
  },
  {
    title: '学院',
    dataIndex: 'college',
  },
  {
    title: '评审进度',
    dataIndex: 'progress',
    sorter: (a, b) => (a.a/a.b) - (b.a/b.b),
  },
  {
    title: '状态',
    dataIndex: 'state',
    filters: [
      {
        text: '已完成',
        value: '已完成',
      },
      {
        text: '评审中',
        value: '评审中',
      },
      {
        text: '未开始',
        value: '未开始',
      },
      {
        text: '已关闭',
        value: '已关闭',
      },
    ],
    onFilter: (value, record) => record.state.indexOf(value) === 0,
  },
  {
    title: '工号',
    dataIndex: 'id',
  },
  {
    title: '操作',
    dataIndex: 'action',
    render: (text, record) => (
      <Space size="middle">
        <a>授权</a>
        |
        <a>删除</a>
      </Space>
    ),
  },
];

const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    college: 'huangx英才学院',
    a: `${i+1}`,
    b: `${i+5}`,
    progress: `${i+1}/${i+5}`,
    state: '评审中',
    id: `${20030101+i}`,
  });
}

class App extends React.Component {
  state = {
    selectedRowKeys: [], // Check here to configure the default column
  };
  onSelectChange = selectedRowKeys => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
  };
  render() {
    const { selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
      selections: [
        Table.SELECTION_ALL,
        Table.SELECTION_INVERT,
        Table.SELECTION_NONE,
      ],
    };
    return <Table rowSelection={rowSelection} columns={columns} dataSource={data} />;
  }
}

function JudgeManagement() {
  return (
    <PageHeaderWrapper title={<Title level={2}>评委管理</Title>}>
      <Card>
        <Row>
          <Col span={15}>
            <Text type="secondary">评委名单</Text>
          </Col>
          <Col span={9}>
            <Space  size={'middle'}>
              <Button type="primary">勾选评审材料</Button>
              <Upload>
                <Button>
                  <UploadOutlined /> 导入
                </Button>
              </Upload>
              <Button type="primary">
                <PlusOutlined /> 新建
              </Button>
              <Popconfirm title="你确定要删除吗？" okText="是" cancelText="否">
                <Button type="primary" danger>删除选中</Button>
              </Popconfirm>
            </Space>
          </Col>
        </Row>
        <br />
        <App />
      </Card>
    </PageHeaderWrapper>
  );
}

export default JudgeManagement;