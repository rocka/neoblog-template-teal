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
                name: 'Info',
                items: [
                    `OS: ${process.platform} ${process.arch}`,
                    `Node: ${process.version}`
                ]
            }
        ]
    }
};
