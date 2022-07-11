const { defaultTheme } = require('@vuepress/theme-default')

module.exports = {
  title: 'Devin\'s Blog',
  head: [['link', { rel: 'icon', href: '/img/nuddles.png' }]],
  theme: defaultTheme({
    lastUpdated: false,
    contributors: false,
    logo: 'https://img.tt98.com/d/file/biaoqing/20191107/12.gif',
    navbar: [
      {
        text: '百度前端训练营作品',
        children: [
          {
            text: '百度前端训练营',
            children: [
              '/project/baiduTrain/homework-day1&2/变色按钮/项目笔记.md',
              '/project/baiduTrain/homework-day1&2/用HTML实现信件demo/项目笔记.md',
              '/project/baiduTrain/homework-day1&2/实现loading动画/项目笔记.md',
              '/project/baiduTrain/homework-day1&2/记事本/项目笔记.md',
              '/project/baiduTrain/homework-day1&2/响应式设计demo/项目笔记.md',
            ]
          }
        ]
      },
      {
        text: '入门前端',
        children: [
          {
            text: '知识库',
            children: [
              '/frontend/01-HTML/html笔记.md',
              '/frontend/02-CSS/CSS总结',
              '/frontend/02-CSS/CSS_Flex布局',
              '/frontend/03-JS基础/JS基础扫盲',
              '/frontend/03-JS基础/JS常见问题-ES6',
              '/frontend/05-Vue2、Vue3/vue2/Vue2概览',
              '/frontend/05-Vue2、Vue3/vue3(基于vue2)/vue3(基于vue2学习)',
              '/frontend/06-promise、axios、webpack、tabbar/Promise',
              '/frontend/06-promise、axios、webpack、tabbar/axios',
              '/frontend/06-promise、axios、webpack、tabbar/webpack',
              '/frontend/06-promise、axios、webpack、tabbar/tabbar',
              // '/frontend/',
            ]
          }
        ]
      },
      {
        text: 'JS高级',
        link: 'https://github.com/jsdevin/Study-notes/tree/main/04-JS%E9%AB%98%E7%BA%A7'
      },
      {
        text: '进击前端',
        children: [
          {
            text: '项目',
            children: [
              '/project/cms-vue3/01-项目搭建规范', // 用的是字面量方法，会自动将文章的标题渲染为选项标题
            ],
          },
        ],
      },
      {
        text: '面试题',
        children: [
          '/interview/JS篇/'
        ]
      },
      {
        text: '计算机基础',
        children: [
          {
            text: '数据结构与算法',
            // children: ['/basis/data_construct', '/group/sub/bar.md'],
            link: 'https://github.com/jsdevin/Study-notes/tree/main/06-%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E5%92%8C%E7%AE%97%E6%B3%95'
          },
          {
            text: '计算机网络',
            link: 'https://github.com/jsdevin/Study-notes/tree/main/07-%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C'
          },
          {
            text: 'LeetCode刷题顺序',
            link: 'https://github.com/jsdevin/leetcode-master'
          }

        ],
      },      
      {
        text: '杂谈',
        children: [
          {
            text: 'GitHub个人仓库',
            link: 'https://github.com/jsdevin'
          },
          {
            text: '后端',
            children: [
              {
                text: 'java学习路线',
                link: 'https://github.com/liyupi/code-roadmap/blob/main/docs/roadmap/Java%E5%AD%A6%E4%B9%A0%E8%B7%AF%E7%BA%BF.md'
              },
              {
                text: 'java基础笔记(待定)',
                link: 'https://baidu.com'
              }
            ],
          }
        ],
      },
    ],
    sidebar: {
      '/': [
        {
          text: '入门前端',
          collapsible: true,
          children: [
            '/frontend/01-HTML/html笔记.md',
            '/frontend/02-CSS/CSS总结',
            '/frontend/02-CSS/CSS_Flex布局',
            '/frontend/03-JS基础/JS基础扫盲',
            '/frontend/03-JS基础/JS常见问题-ES6',
            '/frontend/05-Vue2、Vue3/vue2/Vue2概览',
            '/frontend/05-Vue2、Vue3/vue3(基于vue2)/vue3(基于vue2学习)',
            '/frontend/06-promise、axios、webpack、tabbar/Promise',
            '/frontend/06-promise、axios、webpack、tabbar/axios',
            '/frontend/06-promise、axios、webpack、tabbar/webpack',
            '/frontend/06-promise、axios、webpack、tabbar/tabbar',
          ]
        },
        {
          text: '进击前端',
          collapsible: true,
          children: [
            {
              text: '后台管理系统',
              collapsible: true,
              children: [
                '/project/cms-vue3/01-项目搭建规范.md', 
                '/project/cms-vue3/02-登录页面UI实现.md',
                '/project/cms-vue3/03-登录页面的逻辑.md',
                '/project/cms-vue3/04-首页UI的实现',
                '/project/cms-vue3/动态路由',
                '/project/cms-vue3/权限管理',
                // '/project/cms-vue3/',
                // '/project/cms-vue3/',
              ]
            },
          ]
        },
      ],
      '/interview/': [
        {
          text: 'JS手写题',
          collapsible: true,
          children: [
            '/interview/JS篇/01.内置类型-typeof-类型转换-深浅拷贝.md',
            '/interview/JS篇/02.原型-new-instanceof-this-执行上下文.md',
            '/interview/JS篇/03.闭包-模块化-防抖-节流-继承',
            '/interview/JS篇/04.call、apply、bind、Promise、async、await、迭代器、生成器、Proxy',
            // '/interview/JS篇/',
          ]
        }
      ]
    },
  }),
}