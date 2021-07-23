import React from 'react';
import { Form, Input, Button, Row } from 'antd';
/**/import { Card } from 'antd';
import Col from 'antd/es/grid/col';
import { Radio } from 'antd';
import { Select } from 'antd';
/* 比赛流程-多元复合 */
import { DatePicker } from 'antd';
import { Space } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

/* 上传引入 */
import { Upload, message } from 'antd';
import { InboxOutlined } from '@ant-design/icons';

/**/
import { Typography, Breadcrumb, PageHeader, } from 'antd';
/* 限定团队最大最小人数 */
import { InputNumber } from 'antd';



const Demo = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  // eslint-disable-next-line no-lone-blocks
  {/* 以下const是比赛主信息 */ }
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
        label="比赛名称"
        name="GameName"
        rules={[{ required: true, message: 'Please input game name!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="主办方"
        name="sponsor"
        rules={[{ required: true, message: 'Please input sponsor name!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="承办方"
        name="contractor"
        rules={[{ required: true, message: 'Please input contractor name!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="协办方"
        name="co-organizer"
        rules={[{ required: true, message: 'Please input co-organizer name!' }]}
      >
        <Input />
      </Form.Item>
    </Form>
  );
};

// eslint-disable-next-line no-lone-blocks
{/* 以下const是比赛类别选择 */ }
const App1 = () => {
  const [value, setValue] = React.useState(1);

  const onChange = e => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  return (
    <Radio.Group onChange={onChange} value={value}>
      <Radio value={1}>个人</Radio>
      <Radio value={2}>团队</Radio>
    </Radio.Group>

  );
};
// eslint-disable-next-line no-lone-blocks
{/* 以下const是信息选择框(多选) */ }
const { Option } = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
}
// eslint-disable-next-line no-lone-blocks
{/* 以下const是信息选择框(单选选)，选择指导老师 */ }
const App2 = () => {
  const [value, setValue] = React.useState(1);

  const onChange = e => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  return (
    <Radio.Group onChange={onChange} value={value}>
      <Radio value={1}>存在</Radio>
      <Radio value={2}>不存在</Radio>
    </Radio.Group>

  );
};
// eslint-disable-next-line no-lone-blocks
{/* 以下const是信息选择框(单选选)，选择作品类别 */ }
const App3 = () => {
  const [value, setValue] = React.useState(1);

  const onChange = e => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  return (
    <Radio.Group onChange={onChange} value={value}>
      <Radio value={1}>科学科技类</Radio>
      <Radio value={2}>创新竞赛类</Radio>
    </Radio.Group>

  );
};
// eslint-disable-next-line no-lone-blocks
{/* 以下const是信息选择框(单选选)，选择团队组别 */ }
const App4 = () => {
  const [value, setValue] = React.useState(1);

  const onChange = e => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  return (
    <Radio.Group onChange={onChange} value={value}>
      <Radio value={1}>设置</Radio>
      <Radio value={2}>不设置</Radio>
    </Radio.Group>

  );
};
// eslint-disable-next-line no-lone-blocks
{/* 以下是比赛流程页面 */ }
const Demo1 = () => {
  const onFinish = values => {
    console.log('Received values of form:', values);
  };
  const { RangePicker } = DatePicker;
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
                  rules={[{ required: true, message: '设定比赛流程初' }]}
                >
                  <Input placeholder="设定比赛流程" />
                </Form.Item>
                <Form.Item

                >
                  <RangePicker showTime />
                </Form.Item>
                <MinusCircleOutlined onClick={() => remove(name)} />
              </Space>
            ))}
            <Form.Item>
              <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                新建比赛流程
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
      
    </Form>
  );
};
// eslint-disable-next-line no-lone-blocks
{/* 以下是上传页面 */ }
const { Dragger } = Upload;

const props = {
  name: 'file',
  multiple: true,
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  onChange(info) {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log('Dropped files', e.dataTransfer.files);
  },
};
// eslint-disable-next-line no-lone-blocks
{/* 以下是大文本输入页面 */ }
const { TextArea } = Input;
// eslint-disable-next-line no-lone-blocks
{/* 以下是最大最小人数输入页面 */ }
const Demo6 = () => {
  const [value, setValue] = React.useState<string | number>('99');

  return (
    <Space>
      <text>最少人数</text>
      <InputNumber min={1} max={10} value={value} onChange={setValue} />
    </Space>
  );
};
const Demo7 = () => {
  const [value, setValue] = React.useState<string | number>('99');

  return (
    <Space>
       <text>最多人数</text>
      <InputNumber min={1} max={10} value={value} onChange={setValue} />
    </Space>
  );
};

// eslint-disable-next-line no-lone-blocks
{/* 以下是返回页面 */ }
function CreatCompetition() {
  return (
    <div>
       <Breadcrumb>
      <Breadcrumb.Item>Home</Breadcrumb.Item>
      <Breadcrumb.Item>
        <a href="http://localhost:8000/competition">比赛</a>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <a href="http://localhost:8000/admin">管理员</a>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <a href="http://localhost:8000/admin/competition-list">比赛列表</a>
      </Breadcrumb.Item>
      <Breadcrumb.Item>比赛编辑</Breadcrumb.Item>
    </Breadcrumb>
      <PageHeader
        className="site-page-header"
        title="比赛编辑"
        subTitle="编辑比赛页面"
      />
      <Card hoverable>
        <Row>
          <Col span={40}>
            <div className="form">

              <Demo />
            </div>
          </Col>
        </Row>
      </Card>
      <Card hoverable className="saizhi" style={{ width: 'auto' }}>
        <Row>
          <Col span={11}>
            <h3>赛制</h3>
          </Col>
          <App1 />
        </Row>
      </Card>
      <div className="choice button">
        <Card hoverable className="nianji">
          <Row>
            <Col span={11}>
              <h3>是否限制参赛年级</h3>
            </Col>
            <Col span={12}>
              <Select
                mode="multiple"
                style={{ width: '100%' }}
                placeholder="请选择参赛年纪"
                defaultValue={['大二']}
                onChange={handleChange}
                optionLabelProp="label"
              >
                <Option value="大一" label="大一">
                  <div className="demo-option-label-item">

                    本科生大一
                  </div>
                </Option>
                <Option value="大二" label="大二">
                  <div className="demo-option-label-item">

                    本科生大二
                  </div>
                </Option>
                <Option value="大三" label="大三">
                  <div className="demo-option-label-item">

                    本科生大三
                  </div>
                </Option>
                <Option value="大四" label="大四">
                  <div className="demo-option-label-item">

                    本科生大四
                  </div>
                </Option>
                <Option value="研一" label="研一">
                  <div className="demo-option-label-item">
                    研究生一年级
                  </div>
                </Option>
                <Option value="研二" label="研二">
                  <div className="demo-option-label-item">
                    研究生二年级
                  </div>
                </Option>
                <Option value="研三" label="研三">
                  <div className="demo-option-label-item">
                    研究生三年级
                  </div>
                </Option>
              </Select>
            </Col>
          </Row>
        </Card>

        <Card hoverable >
          <Row>
            <Col span={11}>
              <h3>是否存在指导老师</h3>
            </Col>
            <Col>
              <App2 />
            </Col>
          </Row>
        </Card>
        <Card hoverable>
          <Row>
            <Col span={11}>
              <h3>是否设置作品类别</h3>
            </Col>
            <Col>
              <App3 />
            </Col>
          </Row>
        </Card>
        <Card hoverable>
          <Row>
            <Col span={8}>
              <h3>是否存设置团队组别</h3>
            </Col>
            <Col span={8}>
              <App4 />
            </Col>
            <Col>
             <Demo6 /> <Demo7/>

            </Col>
          </Row>
        </Card>
      </div>

      {/* 这里是比赛流程页面 */}
      <Card hoverable>
        <h3>比赛流程</h3>
        <Demo1 />
      </Card>

      {/* 这里是上传比赛策划案 */}
      <Card hoverable>
        <h3>比赛策划案上传</h3>
        <Dragger {...props}>
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">Click or drag file to this area to upload</p>
          <p className="ant-upload-hint">
            Support for a single or bulk upload. Strictly prohibit from uploading company data or other
            band files
          </p>
        </Dragger>
      </Card>
      {/* 这里是校内横幅 */}
      <Card hoverable>
        <Row>
          <Col span={22}>
            <Form.Item
              label="校内横幅"
              name="校内横幅"
              rules={[{ required: true, message: 'Please input iterm!' }]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
      </Card>
      {/* 这里是比赛详情简介 */}
      <Card hoverable>
        <h3>比赛详情</h3>
        <TextArea rows={6} />
      </Card>
      <Card hoverable>
      
        <Row>
          <Col span={11}>
            
          </Col>
          <Col span={12}>
          <Form.Item>
          <Button type="primary" htmlType="submit">
           修改比赛
          </Button>
            </Form.Item>
          </Col>
          <Col >
            
          </Col>
        </Row>
        
      </Card>
    </div>
  );
}

export default CreatCompetition;
