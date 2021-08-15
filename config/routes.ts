export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './User/login',
          },
        ],
      },
    ],
  },
  {
    path: '/welcome',
    name: '首页',
    icon: 'smile',
    // ccess: 'canUse',
    component: './Welcome',
  },
  {
    path: '/competition',
    name: '比赛',
    icon: 'flag',
    access: 'canUse',
    component: './Competition',
  },
  {
    path: '/competition/detail',
    component: './Competition/Detail',
  },
  {
    path: '/competition/detail/state-message',
    component: './Competition/Detail/StateMessage',
  },
  {
    path: '/competition/detail/state-file',
    component: './Competition/Detail/StateFile',
  },
  {
    path: '/competition/detail/team-state',
    component: './Competition/TeamState',
  },
  {
    path: '/lecture',
    name: '授课',
    icon: 'bulb',
    access: 'canUse',
    component: './Lecture',
  },
  // 个人信息页 路由并非由此进入
  {
    path: '/account/center',
    component: './Account/Center',
  },
  {
    path: '/account/settings',
    component: './Account/Settings',
  },
  {
    path: '/judge',
    name: '评审页',
    icon: 'code',
    access: 'canJudge',
    routes: [
      {
        path: '/judge/judge-list',
        name: '评审列表',
        icon: 'bulb',
        component: './Judge/JudgeList',
      },
      {
        path: '/judge/judge-list/judge-detail',
        component: './Judge/JudgeList/JudgeDetail',
      },
    ],
  },
  {
    path: '/personalInformation/SignUp',
    component: './PersonalInformation/SignUp',
  },
  {
    path: '/admin',
    name: 'admin',
    icon: 'code',
    access: 'canAdmin',
    routes: [
      {
        path: '/admin/dash-board',
        name: '仪表盘',
        icon: 'dashboard',
        component: './Administrator/DashBoard',
      },
      {
        path: '/admin/create-competition',
        name: '创建比赛',
        icon: 'form',
        component: './Administrator/CreateCompetition',
      },

      {
        path: '/admin/competition-list',
        name: '比赛列表',
        icon: 'ordered-list',
        component: './Administrator/CompetitionList',
      },
      {
        path: '/admin/competition-list/competition-state',
        component: './Administrator/CompetitionList/CompetitionState',
      },
      {
        path: '/admin/competition-list/judge-management',
        component: './Administrator/CompetitionList/JudgeManagement',
      },
      {
        path: '/admin/competition-list/judge-management/judge-authorization',
        component: './Administrator/CompetitionList/JudgeManagement/JudgeAuthorization',
      },
      {
        path: '/admin/competition-list/end-competition',
        component: './Administrator/CompetitionList/EndCompetition',
      },
      {
        path: '/admin/competition-list/competition-edit',
        component: './Administrator/CompetitionEdit',
      },
    ],
  },
  {
    path: '/super-admin',
    name: '超级管理员',
    icon: 'crown',
    access: 'canSuperAdmin',
    routes: [
      {
        path: '/super-admin/dash-board',
        name: '仪表盘',
        icon: 'dashboard',
        component: './SuperAdministrator/DashBoard',
      },
      {
        path: '/super-admin/create-approval',
        name: '创建审批',
        icon: 'form',
        component: './SuperAdministrator/CreateApproval',
      },
      {
        path: '/super-admin/end-vetting',
        name: '结束审批',
        icon: 'check-circle',
        component: './SuperAdministrator/EndVetting',
      },
    ],
  },
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    component: './404',
  },
];