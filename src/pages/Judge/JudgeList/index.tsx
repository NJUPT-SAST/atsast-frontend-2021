import React from 'react';
import { Card, Space, List, Breadcrumb, PageHeader } from 'antd';

class App extends React.Component {
  state = {
    list: [
      {
        "teamName": "",
        "teamId": "",
      },
    ]
  };
  componentDidMount() {
    fetch('http://pipe.sast.codes:7566/mock/13/judge/list', {
      method: 'get',
    })
      .then(res => res.json())
      .then(json => {
        this.setState({
          list: json,
        });
        console.log(this.state.list)
      });

  }
  render() {
    return (
      <><List
        pagination={{
          pageSize: 10,
        }}
        dataSource={this.state.list}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              title={
                <>
                队伍名称：<a href={'/judge/judge-list/judge-detail?teamId=' + item.teamId}>{item.teamName}</a>
                </>
            }
          />
          </List.Item>
        )}
      />
      </>
    );
  }
}

function JudgeList() {
  return (
    <div>
      <Breadcrumb>
        <Breadcrumb.Item>
          <a href="/judge">评审页</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="/judge/judge-list">评审列表</a>
        </Breadcrumb.Item>
      </Breadcrumb>
      <PageHeader className="site-page-header" title="评审列表" subTitle="评审列表页面" />
      <Card>
        <App />
      </Card>
    </div>
  );
}

export default JudgeList;
