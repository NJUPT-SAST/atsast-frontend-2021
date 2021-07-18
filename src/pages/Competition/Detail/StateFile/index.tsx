import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Card, Typography, Steps, Upload, message, Button, Space } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const { Title } = Typography;
const { Step } = Steps;
const StepNow = 3
const StepData = [
  ['xx阶段',],
  ['xx阶段',],
  ['xx阶段',],
  ['xx阶段',],
  ['xx阶段',]];

const TitleStyle = {
  textAlign: 'center',
}

class MyUpload extends React.Component {
  state = {
    fileList: [
    ],
  };

  handleChange = info => {
    let fileList = [...info.fileList];

    // 1. Limit the number of uploaded files
    // Only to show two recent uploaded files, and old ones will be replaced by the new
    fileList = fileList.slice(-2);

    // 2. Read from response and show file link
    fileList = fileList.map(file => {
      if (file.response) {
        // Component will show file.url as link
        file.url = file.response.url;
      }
      return file;
    });
    this.setState({ fileList });
  };
  render() {
    const props = {
      action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
      onChange: this.handleChange,
      multiple: true,
    };
    return (
      <>
        <Space>
          xxxx材料
          <Upload {...props} fileList={this.state.fileList}>
            <Button icon={<UploadOutlined />}>上传</Button>
          </Upload>
        </Space>
        <br />
        <br />
        <br />
      </>
    );
  }
}

class StepTag extends React.Component {
  render() {
    return (
      <>
        <Steps current={StepNow}>
          {StepData.map(data => (
            <Step title={data[0]} description={data[1]} />
          ))}
        </Steps>
      </>
    );
  }
}
export default (): React.ReactNode => {
  return (
    <PageContainer>
      <Card style={TitleStyle}>
        <Title >蓝桥杯程序设计大赛</Title>
        <Card>
          <StepTag />
        </Card>
        <br />
        <Title level={3}>
          提交状态：
        </Title>
        <MyUpload />
        <MyUpload />
        <MyUpload />
      </Card>
    </PageContainer>
  );
};
