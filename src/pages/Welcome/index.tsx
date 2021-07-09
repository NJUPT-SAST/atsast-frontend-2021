import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Card, Carousel, Icon } from 'antd';
import { useIntl, FormattedMessage } from 'umi';
import { VerticalAlignMiddleOutlined } from '@ant-design/icons';
import { Row, Col } from 'antd';
import { Calendar } from 'antd';
import moment from 'moment';
import { now } from '@umijs/deps/compiled/lodash';
import { string } from '@umijs/deps/compiled/yargs';

function onPanelChange(value, mode) {
  console.log(value, mode);
}

var d = new Date();

function greeting(hour) {
  var words;
  if (hour <= 5 && hour > 3) 
    words = "凌晨好，起得真早呀";
  else if (hour >5&&hour<=10)
    words="早上好，一起学习吧";
  else if (hour>10&&hour<=12)
    words="中午好，注意午休哦";
  else if (hour>12&&hour<=18)
    words="下午好，继续加油吧";
  else if (hour>18&&hour<=22)
    words="晚上好，又是收获满满的一天呢";
    else words="深夜了，不要熬夜太晚哦";
  return words
}

const contentStyle = {
  height: '300px',
  color: '#fff',
  lineHeight: '200px',  //内嵌字符height
  textAlign: 'center',
  background: '#364d79',
};

export default (): React.ReactNode => {
  const intl = useIntl();
  return (
    <PageContainer>

      <Row>
        <Col span={5} push={19}>
          <div className="greeting-words">
            { greeting(d.getHours())}
          </div>
          <div className="site-calendar-demo-card">
            <Calendar fullscreen={false} onPanelChange={onPanelChange} />
          </div>,

        </Col>
        <Col span={18} pull={5}>
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
        </Col>
      </Row>,

    </PageContainer>
  );
};
