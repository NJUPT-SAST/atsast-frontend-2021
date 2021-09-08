import React, { constructor } from 'react';
import { Form, Input, Button, Row } from 'antd';
/**/import { Card } from 'antd';
import Col from 'antd/es/grid/col';
import { Radio } from 'antd';
import { Select } from 'antd';
/* 比赛流程-多元复合 */
import { DatePicker } from 'antd';
import { Space } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

/* 上传引入 */
import { Upload, message } from 'antd';
import { InboxOutlined } from '@ant-design/icons';

/**/
import { Typography, Breadcrumb, PageHeader, } from 'antd';
/* 限定团队最大最小人数 */
import { InputNumber } from 'antd';
import {Component} from 'react'
import axios from 'axios'
import styles from './Welcome.module.less';
import ReactQuill from 'react-quill'; 
import 'react-quill/dist/quill.snow.css'; 

// eslint-disable-next-line no-lone-blocks
{/* 以下是返回页面 */ }
function CreatCompetition() {
  const matchParams: any = {
    'masterUid': '',
    'maxMember': '',
    'minMember': '',
    'maxInstructor': '',
    'minInstructor': '',
    'contestName': '',
    'description': '',
    'contestOrganizer': '',
    'contestHost': '',
    'contestHelper': '',
    'isTeam': '',
    'isInstructor': '',
    'banners': '',
    'teamGroup': '',
    'subjectCategory': '',
    'workCategory': '',
    'joinGrade': '',
    'isJoin': '',
    'stageTemps': '',
    'isTech': '',
    'contestType': '',
    'fileUrl': '',
};
const isParams = { 'judgeUid': 1, 'teamIds': [], 'contestId': 10 };
const areCreatMatch = async (params: any) => {
  await axios({
    method: 'post',
    url: 'http://pipe.sast.codes:7080',
    data: params,
    headers: { 'Content-Type': 'application/json' },
  })
    .then((response) => {
      console.log('areCreatMatch-response:', response);
      return response;
    })
    .catch((error) => {
      console.log('areCreatMatch-error:', error);
      return error;
    });
};
const props = {
  name: 'file',
  multiple: true,
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  onChange(info) {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log('Dropped files', e.dataTransfer.files);
  },
};  
// 第一个组件，上传比赛信息


 // eslint-disable-next-line no-lone-blocks
  {/* 以下const是比赛主信息 */ }
const Demo = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  //  const statedata =[ contestOrganizer,contestName,contestHost,contestHelper ]
  // 解构赋值
   // values.contestOrganizer = matchParams.contestOrganizer  
    // 现在要做的是把表单里的值覆写给外部的对象match
  //  var array1=new Array();
  //  for (let i=0 ;i<=3;i=i+1){
  //     array1[i]=values;
  //  }
  //  console.log(array1);
  let {
    contestName:contestName,
    contestOrganizer:contestOrganizer,
    contestHost:contestHost,
    contestHelper:contestHelper,
  }=values;
  //array1=values;
 // console.log(contestName);
 // console.log(contestOrganizer);
 // console.log(contestHost);
 // console.log(contestHelper);
  matchParams.contestName=contestName;
  matchParams.contestOrganizer=contestOrganizer;
  matchParams.contestHost=contestHost;
  matchParams.contestHelper=contestHelper;
  //console.log(matchParams);


  };
  
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  // eslint-disable-next-line @typescript-eslint/no-shadow

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="比赛名称"
        name="contestName"
        rules={[{ required: true, message: 'Please input game name!' }]}
      >
         <Input></Input>
      </Form.Item>
      <Form.Item
        label="主办方"
        name="contestOrganizer"
        rules={[{ required: true, message: 'Please input sponsor name!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="承办方"
        name="contestHost"
        rules={[{ required: true, message: 'Please input contractor name!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="协办方"
        name="contestHelper"
        rules={[{ required: true, message: 'Please input co-organizer name!' }]}
      >
        <Input />
      </Form.Item>
    </Form>
  );
};

// eslint-disable-next-line no-lone-blocks
{/* 以下const是比赛类别选择 */ }

const App1 = () => {
  const [value, setValue] = React.useState(1);
  const onChange = e => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
    //原来ANTD已经把value的值提取出来了。。只需要使用即可
    //console.log(value);
    matchParams.isTeam=value;
  };


  return (
    <Radio.Group onChange={onChange} value={value}>
      <Radio value={"1"}>个人</Radio>
      <Radio value={"2"}>团队</Radio>
    </Radio.Group>

  );
};

// eslint-disable-next-line no-lone-blocks
{/* 以下const是信息选择框(单选选)，选择指导老师 */ }
const App2 = () => {
  const [value, setValue] = React.useState(1);

  const onChange = e => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
    matchParams.isInstructor=value;
  };

  return (
    <Radio.Group onChange={onChange} value={value}>
      <Radio value={1}>存在</Radio>
      <Radio value={2}>不存在</Radio>
    </Radio.Group>

  );
};
// eslint-disable-next-line no-lone-blocks
{/* 以下const是信息选择框(单选选)，选择作品类别 */ }
const App3 = () => {
  const [value, setValue] = React.useState(1);

  const onChange = e => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
    matchParams.contestType=value;
   // console.log(matchParams);
  };

  return (
    <Radio.Group onChange={onChange} value={value}>
      <Radio value={0}>综合类</Radio>
      <Radio value={1}>社科类</Radio>
      <Radio value={2}>理工类</Radio>
    </Radio.Group>

  );
};

// eslint-disable-next-line no-lone-blocks
{/* 以下是比赛流程页面 */ }
const Demo1 = () => {
  const onFinish = values => {
    console.log('Received values of form:', values);
  };
  const { RangePicker } = DatePicker;
  
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
                  rules={[{ required: true, message: '请设定比赛流程初' }]}
                >
                  <Input placeholder="设定比赛流程" />
                </Form.Item>
                <Form.Item

                >
                  <RangePicker showTime />
                </Form.Item>
                <MinusCircleOutlined onClick={() => remove(name)} />
              </Space>
            ))}
            <Form.Item>
              <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                新建比赛流程
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
      
    </Form>
  );
};
// eslint-disable-next-line no-lone-blocks
{/* 以下是上传页面 */ }
const { Dragger } = Upload;


