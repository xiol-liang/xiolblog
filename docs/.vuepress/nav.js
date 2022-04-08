// .vuepress/nav.js
module.exports = [
  {
    text: 'Resources',
    link: '/resources/website/recommend',
  },
  {
    text: '个人博客',
    link: 'https://xiol-liang.github.io/newblog/',
  },
  {
    text: '前端学习',
    items: [
      { text: 'HTML&CSS', link: '/front_notes/h5c3/css' },
      { text: 'Less', link: '/front_notes/less/less' },
      { text: 'JavaScript', link: '/front_notes/JS/JS' },
      { text: 'Vue', link: '/front_notes/vue/Vue核心基础' },
      { text: 'React', link: '/front_notes/react/react入门' },
      { text: 'Webpack', link: '/front_notes/webpack/Webpack基础' },
      { text: 'Node.js', link: '/front_notes/nodejs/node' },
      { text: '微信小程序', link: '/front_notes/mini-program/base' },
      { text: 'VScode', link: '/front_notes/ide/vscode' },
      { text: 'Git', link: '/front_notes/git/git' },
    ],
  },
  {
    text: '项目',
    ariaLabel: '项目 Menu',
    items: [
      { text: 'COVID-19', link: '/projects/covid19/Headline/' },
      { text: 'Echarts数据可视化展板', link: '/projects/pink-echarts/headline/' },
      { text: '熊熊音乐网', link: '/projects/mymusic/Headline/' },
      { text: '重师校园论坛BBS', link: '/projects/mybbs/Headline/' },
      { text: '校园论坛小程序', link: '/projects/mymini_program/Headline/' }
    ]
  },
  {
    text: 'Learn Other',
    items: [
      {
        text: '3D动画制作学习', items: [
          { text: 'Maya', link: '/language/chinese/' },
          { text: 'Blender', link: '/language/japanese/' },
          { text: 'Unreal Engine 4', link: '/language/japanese/' }
        ]
      },
      {
        text: '视频剪辑学习', items: [
          { text: 'PhotoShop', link: '/language/chinese/' },
          { text: 'Premiere Pro CC', link: '/language/japanese/' },
          { text: 'After Effects', link: '/language/japanese/' }
        ]
      }
    ]
  },
  {
    text: 'Github', link: 'https://github.com/xiol-liang/xiolblog'
  }
]