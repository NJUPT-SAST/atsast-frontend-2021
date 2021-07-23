import React from 'react';
import {
  Card,
  Input,
  Space,
  Radio,
  Pagination,
  DatePicker,
  Button,
  Select,
  Typography,
  Carousel,
  Collapse,
  Col,
  Row,
} from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import type { SelectProps } from 'antd/es/select';
import type { OptionsType } from 'rc-select/lib/interface';
import './index.less';

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

const options = ['test1','test2']

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

// const { selectedItems } = this.state;
// const filteredOptions = OPTIONS.filter(o => !selectedItems.includes(o));

export default (): React.ReactNode => {
  return (
    <div>
      <Carousel autoplay effect="fade">
        <div className="pic">
          <img src="https://cdn.jsdelivr.net/gh/moroshima/CDN-Repository@0.4/Background/01.jpg"></img>
        </div>
        <div className="pic">
          <img src="https://cdn.jsdelivr.net/gh/moroshima/CDN-Repository@0.4/Background/02.jpg"></img>
        </div>
        <div className="pic">
          <img src="https://cdn.jsdelivr.net/gh/moroshima/CDN-Repository@0.4/Background/03.jpg"></img>
        </div>
        <div className="pic">
          <img src="https://cdn.jsdelivr.net/gh/moroshima/CDN-Repository@0.4/Background/04.jpg"></img>
        </div>
        <div className="pic">
          <img src="https://cdn.jsdelivr.net/gh/moroshima/CDN-Repository@0.4/Background/05.jpg"></img>
        </div>
      </Carousel>
      <Row style={rowHeightStyle}></Row>
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
        <text>所属类目：</text>
        <Radio.Group buttonStyle="solid" defaultValue="a" size="middle">
          <Radio.Button value="a">全部</Radio.Button>
          <Radio.Button value="b">理工类</Radio.Button>
          <Radio.Button value="c">社科类</Radio.Button>
          <Radio.Button value="d">综合类</Radio.Button>
        </Radio.Group>
      </Card>
      <Collapse ghost bordered={false}>
        <Panel header="其他选项" key="1">
          <Card bordered={false}>
            <text>主办方：</text>
            <Select
        mode="multiple"
        placeholder="Inserted are removed"
        style={{ width: '100%' }}
      >
      </Select>
          </Card>
          <Card bordered={false}>
            <text>主办方：</text>
            <Select
        mode="multiple"
        placeholder="Inserted are removed"
        style={{ width: '100%' }}
      >
      </Select>
          </Card>
        </Panel>
      </Collapse>
      <Row style={rowHeightStyle}></Row>
      <Pagination showQuickJumper defaultCurrent={2} total={500} onChange={onChange} />
    </div>
  );
};
