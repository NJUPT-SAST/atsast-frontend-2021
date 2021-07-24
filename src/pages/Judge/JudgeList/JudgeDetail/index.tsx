import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Pagination, Space, Card,Input,Form,  DatePicker,
  Button,
  Typography,
  Row,
  Col,
} from 'antd';

import { AudioOutlined } from '@ant-design/icons';
import { SelectProps } from 'antd/es/select';

//表单组件相关
const onFinish = (values: any) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};

export interface DebounceSelectProps<ValueType = any>
  extends Omit<SelectProps<ValueType>, 'options' | 'children'> {
  fetchOptions: (search: string) => Promise<ValueType[]>;
  debounceTimeout?: number;
}

// 标签选择相关
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
} //这步是在？

// 底部翻页相关
function onChange(pageNumber) {
  console.log('Page: ', pageNumber);
}

/* Row间Height（通用） */
const rowHeightStyle = {
  height: '16px',
};

const bottomHeightStyle = {
  height: '35px',
};

const { TextArea } = Input;

export default (): React.ReactNode => {
  return (
    <PageContainer>
      <Card title="材料">
        <div id="materialInformation">{/* //此处存放材料        */}</div>
      </Card>
      <div style={rowHeightStyle}></div>
      <Card title="评审">
        <Form
          name="basic"
          labelCol={{ span: 2 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: false }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="打分："
            name="score"
            rules={[{ required: true, message: '1~100内整数' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item label="评语：" name="comment" rules={[{ required: true, message: ' ' }]}>
            <TextArea rows={4} />
          </Form.Item>

          {/* <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item> */}
        </Form>
      </Card>
      <div style={rowHeightStyle}></div>
      <Card>
        <Row>
          <Col span={2}>
            <Button type="link" block>
              上一个
            </Button>
          </Col>
          <Col span={20}></Col>
          <Col span={2}>
            {' '}
            <Button type="link" block>
              {/* 该部分还要实现跳转到下一个页面 */}
              下一个
            </Button>
          </Col>
        </Row>
      </Card>
    </PageContainer>
  );
};
