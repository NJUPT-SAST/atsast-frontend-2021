import React, { useEffect, useState } from 'react';
import { Card, Input, Space, Radio, Pagination, Select, Carousel, Collapse, Row, Col } from 'antd';
import type { SelectProps } from 'antd/es/select';
import CompetitionCard from '@/components/CompetitionCard';
import axios from 'axios';
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

function Name(){
  const [data,setData]=useState(0);

  useEffect(() => {
    async function fetchData() {
      const result = await axios('https://yapi.sast.fun/mock/13/user/selfinfo')
      setData(result.data.data.realName);
      // eslint-disable-next-line no-console
      console.log(result);
    }
    fetchData();
  }, []);

  return (
    <Col></Col>
  );
}

export default (): React.ReactNode => {
  return (
    <div>
      <Carousel autoplay effect="fade">
        <div className="pic">
          <img src="https://cdn.jsdelivr.net/gh/moroshima/CDN-Repository@0.4/Background/01.jpg" />
        </div>
        <div className="pic">
          <img src="https://cdn.jsdelivr.net/gh/moroshima/CDN-Repository@0.4/Background/02.jpg" />
        </div>
        <div className="pic">
          <img src="https://cdn.jsdelivr.net/gh/moroshima/CDN-Repository@0.4/Background/03.jpg" />
        </div>
        <div className="pic">
          <img src="https://cdn.jsdelivr.net/gh/moroshima/CDN-Repository@0.4/Background/04.jpg" />
        </div>
        <div className="pic">
          <img src="https://cdn.jsdelivr.net/gh/moroshima/CDN-Repository@0.4/Background/05.jpg" />
        </div>
      </Carousel>
      <Row style={{ height: '16px' }}></Row>
      <Card>
        <Space direction="horizontal">
          <Search
            placeholder="input search text"
            allowClear
            enterButton="Search"
            size="middle"
            style={{ width: '400px' }}
            onSearch={onSearch}
          />
        </Space>
      </Card>
      <Row style={{ height: '16px' }}></Row>
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
            <Space>
            <text>主办方：</text>
            <Select
              mode="multiple"
              placeholder="Inserted are removed"
              style={{ width: '350px' }}
            />
            </Space>
          </Card>
          <Card bordered={false}>
            <Space>
            <text>主办方：</text>
            <Select
              mode="multiple"
              placeholder="Inserted are removed"
              style={{ width: '350px' }}
            />
            </Space>
          </Card>
        </Panel>
      </Collapse>
      <Row>
        <Col span={4}/>
        <Col span={16}>
          <CompetitionCard />
        </Col>
        <Col span={4}/>
      </Row>
      <Row style={{ height: '16px' }}></Row>
      <Pagination showQuickJumper defaultCurrent={2} total={500} onChange={onChange} />
    </div>
  );
};
