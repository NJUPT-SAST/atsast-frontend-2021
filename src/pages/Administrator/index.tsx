/* 这是管理员信息页面，也就是仪表页面，主要功能是查看管理员本身账户 */
import { Typography,  } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';

const { Title } = Typography;

function DashBoard() {
  return (
    <PageHeaderWrapper title={<Title level={2}>仪表盘</Title>}>
    </PageHeaderWrapper>
  );
}

export default DashBoard;
