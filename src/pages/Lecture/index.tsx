import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Card, Typography } from 'antd';
import { FormattedMessage } from 'umi';

export default (): React.ReactNode => {
  return (
    <PageContainer>
      <Card>此功能尚处于开发中，敬请期待</Card>
    </PageContainer>
  );
};