// eslint-disable-next-line no-lone-blocks
{/* 以下是大文本输入页面 */ }
const { TextArea } = Input;


// eslint-disable-next-line no-lone-blocks
{/* 以下const是信息选择框(多选) */ }
const { Option } = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
 // console.log(value);
  let string1="";
  const arr=new Array();
  const arraylength1=value.length;
  for(let i=0;i<arraylength1;i+=1){
    arr[i]=value[i];
    if(i==0){
      string1=`${string1  }${ arr[i]}`;
    };
    if(i>0){
      string1=`${string1  }#${ arr[i]}`;
    };

  };
 //console.log(string1);

  matchParams.joinGrade=string1;
  console.log(matchParams)
  
}
const App5 =()=>{

  return (
    <Card hoverable className="nianji">
    <Row>
      <Col span={11}>
        <h3>是否限制参赛年级</h3>
      </Col>
      <Col span={12}>
        <Select
          mode="multiple"
          style={{ width: '100%' }}
          placeholder="请选择参赛年纪"
          defaultValue={['大二']}
          onChange={handleChange}
          optionLabelProp="label"
        >
          <Option value="大一" label="大一">
            <div className="demo-option-label-item">

              本科生大一
            </div>
          </Option>
          <Option value="大二" label="大二">
            <div className="demo-option-label-item">

              本科生大二
            </div>
          </Option>
          <Option value="大三" label="大三">
            <div className="demo-option-label-item">

              本科生大三
            </div>
          </Option>
          <Option value="大四" label="大四">
            <div className="demo-option-label-item">

              本科生大四
            </div>
          </Option>
          <Option value="研一" label="研一">
            <div className="demo-option-label-item">
              研究生一年级
            </div>
          </Option>
          <Option value="研二" label="研二">
            <div className="demo-option-label-item">
              研究生二年级
            </div>
          </Option>
          <Option value="研三" label="研三">
            <div className="demo-option-label-item">
              研究生三年级
            </div>
          </Option>
        </Select>
      </Col>
    </Row>
  </Card>



  );
  
};
// 下面是比赛横幅页面
const App6=()=>{
  const onFinish = (values: any) => {
    //console.log('Success:', values);
    console.log(values);
    let{
      banners:banners,
    }=values;
    matchParams.banners=banners;
    //console.log(matchParams);
  };
  return(
    <Row>
    <Col span={22}>
      <Form
        onFinish={onFinish}
        
      >
      <Form.Item
        label="校内横幅"
        name="banners"
        rules={[{ required: true, message: 'Please input iterm!' }]}
      >
        <Input />
      </Form.Item>
      </Form>
    
    </Col>
  </Row>

  );
};
// eslint-disable-next-line no-lone-blocks
{/* 以下const是信息选择框(单选选)，选择团队组别 */ }
const App4 = () => {
  const [value, setValue] = React.useState(1);

  const onChange = e => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
    matchParams.contestType=e.target.value;
    console.log(matchParams);
  };

  return (
    <Radio.Group onChange={onChange} value={value}>
      <Radio value={1}>设置</Radio>
      <Radio value={2}>不设置</Radio>
    </Radio.Group>

  );
};
// eslint-disable-next-line no-lone-blocks
{/* 以下是最大最小人数输入页面 */ }
const Demo6 = () => {
  const [value, setValue] = React.useState<string | number>('1');
  console.log(value);
  matchParams.minMember=value;

  return (
    <Space>
      <text>最少人数</text>
      <InputNumber min={1} max={10} value={value} onChange={setValue}
      disabled={matchParams.contestType===2} />
    </Space>
  );
};
const Demo7 = () => {
  const [value, setValue] = React.useState<string | number>('10');
  matchParams.maxMember=value;
  return (
    <Space>
       <text>最多人数</text>
      <InputNumber min={1} max={10} value={value} onChange={setValue}
      disabled={matchParams.contestType===2} />
    </Space>
  );
};
const App7=()=>{
  const [value, setValue] = React.useState(1);

  const onChange = e => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
    matchParams.isInstructor=value;
    console.log(matchParams);
    
  };
  return(
    <Radio.Group onChange={onChange} value={value}>
    <Radio value={1}>设置</Radio>
    <Radio value={2}>不设置</Radio>
  </Radio.Group>
  );

};
const App8=()=>{
  const [value, setValue] = React.useState<string | number>('1');
  matchParams.minInstructor=value;
  return(
    <Space>
    <text>最少人数</text>
    <InputNumber min={1} max={10} value={value} onChange={setValue}
    disabled={matchParams.isInstructor===2} />
  </Space>
  );

};
const App9=()=>{
  const [value, setValue] = React.useState<string | number>('10');
  matchParams.maxInstructor=value;
  console.log(matchParams);
  return(
    <Space>
    <text>最多人数</text>
   <InputNumber min={1} max={10} value={value} onChange={setValue}
   disabled={matchParams.isInstructor===2} />
 </Space>
  );

};

