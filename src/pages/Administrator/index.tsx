import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Card } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { PageHeader, Button, Descriptions } from 'antd';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const { Meta } = Card;

class SiderDemo extends React.Component {
  state = {
    collapsed: false,
  };
  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };


// eslint-disable-next-line spaced-comment
//这个页面是管理员
render() {
  const { collapsed } = this.state;
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            管理员界面
          </Menu.Item>
         
          <SubMenu key="sub1" icon={<UserOutlined />} title="我的比赛">
            <Menu.Item key="3">
             摸鱼杯挑战大赛
            </Menu.Item>
            <Menu.Item key="4">
            青少年睡懒觉营
            
            </Menu.Item>
            <Menu.Item key="5">
            UCM软件设计小比赛

            </Menu.Item>
            <Menu.Item key="6">
            新建比赛
            </Menu.Item>
            </SubMenu>
          
          <Menu.Item key="9" icon={<FileOutlined />}>
           比赛管理界面
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Administrator</Breadcrumb.Item>
            <Breadcrumb.Item>陈老师</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
           
            <text className="layout">
      <div className="site-page-header-ghost-wrapper">
    <PageHeader
      ghost={false}
      onBack={() => window.history.back()}
      title="返回登陆页面"
      subTitle="管理者页面"
      
    >
      <Descriptions size="small" column={3}>
        <Descriptions.Item label="Created">管理员</Descriptions.Item>
        <Descriptions.Item label="当前身份">
          <a>管理员</a>
        </Descriptions.Item>
        <Descriptions.Item label="登陆时间">
        <h5>
          2021/7/13/0:37
        </h5>
        </Descriptions.Item>
        <Descriptions.Item label="登陆学院">计软院科协</Descriptions.Item>
        <Descriptions.Item label="授权比赛">
            <Card  hoverable title="UCM软件设计小比赛" bordered={false} style={{ height:  50  }}>
            </Card>
            <Card  hoverable title="青少年睡懒觉营" bordered={false} style={{ height: 50 }}>
            </Card>
            <Card  hoverable title="摸鱼杯挑战大赛" bordered={false} style={{ height:  50 }}>
            </Card>
        </Descriptions.Item>
      </Descriptions>
    </PageHeader>
  </div>
      </text>

          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  );
}
}

function CompetitionState() {
  return (
    <div>
      
      <SiderDemo />
     
      
      <text className="layout">
      <div className="site-page-header-ghost-wrapper">
    <PageHeader
      ghost={false}
      onBack={() => window.history.back()}
      title="Title"
      subTitle="This is a subtitle"
      extra={[
        <Button key="3">Operation</Button>,
        <Button key="2">Operation</Button>,
        <Button key="1" type="primary">
          Primary
        </Button>,
      ]}
    >
      <Descriptions size="small" column={3}>
        <Descriptions.Item label="Created">Lili Qu</Descriptions.Item>
        <Descriptions.Item label="Association">
          <a>421421</a>
        </Descriptions.Item>
        <Descriptions.Item label="Creation Time">2017-01-10</Descriptions.Item>
        <Descriptions.Item label="Effective Time">2017-10-10</Descriptions.Item>
        <Descriptions.Item label="Remarks">
          Gonghu Road, Xihu District, Hangzhou, Zhejiang, China
        </Descriptions.Item>
      </Descriptions>
    </PageHeader>
  </div>
      </text>

    </div>
  );
}



export default CompetitionState;
