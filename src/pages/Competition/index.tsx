import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Card, Input, Space, Radio, Pagination, DatePicker, Button, Select, Typography, Divider } from 'antd';
import { useIntl, FormattedMessage } from 'umi';
import { AudioOutlined } from '@ant-design/icons';
import { SelectProps } from 'antd/es/select';
import debounce from 'lodash/debounce';

//搜索栏相关
const { Search } = Input;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1890ff',
    }}
  />
);

const onSearch = value => console.log(value);

export interface DebounceSelectProps<ValueType = any>
  extends Omit<SelectProps<ValueType>, 'options' | 'children'> {
  fetchOptions: (search: string) => Promise<ValueType[]>;
  debounceTimeout?: number;
}

//标签选择相关
const { Title } = Typography;

const options = [];
for (let i = 0; i < 100000; i++) {
  const value = `${i.toString(36)}${i}`;
  options.push({
    value,
    disabled: i === 10,
  });
}

function handleChange(value) {
  console.log(`selected ${value}`);
}

//日期选择相关
const { RangePicker } = DatePicker;

//底部翻页相关
function onChange(pageNumber) {
  console.log('Page: ', pageNumber);
}

export default (): React.ReactNode => {
  const intl = useIntl();
  return (
    <PageContainer>
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
          style={{ width: '25%' }}
          placeholder="Please select"
          defaultValue={[]}
          onChange={handleChange}
          options={options}
        />
      </Card>
      <Card>
        <text>时间范围：</text>
        <RangePicker />
        <Button type="link">不看已结束的</Button>
      </Card>
      <br />
      <Pagination showQuickJumper defaultCurrent={2} total={500} onChange={onChange} />
    </PageContainer>
  );
};
