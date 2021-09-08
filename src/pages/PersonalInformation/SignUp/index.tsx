import React from 'react';
import { Card, Col, Divider, Row } from 'antd';
import { Form, Input, Button, Checkbox } from 'antd';
import { Space } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Select } from 'antd';

 
const Demo = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Teamname"
        name="队伍名称"
        rules={[{ required: true, message: '请输入队伍名称!' }]}
      >
        <Input />
      </Form.Item>

      { /* submit还是可以用一下的 */}

    </Form>
  );
};

const Demo1 = () => {
  const onFinish = values => {
    console.log('Received values of form:', values);
  };

  return (
    <Form name="dynamic_form_nest_item" onFinish={onFinish} autoComplete="off">
      <Form.List name="users">
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, fieldKey, ...restField }) => (
              <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                <Form.Item
                  {...restField}
                  name={[name, 'first']}
                  fieldKey={[fieldKey, 'first']}
                  rules={[{ required: true, message: '成员姓名' }]}
                >
                  <Input placeholder="First Name" />
                </Form.Item>
                <Form.Item
                  {...restField}
                  name={[name, 'last']}
                  fieldKey={[fieldKey, 'last']}
                  rules={[{ required: true, message: '加入状态' }]}
                >
                  <Input placeholder="Last Name" />
                </Form.Item>
                <MinusCircleOutlined onClick={() => remove(name)} />
              </Space>
            ))}
            <Form.Item>
              <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
               添加一位新成员
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
    </Form>
  );
};
// eslint-disable-next-line no-lone-blocks
{/* 指导老师 */}
const Demo2 = () => {
  const onFinish = values => {
    console.log('Received values of form:', values);
  };

  return (
    <Form name="dynamic_form_nest_item" onFinish={onFinish} autoComplete="off">
      <Form.List name="users">
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, fieldKey, ...restField }) => (
              <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                <Form.Item
                  {...restField}
                  name={[name, '姓名']}
                  fieldKey={[fieldKey, '姓名']}
                  rules={[{ required: true, message: '请输入姓名' }]}
                >
                  <Input placeholder="姓名" />
                </Form.Item>
                <Form.Item
                  {...restField}
                  name={[name, '工号']}
                  fieldKey={[fieldKey, '工号']}
                  rules={[{ required: true, message: '请输入工号' }]}
                >
                  <Input placeholder="工号" />
                </Form.Item>
                <MinusCircleOutlined onClick={() => remove(name)} />
              </Space>
            ))}
            <Form.Item>
              <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
               添加一位指导老师
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
     
    </Form>
  );
};

const { Option } = Select;

function onChange(value: any) {
  console.log(`selected ${value}`);
}

function onBlur() {
  console.log('blur');
}

function onFocus() {
  console.log('focus');
}

function onSearch(val) {
  console.log('search:', val);
}


function SignUp() {
  return (
    <div>
       <Divider><h1>报名信息</h1></Divider>
      
      <Card>
        <Row>
        <Col span={8}>
          
        </Col>
        <Col span={8}>
        <Demo />
        </Col>
        <Col span={8}>
          
        </Col>
        </Row>
        
      </Card>

      <Card>
      <Divider><h1>团队信息</h1></Divider>
        <Row>
        <Col span={8}>

        </Col>
         <Col span={8}>
         <Demo1 />
         </Col>
        </Row>
      </Card>
      <Card>
        <Row>
        <Col span={8}>
          
        </Col>
        <Col span={8}>
          
        </Col>
        </Row>
        
      </Card>
 
      <Card>
      <Divider><h1>指导老师</h1></Divider>
        <Row>
        <Col span={8}>

        </Col>
         <Col span={8}>
         <Demo2 />
         </Col>
        </Row>
      </Card>
      <Card>
      <Row>
        <Col   span={8}>
        <h1>作品类别</h1>
        <Select
      showSearch
      style={{ width: 200 }}
      placeholder="选择组别"
      optionFilterProp="children"
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      onSearch={onSearch}
      filterOption={(input, option) =>
        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }
    >
      <Option value="jack">不限制</Option>
      <Option value="lucy">科技创新</Option>
      <Option value="tom">学科竞赛</Option>
      </Select>
        </Col>
        <Col   span={9}>
        <h1>组别</h1>
      <Select
      showSearch
      style={{ width: 200 }}
      placeholder="选择组别"
      optionFilterProp="children"
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      onSearch={onSearch}
      filterOption={(input, option) =>
        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }
    >
      <Option value="jack">不限制</Option>
      <Option value="lucy">科技创新</Option>
      <Option value="tom">学科竞赛</Option>
      </Select>
        </Col>
        <Col   span={7}>
        <h1>学科类别</h1>
        <Select
      showSearch
      style={{ width: 200 }}
      placeholder="选择组别"
      optionFilterProp="children"
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      onSearch={onSearch}
      filterOption={(input, option) =>
        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }
    >
      <Option value="jack">不限制</Option>
      <Option value="lucy">信息类</Option>
      <Option value="tom">文学类</Option>
      </Select>
        </Col>
      
      </Row>
      
      </Card>

      <Card>
        <Row>
          < Col span={11}>
          </Col>
          < Col span={8}>
          <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
          </Col>
          < Col span={5}>
          </Col>
        </Row>
     
      </Card>      
    </div>
  );
}

export default SignUp;
