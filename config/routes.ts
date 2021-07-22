﻿export default [
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
    name: 'welcome',
    icon: 'smile',
    component: './Welcome',
  },
  {
    path: '/competition',
    name: '比赛',
    icon: 'flag',
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
    path: '/lecture',
    name: '授课',
    icon: 'bulb',
    component: './Lecture',
  },
  {
    path: '/personalInformation',
    name: '个人信息',
    icon: 'bulb',
    component: './PersonalInformation',
    },
    {
        path: '/judgeDetail',
        name: '评审详情页',
        icon: 'bulb',
        component: './JudgeDetail',
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
    ],
  },
  {
    path: '/super-admin',
    name: '超级管理员',
    icon: 'crown',
    access: 'canAdmin',
    routes: [
      {
        path: '/super-admin/dash-board',
        name: '仪表盘',
        icon: 'dashboard',
        component: './SuperAdministrator/DashBoard',
      },
      {
        path: '/super-admin/end-vetting',
        name: '结束审批',
        icon: 'dashboard',
        component: './SuperAdministrator/EndVetting',
      },
      {
        path: '/super-admin/create-approval',
        name: '创建审批',
        icon: 'form',
        component: './SuperAdministrator/CreateApproval',
      },
    ],
  },
  {
    name: 'list.table-list',
    icon: 'table',
    path: '/list',
    component: './TableList',
  },

  {
    path: '/',
    redirect: '/welcome',
  },
  {
    component: './404',
  },
];
