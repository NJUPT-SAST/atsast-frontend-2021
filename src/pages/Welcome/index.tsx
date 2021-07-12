import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Card, Carousel, Row, Col, Calendar, Typography } from 'antd';
import UserName from './UserName';

// 获取当前日期
const nowDate = new Date();

// 卡片底部Meta元素
// const { Meta } = Card;

// 为给定的时间配备问候语
function greeting(hour: number) {
  let words;
  if (hour >= 23 || hour <= 3)
    words = "深夜了，不要熬夜太晚哦";
  else if (hour <= 5)
    words = "凌晨好，早起的鸟儿有虫吃";
  else if (hour <= 10)
    words = "早上好，今天又是做水果蛋糕的好天气呢";
  else if (hour <= 12)
    words = "中午好，注意午休哦";
  else if (hour <= 14)
    words = "下午好，继续加油吧";
  else if (hour <= 15 )
    words = "三点几嚟，饮茶先啦";
  else if (hour <= 18)
    words = "下午好，继续加油吧";
  else if (hour <= 22)
    words = "晚上好，又是收获满满的一天呢";
  return words
}

/* 跑马灯格式 */
const contentStyle = {
  height: '450px',
  color: '#fff',
  lineHeight: '450px',  // 内嵌字符height
  textAlign: 'center',
  background: '#364d79'
};

/* Row间Height（通用） */
const rowHeightStyle = {
  height: '16px'
}

export default (): React.ReactNode => {
  return (
    <PageContainer>
      <Row gutter={16}>
        <Col span={2}></Col>
        <Col span={14}>
          <Card>
            <Typography.Title level={4}><UserName /><p>{greeting(nowDate.getHours())}</p></Typography.Title>
          </Card>
          <Row style={rowHeightStyle}></Row>  {/* 空Row为卡片间增加留白 */}
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
        </Col>
        {/* 右侧为卡片，标题设置为问候语 */}
        <Col span={6}>
          <Card bordered={false}>
            <Calendar
              fullscreen={false}
              // disabledDate={()=>{return true}}
              headerRender={() => {
                return (
                  <div style={{ padding: 8 }}>
                    <Typography.Title level={4}>{nowDate.getFullYear()}年{nowDate.getMonth()+1}月{nowDate.getDate()}日</Typography.Title>
                  </div>
                );
                }}
            />
          </Card>
        </Col>
        <Col span={2}></Col>
      </Row>
    </PageContainer>
  );
};