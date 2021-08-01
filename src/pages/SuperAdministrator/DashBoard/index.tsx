import React from 'react';
import { Typography, Row, Col, Card, Button, Radio, Breadcrumb, PageHeader, Modal, Upload, message,} from 'antd';
const { Title, Paragraph, Text, Link } = Typography;
const CardStyle = {
  height: '150px',
};
const NewStyle = {
  height: '100px',
  textAlign: 'center',
};

const props = {
  name: 'file',
  action: 'https://yapi.sast.fun/mock/13/superadmin/import',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

class ComCol extends React.Component {
  state = {
    list: {
      success: "",
      errMsg: "",
      errCode: "",
      data: [
        {
          contestId: "",
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
          stageTemps: "",
          stages: "",
        }
      ]
    }

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
        {this.state.list.data.map(data => (
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

class Invite extends React.Component {
  state = {
    num: 1,
    modal1Visible: false,
    modal2Visible: false,
    list: {
      success: true,
      errMsg: "",
      errCode: "",
      data: "",
    }
  };
  componentDidMount() {
    let url = 'https://yapi.sast.fun/mock/13/superadmin/invite?num=' + this.state.num
    fetch(url, {
      method: 'get',
      // mode: 'cors',
    })
      .then(res => res.json())
      .then(json => {
        this.setState({ list: json });
        console.log(this.state);
      })
  }
  setModalVisible(modalVisible) {
    this.setState({ modalVisible });
  }
  render() {
    return (
      <>
        <Button type="primary"
          onClick={() => this.setModalVisible(true)}
        >
          生成邀请注册链接
        </Button>
        <Modal title="生成邀请注册链接"
          visible={this.state.modalVisible}
          onOk={() => this.setModalVisible(false)}
          onCancel={() => {
            this.setModalVisible(false);
          }}
        >
          <p>
            邀请链接：
          </p>
          <p>
            {this.state.list.data}
          </p>
        </Modal>
      </>
    );
  }
}


function AdminInformation() {

  return (
    <div>
      <Breadcrumb>
        <Breadcrumb.Item>
          <a href="/super-admin">超级管理员</a>
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
          <Col sm={24} xl={2}>
            管理员
          </Col>
          <Col sm={24} xl={6}>
            <Invite />
          </Col>
          <Col sm={24} xl={6}>
            <Upload {...props}>
              <Button type="primary">
                导入Excel生成账号
              </Button>
            </Upload>
          </Col>
        </Row>
      </Card>
      <Card>
        <Row gutter={[36, 18]}>
          <ComCol />
        </Row>
      </Card>
    </div>

  );
}

export default AdminInformation;
