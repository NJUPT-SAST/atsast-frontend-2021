import React from 'react';
import { Spin } from 'antd';
import { useModel } from 'umi';
import HeaderDropdown from '../../components/HeaderDropdown';
import styles from '../../components/RightContent/index.less';

export type GlobalHeaderRightProps = {
  menu?: boolean;
};

const AvatarDropdown: React.FC<GlobalHeaderRightProps> = () => {
  const { initialState } = useModel('@@initialState');

  const loading = (
    <span className={`${styles.action} ${styles.account}`}>
      <Spin
        size="default"
        style={{
          marginLeft: 8,
          marginRight: 8,
        }}
      />
    </span>
  );

  if (!initialState) {
    return loading;
  }

  const { currentUser } = initialState;

  if (!currentUser || !currentUser.name) {
    return loading;
  }

  return (
    <HeaderDropdown overlay>
      <span className={`${styles.action} ${styles.account}`}>
        <span className={`${styles.name} anticon`}>{currentUser.name}</span>
      </span>
    </HeaderDropdown>
  );
};

export default AvatarDropdown;
