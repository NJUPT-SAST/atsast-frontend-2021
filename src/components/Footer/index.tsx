import React from 'react';
import { Row, Col, Divider } from 'antd';
import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-layout';
import styles from './footer.less';

export default () => (
  <DefaultFooter
    copyright="NJUPT.SAST 1992-2021"
    links={[
      {
        key: 'Emain',
        title: 'Mail to Us',
        href: 'https://sast@njupt.edu.cn',
        blankTarget: true,
      },
      {
        key: 'github',
        title: 'Github',
        href: 'https://github.com',
        blankTarget: true,
      },
      {
        key: 'QQ',
        title: 'QQ:2595331904',
        href: 'https://sast.njupt.edu.cn/public/img/qq_qrcode.png',
        blankTarget: false,
      },
    ]}
  />
);
