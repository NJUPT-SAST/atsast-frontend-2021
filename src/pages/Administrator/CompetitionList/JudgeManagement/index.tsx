import React from 'react';
import { Typography, Row, Col, Card, Space, Button, Upload, Popconfirm, Table, Breadcrumb, PageHeader} from 'antd';
import { UploadOutlined, PlusOutlined, } from '@ant-design/icons'

const { Text } = Typography;

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
    render: () => (
      <Space size="middle">
        <a href="/admin/competition-list/judge-management/judge-authorization">授权</a>
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
    selectedRowKeys: [], 
    // list: {
    //   data: [
    //     {
    //       judgeName:"",
    //       judgeId:"",
    //       faculty:"",
    //       judgeStage:"",
    //       judgeCurr:"",
    //       judgeTotal:"",
    //     }
    //   ]
    // }
  };
  onSelectChange = selectedRowKeys => {
    // eslint-disable-next-line no-console
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
  };

  // componentDidMount() {
  //   fetch('https://yapi.sast.fun/mock/13/admin/judgelist', {
  //     method: 'get',
  //     // mode: 'cors',
  //   })
  //     .then(res => res.json())
  //     .then(json => {
  //       this.setState({ list: json });
  //       // console.log(this.state.list);
  //     })
  // }

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
      </Breadcrumb>
      <PageHeader
        className="site-page-header"
        title="评委管理"
        subTitle="评委管理页面"
      />
      <Card>
        <Row>
          <Col span={15}>
            <Text type="secondary">评委名单</Text>
          </Col>
          <Col span={9}>
            <Space size={'middle'}>
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
    </div>
  );
}

export default JudgeManagement;