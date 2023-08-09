# 使用vitepress搭建一个属于自己的个人博客并部署至GitHub Pages
## 前言
### 本博客网站是基于vitepress搭建的，并将其部署在Github Pages上，本文将介绍其主要流程

VitePress 是一个静态站点生成器 （SSG），旨在构建快速、以内容为中心的网站。简而言之，VitePress 获取用 Markdown 编写的源内容，为其应用主题，并生成可以轻松部署到任何地方的静态 HTML 页面。

VitePress是VuePress的精神继承者。最初的 VuePress 基于 Vue 2 和 webpack。借助 Vue 3 和 Vite，VitePress 提供了明显更好的 DX、更好的制作性能、更精致的默认主题和更灵活的自定义 API。

## 构建仓库
github创建一个public仓库，并将其clone到本地，本文中起名为blog

## 初始化VitePress
进入blog文件夹，初始化项目
``` bash
pnpm init
```
安装相关依赖
``` bash
pnpm install vitepress vue
```
创建docs文件夹并第一个文档
``` bash
mkdir docs ##手动创建也可，之后的文档都放在docs文件夹下
```
``` bash
echo '# Hello VitePress' > docs/index.md ##在docs文件夹下创建index文档
```
在 page.json 加入执行脚本

``` json
{
    ...
    "scripts": {
        "docs:dev": "vitepress dev docs",
        "docs:build": "vitepress build docs",
        "docs:serve": "vitepress serve docs"
    },
    ...
}
```

本地运行
``` bash
pnpm run docs:dev
```
项目就在本地跑起来啦
![](/src/vitepress/eg1.png)

## 进一步配置

### 项目结构
``` arduino
├─ .github // 部署相关配置
│  ├─ workflows
│  │  ├─ deploy.yml
├─ docs 
│  ├─ .vitepress //配置文件夹，后续可添加主题配置
│  │  ├─ config.js // 配置文件
│  ├─ articles // 存放文章的文件夹
│  │  ├─ HTML
│  │  ├─ CSS
│  │  └─ ...
│  ├─ src //存放静态资源 
│  │  ├─ logo.svg 
│  │  ├─ ...
│  ├─ index.md //项目首页 
└─ package.json
```

### 配置首页index.md
``` md
---
layout: home

hero:
  name: 标题
  text: 副内容信息
  tagline: 副内容信息
  image:
    src: /src/logo.svg
    alt: 网站的 logo 图片
  actions:
    - theme: brand
      text: VitePress文档
      link: https://vitepress.dev/
    - theme: alt
      text: 本网站源码
      link: https://github.com/qkqk16416/blog
features:
  - icon: ⚡️
    title: 技术文章
    details: 技术分享 && 疑难杂症
    link: /articles/vitepress.md
  - icon: 🖖
    title: 面试题库
    details: 常见的面试题
    link: /interview/HTML/index.md
  - icon: 🛠️
    title: 开发工具
    details: 开发过程中用到的小工具
    link: /tools/smalldev.md
---


```
### 配置config.js

可根据个人需求进行更改
注：所有的link路径均为docs目录下

``` javascript
export default {
    title: '切克切克的个人博客',
    description: '切克切克的个人博客',
    base: '/blog/', //需与仓库名相同
    themeConfig: {
        logo: "/images/logo.png", // 页面上显示的logo
        nav: [
            //页面右上角的导航
            { text: "vue", link: "/articles/vue/上传素材到COS" },
            { text: "uniapp", link: "/articles/uniapp/一键登录" },
            {
                text: '博客文档',
                items: [ 
                    { text: 'JavaScript 核心系列', link: '/articles/javaScript-core/构造函数、原型、原型链' },
                    { text: 'Vue 三方组件库', link: '/articles/libs/VForm3低代码初体验' },
                    { text: '其他', link: '/articles/other/nvm管理node' },
                ]
            }
        ],
        //sidebar配置成对象，可根据不同页面切换不同侧边栏
        sidebar: {
            '/articles/': [
                { text: 'vitepress搭建博客', link: '/articles/vitepress.md' }
            ],
            '/interview/': [
                {
                    text: 'HTML',
                    collapsed: true,
                    items: [
                        { text: '基础', link: '/interview/HTML/' },
                        { text: '进阶', link: '/interview/HTML/advanced' },
                    ],
                    sidebarDepth: 3
                },
                {
                    text: 'CSS',
                    collapsed: true,
                    items: [
                        { text: '基础', link: '/interview/CSS/' },
                        { text: '进阶', link: '/interview/CSS/advanced' },
                    ]
                },
                {
                    text: 'Javascript',
                    collapsed: true,
                    items: [
                        { text: '基础', link: '/interview/Javascript/' },
                        { text: '进阶', link: '/interview/Javascript/advanced' },
                        { text: '困难', link: '/interview/Javascript/nightmare' },
                    ]
                },
                {
                    text: 'Vue',
                    collapsed: true,
                    items: [
                        { text: '基础', link: '/interview/Vue/index.md' },
                        // { text: '进阶', link: '/interview/Vue/advanced' },
                    ]
                },
                {
                    text: '浏览器',
                    collapsed: true,
                    items: [
                        { text: '基础', link: '/interview/Vue/' },
                        { text: '进阶', link: '/interview/Vue/advanced' },
                    ]
                },
                {
                    text: '网络',
                    collapsed: true,
                    items: [
                        { text: '基础', link: '/interview/Network/' },
                        { text: '进阶', link: '/interview/Network/advanced' },
                    ]
                },
                {
                    text: '安全',
                    collapsed: true,
                    items: [
                        { text: '基础', link: '/interview/Security/' },
                        { text: '进阶', link: '/interview/Security/advanced' },
                    ]
                },
                {
                    text: '面经',
                    collapsed: true,
                    items: [
                        { text: '基础', link: '/interview/Experience/' },
                        { text: '进阶', link: '/interview/Experience/advanced' },
                    ]
                },
            ],
            '/tools/': [
                {
                    text: 'Tools',
                    collapsed: true,
                    items: [
                        { text: 'Samlldev', link: '/tools/smalldev.md' },
                    ]
                }
            ],
        },
        socialLinks: [{ icon: "github", link: "https://github.com/qkqk16416/blog" }], // 可以连接到 github
    },
}
```

## 部署至github
在根目录下创建.github/workflows/deploy.yml
``` yml
name: Deploy

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v3
        with:
          node-version: 16
      - run: npm i pnpm -g
      - run: pnpm install --frozen-lockfile

      - name: Build
        run: pnpm docs:build

      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: docs/.vitepress/dist


```
将代码上传至仓库即可自动部署
<br>
<br>
![](/src/vitepress/actions.png)

**可以看到一开始部署出了错，点进去看detail具体报错发现没有权限，几经搜索后发现需要在github的settings=>actions=>general中勾选"Read and write permissions"**
<br>
<br>
![](/src/vitepress/permission.png)

**部署成功后,发现自动多了一个gh-pages分支，进入github=>settings=>pages将分支选择为gh-pages**
<br>
<br>
![](/src/vitepress/pages.png)

随后点击github page为你生成的网址即可访问啦
![](/src/vitepress/result1.png)
![](/src/vitepress/result2.png)

## 更多配置可见vitepress官方文档
[VitePress英文文档](https://vitepress.dev/)。  

[VitePress中文文档](https://vitejs.cn/vitepress/)。

[Markdown语法](https://markdown.com.cn)。


