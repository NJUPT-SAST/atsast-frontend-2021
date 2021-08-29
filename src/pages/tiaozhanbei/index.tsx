import React from 'react';
import { Row, Col, Card  } from 'antd';
import { Divider } from 'antd';
import { Line } from '@ant-design/charts';
const App1 =()=>{

  const data = [
    {time:'10:30',frequency:'1'},
    {time:'10:35',frequency:'3'},
    {time:'10:40',frequency:'6'},
    {time:'10:45',frequency:'9'},
    {time:'10:50',frequency:'12'},
    {time:'10:55',frequency:'17'},
    {time:'11:05',frequency:'11'},
    {time:'11:10',frequency:'19'},
    {time:'11:15',frequency:'7'},
    {time:'11:20',frequency:'8'},
    {time:'11:25',frequency:'6'},
    {time:'11:30',frequency:'1'},
    {time:'11:35',frequency:'3'},
    {time:'11:40',frequency:'9'},
    {time:'11:45',frequency:'10'},
    {time:'11:50',frequency:'11'},
    {time:'11:55',frequency:'13'},
   
  
  ];

  const config = {
    data,
    height: 400,
    xField: 'time',
    yField: 'frequency',
    point: {
      size: 5,
      shape: 'diamond',
    },
  };
  return <Line {...config} />;
}

function Tiaozhanbei() {
  return (
    <div>
      <div style={{height:'55px'}}></div>
       <Divider orientation="left"><h1>南一食堂</h1></Divider>
      <Card hoverable>
        <Row gutter={[10,10]}>
         <Col span={8}>
           <App1></App1>
         </Col>
         <Col span={8}>
         <App1></App1>
         </Col>
         <Col span={8}>
         <App1></App1>
         </Col>
        </Row>
      </Card >

      <Divider orientation="left"><h1>南二食堂</h1></Divider>
      <Card hoverable>
        <Row >
        <Row gutter={[10,10]}>
         <Col span={8}>
           <App1></App1>
         </Col>
         <Col span={8}>
         <App1></App1>
         </Col>
         <Col span={8}>
         <App1></App1>
         </Col>
        </Row>
        </Row>
        
      </Card>
      <Divider orientation="left"><h1>南三食堂</h1></Divider>
      <Card hoverable>

        <Row gutter={[10,10]}>
         <Col span={8}>
           <App1></App1>
         </Col>
         <Col span={8}>
         <App1></App1>
         </Col>
         <Col span={8}>
         <App1></App1>
         </Col>
        </Row>



      </Card>
    </div>
  );
}

export default Tiaozhanbei;