import React from 'react';
import { Card, Input, Form, Button, Row, Col, Breadcrumb, InputNumber } from 'antd';

import { history } from 'umi';


class App extends React.Component {
  state = {
    get: {
      "comment": "",
      "score": "",
      fileUrls:[
      ]
    },
    list: [
      {
        "teamName": "",
        "teamId": "",
      },
    ]
  };
  componentDidMount() {
    let teamId = window.location.href.split('?teamId')[1]
    if (typeof (teamId) == "undefined") {
      console.log("参数错误");
      history.push('/404');
    }
    let url = 'http://pipe.sast.codes:7566/mock/13/judge/getcomment?teamId=' + teamId
    fetch(url, {
      method: 'get',
    })
      .then(res => res.json())
      .then(json => {
        this.setState({
          get: json,
        });
        console.log(this.state.get)
      });
    // form.setFieldsValue({
    //   note: 'Hello world!',
    //   gender: 'male',
    // });
  }
  onFinish = (values: any) => {
    console.log(values);
  };
  inputChange1 = (val) => {
    // console.log(val)
    let obj1 = Object.assign(this.state.get, { score: val });
    let obj = Object.assign(this.state, { get: obj1 });
    this.setState({
      obj
    })
    // console.log(this.state)
  }
  inputChange2 = (val) => {
    // console.log(val)
    // console.log(val.target.value)
    let obj1 = Object.assign(this.state.get, { comment: val.target.value });
    let obj = Object.assign(this.state, { get: obj1 });
    this.setState({
      obj
    })
  }

  Submit = () => {
    console.log(this.state.get)
    fetch('http://pipe.sast.codes:7566/mock/13/judge/comment', {
      method: 'post',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(
        this.state.get
      )
    })
      .then(res => {console.log(res)})
  }

  render() {
    return (
      <>
        <Breadcrumb>
          <Breadcrumb.Item>
            <a href="/judge">评审页</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="/judge/judge-list">评审列表</a>
          </Breadcrumb.Item>
        </Breadcrumb>
        <Card title="材料">
          {this.state.get.fileUrls.map(data =>(
            <>
            <a href={data}>{data}</a>
            <br />
            </>
          ))}
        </Card>

        <Card>
          评分：
          <InputNumber min={0} max={100} value={this.state.get.score} onChange={this.inputChange1.bind(this)} />
          <br />
          <br />
          评语：
          <br />
          <br />
          <Input.TextArea value={this.state.get.comment} onChange={this.inputChange2.bind(this)} />

          <br/>
          <br />
          <Button type="primary" htmlType="submit" onClick={this.Submit}>
            提交修改
          </Button>
        </Card>

        <Card>
          <Row>
            <Col span={2}>
              <Button type="link" block>
                上一个
              </Button>
            </Col>
            <Col span={20}></Col>
            <Col span={2}>
              {' '}
              <Button type="link" block>
                {/* 该部分还要实现跳转到下一个页面 */}
                下一个
              </Button>
            </Col>
          </Row>
        </Card>
      </>
    )
  }
}

function Judge() {
  return (
    <div>
      <App />
    </div>
  );
}

export default Judge;
