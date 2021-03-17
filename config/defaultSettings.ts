import { Settings as LayoutSettings } from '@ant-design/pro-layout';

const Settings: LayoutSettings & {
  pwa?: boolean;
  logo?: string;
} = {
  navTheme: 'dark',
  // 拂晓蓝
  primaryColor: '#1890ff',
  layout: 'mix',
  contentWidth: 'Fluid',
  fixedHeader: false,
  fixSiderbar: true,
  colorWeak: false,
  title: '  ',
  pwa: false,
  splitMenus: true,
  logo: 'https://zlhad.oss-cn-shanghai.aliyuncs.com/img/20210317224909.png',
  iconfontUrl: '',
};

export default Settings;

