module.exports = {
    title: 'Template Teal',
    port: 2233,
    articleDir: './node_modules/neoblog/example/article',
    templateDir: './template',
    templateArgs: {
        nav: [
            {
                name: 'Index',
                link: '/'
            }
        ],
        side: [
            {
                name: 'Thanks To',
                items: [
                    { text: 'Node', link: 'https://nodejs.org', target: '_blank' },
                    { text: 'Pug', link: 'https://pugjs.org', target: '_blank' },
                    { text: 'Koa', link: 'http://koajs.com', target: '_blank' }
                ]
            },
            {
                name: 'Server Info',
                items: [
                    { text: `OS: ${process.platform} ${process.arch}` },
                    { text: `Node: ${process.version}` }
                ]
            }
        ],
        isso: {
            lang: "zh",
            embed: "https://isso.rocka.me/js/embed.min.js"
        }
    }
};
