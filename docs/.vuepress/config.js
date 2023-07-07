const moment = require('moment')

moment.locale('zh-cn')

module.exports = {
  base: '/docs/',
  // 网站的一些基本配置
  // base:配置部署站点的基础路径，后续再介绍
  title: '程序猿日记', // 网站的标题
  description: '记录个人在编程世界中的点滴、心情和思考。', // 网站的描述，它将会以 <meta> 标签渲染到当前页面的 HTML 中。
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }], // 需要被注入到当前页面的 HTML <head> 中的标签
    ['meta', { name: 'author', content: '程序猿日记' }], // 需要被注入到当前页面的 HTML <head> 中的标签
    ['meta', { name: 'keywords', content: '专注于Java编程技术的研究和分享' }]
  ],
  plugins: [
    [
      '@vuepress/last-updated',
      {
        transformer: timestamp => {
          return moment(timestamp).fromNow('LLLL')
        }
      }
    ],
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: {
          message: '发现新内容可用',
          buttonText: '刷新'
        }
      }
    ]
  ],
  themeConfig: {
    logo: '/icon.png',
    nav: [
      // 直接跳转，'/'为不添加路由，跳转至首页，以/结尾的最终对应的都是/index.html,也就是README.md文件编译后的页面
      { text: 'Home', link: '/' },
      { text: '计算机', link: '/blog/basic/' },
      // 对应blog/fontend/README.md
      { text: '前端', link: '/blog/fontend/' },
      { text: '后端', link: '/blog/backend/' },
      // 对应/my/my.md
      { text: '我的', link: '/my/my' }
      // 不指定深度，默认深度1-提取h2 最大深度-2，同一标题下最多提取到h3，想要改变深度可以指定sidebarDepth
    ],
    // 禁用导航栏
    // navbar: false,
    // 设置自动生成侧边栏
    // sidebar: 'auto',
    sidebar: {
      //对象的默认路径
      '/blog/basic/': [
        '', //侧边栏第一个页面是：/blog/basic/README.md,、链接文字自动获取(页面的第一个header)，即h1(前端技术)
        'network/' //侧边栏第二个页面是：/blog/fontend/myhtml.md,链接文字自动获取(页面的第一个header)，即h2(html 二级标题)
      ],
      '/blog/fontend/': [
        '', //侧边栏第一个页面是：/blog/fontend/README.md,、链接文字自动获取(页面的第一个header)，即h1(前端技术)
        'html', //侧边栏第二个页面是：/blog/fontend/myhtml.md,链接文字自动获取(页面的第一个header)，即h2(html 二级标题)
        ['javascript', 'Javascript'] //侧边栏第三个页面是：/blog/fontend/myJavascript.md ,指定链接的文字，使用一个格式为 [link, text] 的数组。
      ],
      '/blog/backend/': [
        '', //侧边栏第一个页面是：/blog/fontend/README.md,、链接文字自动获取(页面的第一个header)，即h1(前端技术)
        ['java', 'Java'] //侧边栏第二个页面是：/blog/fontend/myhtml.md,链接文字自动获取(页面的第一个header)，即h2(html 二级标题)
      ]
    },
    // 设置深度，使用了sidebar: 'auto'的话只有设置0才会生效，否则默认2
    // sidebarDepth: 0,
    search: true, // 设置是否使用导航栏上的搜索框
    searchMaxSuggestions: 10, // 搜索框显示的搜索结果数量
    lastUpdated: '更新时间' // string | boolean
  }
}
