module.exports = {
    lang: 'en',
    title: 'Template Teal',
    port: 2233,
    articleDir: './node_modules/@neoblog/neoblog/example/article',
    templateDir: './template',
    templateArgs: {
        // top nav bar items
        nav: [
            { name: 'Index', link: '/' }
        ],
        // right side bar item groups
        side: [
            {
                // group title
                name: 'Thanks To',
                // group items
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
            // Override useragent’s preferred language. Isso has been translated in over 12 languages.
            // The language is configured by its ISO 639-1 (two letter) code.
            // You find a list of all supported languages on https://github.com/posativ/isso/tree/master/isso/js/app/i18n .
            lang: 'en',
            // /path/to/embed.js
            embed: 'https://isso.rocka.me/js/embed.min.js',
            // Isso usually detects the REST API automatically, but when you serve the JS script on a different location,
            // this may fail. Use data-isso to override the API location.
            prefix: '',
            // Enable or disable voting feature on the client side.
            vote: true,
            // Enable or disable avatar generation.
            avatar: true,
            // Number of comments to reveal on clicking the “X Hidden” link.
            reveal: 5,
            // Set to true when spam guard is configured with require-author = true.
            author: false,
            // Set to true when spam guard is configured with require-email = true.
            email: false,
            // Set to true when spam guard is configured with reply-to-self = true.
            replySelf: false,
            // Number of top level (or nested) comments to show by default.
            // If some comments are not shown, an “X Hidden” link is shown.
            maxCommentsTop: 10,
            maxCommentsNested: 5
        }
    }
};
