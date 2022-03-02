export default [
  {
    path: '/menu1',
    name: '菜单分类一',
    // redirect: '/menu1/sub1', // 加了这个所有子页面都不渲染了
    routes: [
      {
        path: '/menu1/sub1',
        name: '菜单分类一功能一列表',
        routes: [
          {
            path: '/menu1/sub1/detail',
            name: '菜单分类一功能一详情',
            component: './menu1/menu1sub1/menu1sub1listdetail.tsx',
            hideInMenu: true,
          },
        ],
      },
      {
        path: '/menu1/sub2',
        name: '菜单分类一功能二列表',
        routes: [
          {
            path: '/menu1/sub2/detail',
            name: '菜单分类一功能二详情',
            component: './menu1/menu1sub2/menu1sub2listdetail.tsx',
            hideInMenu: true,
          },
        ],
      },
    ],
  },
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
            component: './user/Login',
          },
        ],
      },
      {
        component: './404',
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
    path: '/admin',
    name: 'admin',
    icon: 'crown',
    access: 'canAdmin',
    component: './Admin',
    routes: [
      {
        path: '/admin/sub-page',
        name: 'sub-page',
        icon: 'smile',
        component: './Welcome',
      },
      {
        component: './404',
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
