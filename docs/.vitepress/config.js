export default {
    title: '切克切克的个人博客',
    description: '切克切克的个人博客',
    base: '/blog/',
    themeConfig: {
        logo: "/images/logo.png", // 页面上显示的logo
        nav: [
            // 页面右上角的导航
            // { text: "vue", link: "/articles/vue/上传素材到COS" },
            // { text: "uniapp", link: "/articles/uniapp/一键登录" },
            // {
            //     text: '博客文档',
            //     items: [ // 可以配置成下拉
            //         { text: 'JavaScript 核心系列', link: '/articles/javaScript-core/构造函数、原型、原型链' },
            //         { text: 'Vue 三方组件库', link: '/articles/libs/VForm3低代码初体验' },
            //         { text: '其他', link: '/articles/other/nvm管理node' },
            //     ]
            // }
        ],
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
                        { text: '进阶', link: '/interview/Vue/advanced' },
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
