const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'TheMap',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Datastore',
        link: '/Datastore/',
      },
      {
        text: 'Editor',
        link: '/Editor/'
      },
      {
        text: 'Github',
        link: '/github'
      }
    ],
    sidebar: 
    [
      {
        title: 'Getting Started',
        path:'/Getting Started/',
        collapsable: false,
        sidebarDepth:1,
        children: [
          '/Getting Started/Concepts',
          '/Getting Started/Tasks'
        ]
      },
      {
      
        title: 'Sandbox',
        path:'/Sandbox/',
        collapsable: false,
        sidebarDepth:1,
        children: [
          '/Sandbox/'
        ]
      },
      {
      
        title: 'Repo',
        path:'/Repo/',
        collapsable: false,
        sidebarDepth:1,
        children: [
          '/Repo/',
          '/Repo/Viewing Maps'
        ]
      },
      {
      
        title: 'Datastore',
        path:'/Datastore/',
        collapsable: false,
        sidebarDepth:1,
        children: [
          '/Datastore/'
        ]
      },
      {
      
        title: 'Editor',
        path:'/Editor/',
        collapsable: false,
        sidebarDepth:0,
        children: [
          '/Editor/',
          '/Editor/Profile'
        ]
      },
      {
      
        title: 'Python',
        path:'/Python/',
        collapsable: false,
        sidebarDepth:1,
        children: [
          '/Python/'
        ]
      },


        // {
        //   title: 'TheMap',
        //   path:'/themap/',
        //   collapsable: false,
        //   sidebarDepth:2,
        //   children: [
        //     '/Datastore/',
        //     '/Sandbox/',
        //     '/Repo/',
        //     '/Editor/',
        //     '/Geocode/',
        //     '/Python/'
        //   ]
        // },

]},

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
