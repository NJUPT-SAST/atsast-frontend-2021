import React from 'react';
import { DatePicker, Space } from 'antd';
const { RangePicker } = DatePicker;


function TheGameState() {


  return (
    <div>
      <div className="The game name">
       {/*这个盒子是比赛的名称 */}

      </div>
      TheGameState///const 
      这是给定了一个盒子么？
      <div className="time-contral">
      <Space direction="vertical" size={12}>
      <RangePicker showTime />
      </Space>,
      </div>
      <div className="game-information">
        
      </div>
    </div>
  );
}

export default TheGameState;
