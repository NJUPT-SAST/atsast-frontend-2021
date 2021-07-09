import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Card,Carousel,Icon } from 'antd';
import { useIntl, FormattedMessage } from 'umi';
import { VerticalAlignMiddleOutlined } from '@ant-design/icons';

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
      <Card hoverable bordered={false}>
        <Carousel autoplay>
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
      </Card>
    </PageContainer>
  );
};
