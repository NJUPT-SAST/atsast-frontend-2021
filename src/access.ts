/**
 * @see https://umijs.org/zh-CN/plugins/plugin-access
 * */
export default function access(initialState: { currentUser?: API.CurrentUser | undefined }) {
  const { currentUser } = initialState || {};
  return {
    canUse: currentUser && currentUser.access === 'user',
    canAdmin: currentUser && currentUser.access === 'admin',
    canSuperAdmin: currentUser && currentUser.access === 'superAdmin',
    canJudge: currentUser && currentUser.access === 'judge',
  };
}