const App10=()=>{
  return(
    <TextArea rows={6} />
  );
};
// 以下是返回页面！！！！！！！！！！！！
  return (
    <div>
      <Breadcrumb>
        <Breadcrumb.Item>
          <a href="/admin">管理页</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="/admin/create-competition">新建比赛</a>
        </Breadcrumb.Item>
      </Breadcrumb>
      <PageHeader
        className="site-page-header"
        title="新建比赛"
        subTitle="新建比赛页面"
      />
      <Card hoverable>
        <Row>
          <Col span={40}>
            <div className="form">

              <Demo />
            </div>
          </Col>
        </Row>
      </Card>
      <Card hoverable>
          <Row>
            <Col span={11}>
              <h3>是否设置作品类别</h3>
            </Col>
            <Col>
              <App3 />
            </Col>
          </Row>
        </Card>
      <Card hoverable >
          <Row>
            <Col span={8}>
              <h3>是否存在指导老师</h3>
            </Col>
            <Col span={8}>
              <App7 />
            </Col>
            <Col>
            <App8></App8>
            <App9></App9>
            </Col>
          </Row>
        </Card>
      
        <Card hoverable>
          <Row>
            <Col span={8}>
              <h3>是否存设置团队组别</h3>
            </Col>
            <Col span={8}>
              <App4 />
            </Col>
            <Col>
             <Demo6 /> <Demo7/>

            </Col>
          </Row>
        </Card>
      <div className="choice button">
       <App5></App5>
      </div>

      {/* 这里是比赛流程页面 */}
      <Card hoverable>
        <h3>比赛流程</h3>
        <Demo1 />
      </Card>

      {/* 这里是上传比赛策划案 */}
      <Card hoverable>
        <h3>比赛策划案上传</h3>
        <Dragger {...props}>
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">Click or drag file to this area to upload</p>
          <p className="ant-upload-hint">
            Support for a single or bulk upload. Strictly prohibit from uploading company data or other
            band files
          </p>
        </Dragger>
      </Card>
      {/* 这里是校内横幅 */}
      <Card hoverable>
       <App6></App6>
      </Card>
      {/* 这里是比赛详情简介 */}
      <Card hoverable>
        <h3>比赛详情</h3>
        <App10></App10>
      </Card>
      <Card hoverable>
      
        <Row>
          <Col span={11}>
            
          </Col>
          <Col span={12}>
          <Form.Item>
          <Button type="primary" htmlType="submit" onClick={()=>{areCreatMatch(matchParams)}}>
           提交
          </Button>
            </Form.Item>
          </Col>
          <Col >
            
          </Col>
        </Row>
        
      </Card>
    </div>
  );
}

export default CreatCompetition;

