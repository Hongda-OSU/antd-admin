module.exports = {
  siteName: 'AntD Admin',
  copyright: 'Ant Design Admin  ©2020 zuiidea',
  logoPath: '/logo.svg',
  apiPrefix: '/api/v1',
  backendApp: 'https://localhost:7050',
  backendAuth: 'https://localhost:7001',
  fixedHeader: true, // sticky primary layout header

  /* Layout configuration, specify which layout to use for route. */
  layouts: [
    {
      name: 'primary',
      include: [/.*/],
      exclude: [/(\/(en|zh))*\/login/],
    },
  ],

  /* I18n configuration, `languages` and `defaultLanguage` are required currently. */
  i18n: {
    /* Countrys flags: https://www.flaticon.com/packs/countrys-flags */
    languages: [
      {
        key: 'pt-br',
        title: 'Português',
        flag: '/portugal.svg',
      },
      {
        key: 'en',
        title: 'English',
        flag: '/america.svg',
      },
      {
        key: 'zh',
        title: '中文',
        flag: '/china.svg',
      },
    ],
    defaultLanguage: 'en',
  },

  routes: [
    {
      "id": "1",
      "icon": "dashboard",
      "name": "Dashboard",
      "zh": {
          "name": "仪表盘"
      },
      "pt-br": {
          "name": "Dashboard"
      },
      "route": "/dashboard"
  },
  {
      "id": "2",
      "breadcrumbParentId": "1",
      "name": "Users",
      "zh": {
          "name": "用户管理"
      },
      "pt-br": {
          "name": "Usuário"
      },
      "icon": "user",
      "route": "/user"
  },
  {
    "id": "6",
    "icon": "dashboard",
    "name": "Pictures",
    "zh": {
        "name": "图片"
    },
    "pt-br": {
        "name": "Pictures"
    },
    "route": "/picture"
},
  {
      "id": "7",
      "breadcrumbParentId": "1",
      "name": "Posts",
      "zh": {
          "name": "用户管理"
      },
      "pt-br": {
          "name": "Posts"
      },
      "icon": "shopping-cart",
      "route": "/post"
  },
  {
      "id": "21",
      "menuParentId": "-1",
      "breadcrumbParentId": "2",
      "name": "User Detail",
      "zh": {
          "name": "用户详情"
      },
      "pt-br": {
          "name": "Detalhes do usuário"
      },
      "route": "/user/:id"
  },
  {
      "id": "3",
      "breadcrumbParentId": "1",
      "name": "Request",
      "zh": {
          "name": "Request"
      },
      "pt-br": {
          "name": "Requisição"
      },
      "icon": "api",
      "route": "/request"
  },
  {
      "id": "4",
      "breadcrumbParentId": "1",
      "name": "UI Element",
      "zh": {
          "name": "UI组件"
      },
      "pt-br": {
          "name": "Elementos UI"
      },
      "icon": "camera-o"
  },
  {
      "id": "45",
      "breadcrumbParentId": "4",
      "menuParentId": "4",
      "name": "Editor",
      "zh": {
          "name": "Editor"
      },
      "pt-br": {
          "name": "Editor"
      },
      "icon": "edit",
      "route": "/editor"
  },
  {
      "id": "5",
      "breadcrumbParentId": "1",
      "name": "Charts",
      "zh": {
          "name": "Charts"
      },
      "pt-br": {
          "name": "Graficos"
      },
      "icon": "code-o"
  },
  {
      "id": "51",
      "breadcrumbParentId": "5",
      "menuParentId": "5",
      "name": "ECharts",
      "zh": {
          "name": "ECharts"
      },
      "pt-br": {
          "name": "ECharts"
      },
      "icon": "line-chart",
      "route": "/chart/ECharts"
  },
  {
      "id": "52",
      "breadcrumbParentId": "5",
      "menuParentId": "5",
      "name": "HighCharts",
      "zh": {
          "name": "HighCharts"
      },
      "pt-br": {
          "name": "HighCharts"
      },
      "icon": "bar-chart",
      "route": "/chart/highCharts"
  },
  {
      "id": "53",
      "breadcrumbParentId": "5",
      "menuParentId": "5",
      "name": "Rechartst",
      "zh": {
          "name": "Rechartst"
      },
      "pt-br": {
          "name": "Rechartst"
      },
      "icon": "area-chart",
      "route": "/chart/Recharts"
  }
  ]
}
