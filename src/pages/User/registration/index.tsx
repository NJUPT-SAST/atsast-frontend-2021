import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Card, Alert, Typography } from 'antd';
import { useIntl, FormattedMessage } from 'umi';
import { Carousel } from 'antd';

const contentStyle = {
  height: '200px',
  color: '#fff',
  lineHeight: '200px',  //内嵌字符height
  textAlign: 'center',
  background: '#364d79',
};

export default (): React.ReactNode => {
  const intl = useIntl();
  return (
    <PageContainer>
      <Carousel autoplay="true">
        <div>
          <h3 style={contentStyle}>PicLink1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>PicLink2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>Picklink3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>Piclink4</h3>
        </div>
      </Carousel>
    </PageContainer>
  );
};
