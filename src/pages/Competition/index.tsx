import React from 'react';
import { Card, Input, Space, Radio, Pagination, DatePicker, Button, Select, Typography, Carousel, Collapse, Col, Row } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import type { SelectProps } from 'antd/es/select';
import type { OptionsType } from 'rc-select/lib/interface';
import ProLayout from '@ant-design/pro-layout';
import RightContent from '@/components/RightContent'

const defaultProps = {
  routes: [
    {
      path: '/user',
      layout: false,
      routes: [
        {
          path: '/user',
          routes: [
            {
              name: 'login',
              path: '/user/login',
              component: './User/login',
            },
          ],
        },
      ],
    },
    {
      path: '/welcome',
      name: 'welcome',
      icon: 'smile',
      component: './Welcome',
    },
    {
      path: '/competition',
      name: '比赛',
      layout: false,
      icon: 'flag',
      component: './Competition',
    },
    {
      path: '/competition/detail',
      component: './Competition/Detail',
    },
    {
      path: '/competition/detail/state-message',
      component: './Competition/Detail/StateMessage',
    },
    {
      path: '/competition/detail/state-file',
      component: './Competition/Detail/StateFile',
    },
    {
      path: '/lecture',
      name: '授课',
      icon: 'bulb',
      component: './Lecture',
    },
    {
      path: '/personalInformation',
      name: '个人信息',
      icon: 'bulb',
      component: './PersonalInformation',
    },
    {
      path: '/personalInformation/SignUp',
      component: './PersonalInformation/SignUp',
    },
    {
      path: '/admin',
      name: 'admin',
      icon: 'crown',
      access: 'canAdmin',
      routes: [
        {
          path: '/admin/dash-board',
          name: '仪表盘',
          icon: 'dashboard',
          component: './Administrator/DashBoard',
        },
        {
          path: '/admin/create-competition',
          name: '创建比赛',
          icon: 'form',
          component: './Administrator/CreateCompetition',
        },
  
        {
          path: '/admin/competition-list',
          name: '比赛列表',
          icon: 'ordered-list',
          component: './Administrator/CompetitionList',
        },
        {
          path: '/admin/competition-list/competition-state',
          component: './Administrator/CompetitionList/CompetitionState',
        },
        {
          path: '/admin/competition-list/judge-management',
          component: './Administrator/CompetitionList/JudgeManagement',
        },
        {
          path: '/admin/competition-list/judge-management/judge-authorization',
          component: './Administrator/CompetitionList/JudgeManagement/JudgeAuthorization',
        },
      ],
    },
    {
      name: 'list.table-list',
      icon: 'table',
      path: '/list',
      component: './TableList',
    },
  
    {
      path: '/',
      redirect: '/welcome',
    },
    {
      component: './404',
    },
  ]
};

// 跑马灯格式
const contentStyle = {
  height: '450px',
  color: '#fff',
  lineHeight: '450px', // 内嵌字符height
  textAlign: 'center',
  background: '#364d79',
};

// 搜索栏相关
const { Search } = Input;

// 折叠菜单相关
const { Panel } = Collapse;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1890ff',
    }}
  />
);

// eslint-disable-next-line no-console
const onSearch = (value: any) => console.log(value);

export interface DebounceSelectProps<ValueType = any>
  extends Omit<SelectProps<ValueType>, 'options' | 'children'> {
  fetchOptions: (search: string) => Promise<ValueType[]>;
  debounceTimeout?: number;
}

// 标签选择相关
const { Title } = Typography;

const options: OptionsType | { value: string; disabled: boolean }[] | undefined = [];
// eslint-disable-next-line no-plusplus
for (let i = 0; i < 100000; i++) {
  const value = `${i.toString(36)}${i}`;
  options.push({
    value,
    disabled: i === 10,
  });
}

function handleChange(value: any) {
  // eslint-disable-next-line no-console
  console.log(`selected ${value}`);
}

// 日期选择相关
const { RangePicker } = DatePicker;

// 底部翻页相关
function onChange(pageNumber: any) {
  // eslint-disable-next-line no-console
  console.log('Page: ', pageNumber);
}

// 赛程相关
const App = () => (
  <Radio.Group name="radiogroup" defaultValue={1}>
    <Radio value={1}>A</Radio>
    <Radio value={2}>B</Radio>
  </Radio.Group>
);

/* Row间Height（通用） */
const rowHeightStyle = {
  height: '16px',
};

export default (): React.ReactNode => {
  return (
    <div>
      <ProLayout
        navTheme="dark"
        primaryColor='#1890ff'
        layout="top"
        colorWeak={false}
        headerRender={()=> (
          <RightContent/>
        )}
      ></ProLayout>
      <Carousel autoplay>
        <div>
          <h3 style={contentStyle}>PicLink1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>PicLink2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>Picklink3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>Piclink4</h3>
        </div>
      </Carousel>
      <Card>
        <Space direction="horizontal">
          <text>搜索：</text>
          <Search
            placeholder="input search text"
            allowClear
            enterButton="Search"
            size="middle"
            onSearch={onSearch}
          />
        </Space>
      </Card>
      <Card>
        <Collapse ghost>
          <Panel header="筛选" key="1">
            <Card>
              <text>所属类目：</text>
              <Radio.Group defaultValue="a" size="middle">
                <Radio.Button value="a">Hangzhou</Radio.Button>
                <Radio.Button value="b">Shanghai</Radio.Button>
                <Radio.Button value="c">Beijing</Radio.Button>
                <Radio.Button value="d">Chengdu</Radio.Button>
              </Radio.Group>
            </Card>
            <Card>
              <text>主办方：</text>
              <Select
                mode="multiple"
                style={{ width: '30%' }}
                placeholder="Please select"
                defaultValue={[]}
                onChange={handleChange}
                options={options}
              />
            </Card>
            <Card>
              <text>赛程：</text>
              <App />
            </Card>
            <Card>
              <text>时间范围：</text>
              <RangePicker />
              <Button type="link">不看已结束的</Button>
            </Card>
          </Panel>
        </Collapse>
      </Card>
      <Card>
        <Pagination showQuickJumper defaultCurrent={2} total={500} onChange={onChange} />
      </Card>
    </div>
  );
};
