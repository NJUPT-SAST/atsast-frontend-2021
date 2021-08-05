import React from 'react';
import { Card, Input, Space, Radio, Select, Carousel, Collapse, Row, List, Avatar, Col, } from 'antd';
import type { SelectProps } from 'antd/es/select';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
import './index.less';

// 搜索栏相关
const { Search } = Input;


// eslint-disable-next-line no-console
const onSearch = (value: any) => console.log(value);

export interface DebounceSelectProps<ValueType = any>
  extends Omit<SelectProps<ValueType>, 'options' | 'children'> {
  fetchOptions: (search: string) => Promise<ValueType[]>;
  debounceTimeout?: number;
}

const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    href: '/competition/detail',
    title: `XXXX比赛 ${i}`,
    description:
      'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  });
}



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

        <Space>
          <text>所属类目：</text>
          <Radio.Group buttonStyle="solid" defaultValue="a" size="middle">
            <Radio.Button value="a">全部</Radio.Button>
            <Radio.Button value="b">理工类</Radio.Button>
            <Radio.Button value="c">社科类</Radio.Button>
            <Radio.Button value="d">综合类</Radio.Button>
          </Radio.Group>
        </Space>

      </Card>
      <Card>
        <Space>
          <span>
            <text>其他选项：</text>
          </span>
          <span>
            <text>主办方：</text>
          </span>
          <span>
            <Select
              mode="multiple"
              placeholder="114514"
              style={{ width: '150px' }}
            >
            </Select>
          </span>
          <span>
            <text>主办方：</text>
          </span>
          <span>
            <Select
              mode="multiple"
              placeholder="114514"
              style={{ width: '150px' }}
            >
            </Select>
          </span>
        </Space>
      </Card>
      <Card>
        <List
          itemLayout="vertical"
          size="small"
          pagination={{
            onChange: page => {
              console.log(page);
            },
            pageSize: 3,
          }}
          dataSource={listData}
          renderItem={item => (
            <List.Item
              key={item.title}

              extra={
                <img
                  width={272}
                  alt="logo"
                  src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                />
              }
            >
              <List.Item.Meta
                title={<a href={item.href}>{item.title}</a>}
                description={item.description}
              />
              {item.content}
            </List.Item>
          )}
        />
      </Card>

    </div>
  );
};
