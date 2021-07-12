import React from 'react';
import { useModel } from 'umi';

export type GlobalHeaderRightProps = {
  menu?: boolean;
};

const UserName: React.FC<GlobalHeaderRightProps> = () => {
  const { initialState } = useModel('@@initialState');
  const { currentUser } = initialState;
  return (
      <p>
        {currentUser.name}
      </p>
  );
};

export default UserName;
