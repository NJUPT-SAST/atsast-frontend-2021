import React from 'react';
/* 以下是面包屑 */
import { Col, Row, Space } from 'antd';
import { Divider } from 'antd';
/* 以下是卡片 */
import { Card } from 'antd';
import { Switch } from 'antd';
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';
import { Popover, Button } from 'antd';
import { Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
/* 以下是富文本和状态栏 */
import { Drawer, Form, Select, DatePicker, Input, Radio } from 'antd';
import { MinusCircleOutlined, PlusOutlined, DownloadOutlined } from '@ant-design/icons';
/* 以下是生成邀请链接-报名阶段 */
import { Typography } from 'antd';
const { Title, Paragraph, Text, Link } = Typography;
import { PageHeaderWrapper } from '@ant-design/pro-layout';
const content1 = (
  <div>
    <p>单个队员邀请链接</p>
    <p>邀请链接1</p>
  </div>
);
const content2 = (
  <div>
    <p>下载链接</p>
  </div>
);
/* 以下是导入EXCEL名单，上传按钮 */
const props = {
  name: 'file',
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};
const { TextArea } = Input;
/* 以下是抽屉和富文本编辑器 */
const { Option } = Select;

class DrawerForm extends React.Component {
  state = { visible: false };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };
  render() {
    return (
      <>
        <Button type="primary" onClick={this.showDrawer}>
          <PlusOutlined /> 编辑信息
        </Button>
        <Drawer
          title="Create a new account"
          width={720}
          onClose={this.onClose}
          visible={this.state.visible}
          bodyStyle={{ paddingBottom: 80 }}
          footer={
            <div
              style={{
                textAlign: 'right',
              }}
            >
              <Button onClick={this.onClose} style={{ marginRight: 8 }}>
                Cancel
              </Button>
              <Button onClick={this.onClose} type="primary">
                Submit
              </Button>
            </div>
          }
        >
          <Form layout="vertical" hideRequiredMark>
            <Row gutter={16}>
              <Col span={24}>
                <Form.Item
                  name="description"
                  label="Description"
                  rules={[
                    {
                      required: true,
                      message: '编辑新的比赛状态',
                    },
                  ]}
                >
                  <Input.TextArea rows={4} placeholder="please enter url description" />
                </Form.Item>
              </Col>
            </Row>
            <Row >
              <Col span={24}>
                <Demo />
              </Col>
            </Row>
          </Form>
        </Drawer>
      </>
    );
  }
}
// eslint-disable-next-line spaced-comment
/*嵌套富文本在抽屉里 */
const Demo = () => {
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
                  rules={[{ required: true, message: '文件描述' }]}
                >
                  <Input placeholder="文件描述" />
                </Form.Item>
                <Form.Item
                  {...restField}
                  name={[name, 'last']}
                  fieldKey={[fieldKey, 'last']}
                  rules={[{ required: true, message: '格式限定' }]}
                >
                  <Input placeholder="格式限定" />
                </Form.Item>
                <Form.Item
                  {...restField}
                  name={[name, 'last']}
                  fieldKey={[fieldKey, 'last']}
                  rules={[{ required: true, message: '操作' }]}
                >
                  <Input placeholder="操作" />
                </Form.Item>
                <MinusCircleOutlined onClick={() => remove(name)} />
              </Space>
            ))}
            <Form.Item>
              <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                Add field
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
    </Form>
  );
};

/* 以下是卡片显示页面 */



/* 以下是返回显示页面 */
function CompetitionState() {
  return (
    <PageHeaderWrapper title={<Title level={2}>比赛状态</Title>}>
      {/* 报名阶段 */}
      <Card>
        <Row>
          <Col span={4}>
            <h2>报名阶段</h2>
          </Col>
          <Col span={4}>
            <h4>公开报名</h4>
            <Switch checkedChildren="开启" unCheckedChildren="关闭" defaultChecked />
            <br />
          </Col>
          <Col span={5}>
            <Popover content={content1} >
              <Button type="primary">生成邀请链接</Button>
            </Popover>
          </Col>
          <Col span={5}>
            <Popover content={content2} >
              <Button type="primary">生成签到表格</Button>
            </Popover>
          </Col>
          <Col>
            <Upload {...props}>
              <Button icon={<UploadOutlined />}>导入Excel表格</Button>
            </Upload>
          </Col>
        </Row>
      </Card>
      {/* 状态1的富文本打算用抽屉写一下 */}
      <Card>
        <Row>
          <h2>比赛状态</h2>
          <TextArea rows={6} />
          <DrawerForm />
        </Row>
        <Row>

        </Row>
      </Card>
      {/* 状态2的富文本打算用抽屉写一下增删，但是这个增删怎么导入到原来的页面 */}
      <Card>
        <Row>
          <Col span={4}>
            <h2>评审阶段</h2>
          </Col>
          <Col>
            <Button type="primary">导出评审结果</Button>

          </Col>
        </Row>
      </Card>
      <Card>
        <Row>
          <Col span={4}>
            <h2>公示阶段</h2>
          </Col>
          <Col>
            <Button type="primary">导出最终结果</Button>

          </Col>
        </Row>
      </Card>
    </PageHeaderWrapper>

  );
}

export default CompetitionState;
