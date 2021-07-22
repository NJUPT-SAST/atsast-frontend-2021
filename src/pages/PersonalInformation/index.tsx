import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Descriptions, Card, Input, Form, DatePicker, Button, Typography, Row, Col } from 'antd';

/* Row间Height（通用） */
const rowHeightStyle = {
  height: '16px',
};

const { TextArea } = Input;

export default (): React.ReactNode => {
  return (
    <PageContainer>
      <Card>
        <Descriptions
          title="个人信息"
          bordered
          column={{ xxl: 4, xl: 2, lg: 3, md: 3, sm: 2, xs: 1 }}
        >
          <Descriptions.Item label="姓名">Zhou Maomao</Descriptions.Item>
          <Descriptions.Item label="专业">1810000000</Descriptions.Item>
          <Descriptions.Item label="学号">empty</Descriptions.Item>
          <Descriptions.Item label="身份证号">empty</Descriptions.Item>
          <Descriptions.Item label="手机号">empty</Descriptions.Item>
          <Descriptions.Item label="宿舍号">empty</Descriptions.Item>
          <Descriptions.Item label="邮箱">empty</Descriptions.Item>
          <Descriptions.Item label="QQ">empty</Descriptions.Item>
          <Descriptions.Item label="学院">empty</Descriptions.Item>
          <Descriptions.Item label="政治面貌">empty</Descriptions.Item>
        </Descriptions>
        <Button >修改</Button>
      </Card>
    </PageContainer>
  );
};
