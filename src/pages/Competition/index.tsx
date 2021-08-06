import React from 'react';
import { Card, Input, Space, Radio, Select, Carousel, List, Typography, } from 'antd';
import type { SelectProps } from 'antd/es/select';
import './index.less';
const { Paragraph, Text, Title } = Typography;
// 搜索栏相关
const { Search } = Input;
const { Option } = Select;


class App extends React.Component {

  state = {
    list: {
      success: "",
      errMsg: "",
      errCode: "",
      data: [
        {
          masterUid: "",
          contestName: "",
          description: "",
          currAdmin: "",
          isTeam: "",
          isJoin: "",
          comment: "",
          pushlink: "",
          contestOrganizer: "",
          contestHost: "",
          contestHelper: "",
          currStu: "",
          banners: "",
          teamGroup: "",
          subjectCategory: "",
          workCategory: "",
          joinGrade: "",
          isInstructor: "",
          enable: "",
          judging: "",
          minMember: "",
          maxMember: "",
          minInstructor: "",
          maxInstructor: "",
          isTech: "",
          contestType: "",
          stages: "",
          fileUrl: "",
        }
      ]
    },
    listData: [
    ],
    Organizers: [
    ],
    joinGrades: [
    ],
  }
  componentDidMount() {
    fetch('http://pipe.sast.codes:7566/mock/13/user/contestlist/', {
      method: 'get',
    })
      .then(res => res.json())
      .then(json => {
        this.setState({
          list: json,
          listData: json.data,
        });

        this.state.list.data.map(data => {
          this.state.Organizers.push(data.contestOrganizer);

        })
        this.state.list.data.map(data => {
          this.state.joinGrades.push(data.joinGrade);

        })
        this.setState({
        })
        console.log(this.state.joinGrades);
      })
  }
  onSearch = (value) => {
    this.state.listData = [];
    // console.log(this.state.list);
    this.state.list.data.map(data => {
      if (data.contestName.indexOf(value) != -1) {
        this.state.listData.push(data);
      }
    })
    this.setState({
    })
  }
  handleClick0 = () => {
    this.state.listData = [];
    // console.log(this.state.list);
    this.state.list.data.map(data => {
      this.state.listData.push(data);
    })
    this.setState({
    })
    // console.log(this.state.listData);
  }
  handleClick1 = () => {
    this.state.listData = [];
    // console.log(this.state.list);
    this.state.list.data.map(data => {
      if (data.contestType == "理工类") {
        this.state.listData.push(data);
      }
    })
    this.setState({
    })
    // console.log(this.state.listData);
  }
  handleClick2 = () => {
    this.state.listData = [];
    // console.log(this.state.list);
    this.state.list.data.map(data => {
      if (data.contestType == "社科类") {
        this.state.listData.push(data);
      }
    })
    this.setState({
    })
    // console.log(this.state.listData);
  }
  handleClick3 = () => {
    this.state.listData = [];
    // console.log(this.state.list);
    this.state.list.data.map(data => {
      if (data.contestType == "综合类") {
        this.state.listData.push(data);
      }
    })
    this.setState({
    })
    // console.log(this.state.listData);
  }
  handleChange0 = (value) => {
    this.state.listData = [];
    console.log(value)
    this.state.list.data.map(data => {
      if (value.indexOf(data.joinGrade) != -1) {
        this.state.listData.push(data);
      }
    })
    this.setState({
    })
  }
  handleChange1 = (value) => {
    this.state.listData = [];
    this.state.list.data.map(data => {
      if (value.indexOf(data.contestOrganizer) != -1) {
        this.state.listData.push(data);
      }
    })
    this.setState({
    })
  }
  render() {
    return (
      <>
        <Carousel autoplay effect="fade">
          <div className="pic">
            <img src="https://cdn.jsdelivr.net/gh/moroshima/CDN-Repository@0.4/Background/01.jpg"></img>
          </div>
          <div className="pic">
            <img src="https://cdn.jsdelivr.net/gh/moroshima/CDN-Repository@0.4/Background/02.jpg"></img>
          </div>
          <div className="pic">
            <img src="https://cdn.jsdelivr.net/gh/moroshima/CDN-Repository@0.4/Background/03.jpg"></img>
          </div>
          <div className="pic">
            <img src="https://cdn.jsdelivr.net/gh/moroshima/CDN-Repository@0.4/Background/04.jpg"></img>
          </div>
          <div className="pic">
            <img src="https://cdn.jsdelivr.net/gh/moroshima/CDN-Repository@0.4/Background/05.jpg"></img>
          </div>
        </Carousel>
        <Card>
          <Space direction="horizontal">
            <text>比赛名称搜索：</text>
            <Search
              placeholder="请输入比赛名称"
              allowClear
              enterButton="搜索"
              size="middle"
              onSearch={this.onSearch}
            />
          </Space>
        </Card>
        <Card>

          <Space>
            <text>所属类目：</text>
            <Radio.Group buttonStyle="solid" defaultValue="a" size="middle">
              <Radio.Button value="a" onClick={this.handleClick0}>全部</Radio.Button>
              <Radio.Button value="b" onClick={this.handleClick1}>理工类</Radio.Button>
              <Radio.Button value="c" onClick={this.handleClick2}>社科类</Radio.Button>
              <Radio.Button value="d" onClick={this.handleClick3}>综合类</Radio.Button>
            </Radio.Group>
          </Space>

        </Card>
        <Card>
          <Space>
            <span>
              <text>其他选项：</text>
            </span>
            <span>
              <text>参赛对象：</text>
            </span>
            <span>
              <Select
                mode="tags"
                placeholder=""
                style={{ width: '250px' }}
                onChange={this.handleChange0}
              >{this.state.joinGrades.map(joinGrade => (
                <Option key={joinGrade}>{joinGrade}</Option>
              ))}
              </Select>
            </span>
            <span>
              <text>主办方：</text>
            </span>
            <span>
              <Select
                mode="tags"
                placeholder=""
                tokenSeparators={[',']}
                style={{ width: '250px' }}
                onChange={this.handleChange1}
              >
                {this.state.Organizers.map(Organizer => (
                  <Option key={Organizer}>{Organizer}</Option>
                ))}
              </Select>
            </span>
          </Space>
        </Card>
        <Card>

          <List
            itemLayout="vertical"
            size="large"
            pagination={{
              onChange: page => {
                console.log(page);
              },
              pageSize: 5,
            }}
            dataSource={this.state.listData}
            renderItem={item => (
              <List.Item
                key={item.contestName}
                extra={
                  <img
                    width={272}
                    alt="logo"
                    src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                  />
                }
              >
                <List.Item.Meta
                  title={
                    <Title level={3}>
                      比赛名称：{item.contestName}
                    </Title>
                  }
                  description={
                    <Space>
                      <Text>
                        比赛类目：{item.contestType}
                        <br />
                        比赛类型：{item.isTeam}
                        <br />
                        主办方：{item.contestOrganizer}
                        <br />
                        面向年级：{item.joinGrade}
                      </Text>
                    </Space>
                  }
                />
              </List.Item>
            )}
          />


        </Card>
      </>
    )
  }
}

function Competition() {
  return (
    <div>
      <App />
    </div>
  );
}

export default Competition;
