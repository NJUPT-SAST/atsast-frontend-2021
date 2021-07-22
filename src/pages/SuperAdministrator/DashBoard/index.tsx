import React from 'react';
import { Typography, Row, Col, Card, Button, Radio, Breadcrumb, PageHeader } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
const { Title, Paragraph, Text, Link } = Typography;
const CardStyle = {
  height: '150px',
};
const NewStyle = {
  height: '100px',
  textAlign: 'center',
};

// eslint-disable-next-line spaced-comment
/*/这是管理员信息页面，也就是仪表页面，主要功能是查看管理员本身账户 */

class ComCol extends React.Component {
  state = {
    list: [
      {
        contestId: "",
        contestName: "",
        contestOrganizer: "",
        contestTime: "",
        contestTimeEnd: "",
        contestType: "",
        currStu: "",
      }
    ]
  }
  componentDidMount() {
    fetch('https://yapi.sast.fun/mock/13/user/contestlist/', {
      method: 'get',
      // mode: 'cors',
    })
      .then(res => res.json())
      .then(json => {
        this.setState({ list: json });
        // console.log(this.state.list);
      })
  }
  render() {

    return (
      <>
        {this.state.list.map(data => (
          <Col xs={24} md={12} xl={8}>
            <Card style={CardStyle} hoverable
              actions={[
                <a href="">详情</a>,
                <a href="">状态</a>,
                <a href="">审批</a>,
                <a href="">后续</a>,
              ]}
            >
              <Title level={3}>
                {data.contestName}
              </Title>
            </Card>
          </Col>
        ))}
      </>
    );
  }
}

function AdminInformation() {
  return (
    <div>
      <Breadcrumb>
        <Breadcrumb.Item>
          <a href="/super-admin">管理页</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="/super-admin/dash-board">仪表盘</a>
        </Breadcrumb.Item>
      </Breadcrumb>
      <PageHeader
        className="site-page-header"
        title="仪表盘"
        subTitle="仪表盘页面"
      />
      <Card>
        <Row gutter={[36, 18]}>
          <ComCol />
        </Row>
      </Card>
    </div>

  );
}

export default AdminInformation;
