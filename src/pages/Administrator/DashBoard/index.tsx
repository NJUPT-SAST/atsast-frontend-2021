import React from 'react';
import { Breadcrumb, PageHeader, Card } from 'antd';


// eslint-disable-next-line spaced-comment
/*/这是管理员信息页面，也就是仪表页面，主要功能是查看管理员本身账户 */

function AdminInformation() {
  return (
    <div>
      <Breadcrumb>
        <Breadcrumb.Item>
          <a href="/admin">管理页</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="/admin/dash-board">仪表盘</a>
        </Breadcrumb.Item>
      </Breadcrumb>
      <PageHeader
        className="site-page-header"
        title="仪表盘"
        subTitle="仪表盘页面"
      />
      <Card>
        欢迎来到管理员界面！
      </Card>
    </div>

  );
}

export default AdminInformation;
