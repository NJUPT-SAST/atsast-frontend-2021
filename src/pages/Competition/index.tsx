import React from 'react';
import { Card, Input, Space, Radio, Pagination, Select, Carousel, Collapse, Row } from 'antd';
import type { SelectProps } from 'antd/es/select';
import CompetitionCard from '@/components/CompetitionCard';
import './index.less';

// 搜索栏相关
const { Search } = Input;

// 折叠菜单相关
const { Panel } = Collapse;

// eslint-disable-next-line no-console
const onSearch = (value: any) => console.log(value);

export interface DebounceSelectProps<ValueType = any>
  extends Omit<SelectProps<ValueType>, 'options' | 'children'> {
  fetchOptions: (search: string) => Promise<ValueType[]>;
  debounceTimeout?: number;
}

// 底部翻页相关
function onChange(pageNumber: any) {
  // eslint-disable-next-line no-console
  console.log('Page: ', pageNumber);
}

/* Row间Height（通用） */
const rowHeightStyle = {
  height: '16px',
};

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
      <CompetitionCard/>
      <Row style={rowHeightStyle}></Row>
      <Pagination showQuickJumper defaultCurrent={2} total={500} onChange={onChange} />
    </div>
  );
};
