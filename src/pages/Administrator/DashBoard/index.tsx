import React from 'react';
import { Typography,  } from 'antd';
const { Title, Paragraph, Text, Link } = Typography;
import { PageHeaderWrapper } from '@ant-design/pro-layout';


// eslint-disable-next-line spaced-comment
/*/这是管理员信息页面，也就是仪表页面，主要功能是查看管理员本身账户 */

function AdminInformation() {
  return (
    <PageHeaderWrapper title={<Title level={2}>仪表盘</Title>}>
    </PageHeaderWrapper>
  );
}

export default AdminInformation;
