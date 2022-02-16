const { description } = require('../../package')

module.exports = {
  markdown: {
    lineNumbers: true,
  },
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Guias, PlugIns y Templates',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  dest:'docs',
  base:'/notebook/',
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
        text: 'Guias',
        link: '/guide/',
      },
      {
        text: 'Templates',
        link: '/templates/'
      },
      {
        text: 'Plugins',
        link: '/plugins/'
      }
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'Guias',
          collapsable: true,
          children: [
            '',
            'using-vue',
            'git',
          ]
        }
      ],
      '/templates/': [
        {
          title: 'Templates',
          collapsable: true,
          children: [
            '',
          ]
        }
      ],
      '/plugins/': [
        {
          title: 'Plugins',
          collapsable: true,
          children: [
            '',
          ]
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    '@vuepress/search', {
      searchMaxSuggestions: 10
    },
    '@vuepress/nprogress',
    '@vuepress/medium-zoom', {
      selector: 'img.zoom-custom-imgs',
      // medium-zoom options here
      // See: https://github.com/francoischalifour/medium-zoom#options
      options: {
        margin: 16
      }
    },
    'vuepress-plugin-container',
      {
        type: 'right',
        defaultTitle: '',
      },
    'vuepress-plugin-smooth-scroll',
  ]
}
