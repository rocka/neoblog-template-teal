module.exports = {
    lang: 'en',
    title: 'Template Teal',
    port: 2233,
    articleDir: './node_modules/@neoblog/neoblog/example/article',
    templateDir: './template',
    templateArgs: {
        // <html lang="">
        lang: 'en',
        // <html> <head>
        head: {
            meta: [
                // charset, name, content, httpEquiv
                { charset: 'UTF-8' },
                { name: 'theme-color', content: '#009688' },
                // when setup CSP, do not forget to include isso script url.
                { httpEquiv: 'content-security-policy', content: `script-src 'self' https://*;` }
            ],
            link: [
                // as, rel, href, crossorigin, media, sizes, type, title
                { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:400,700|Roboto+Mono' }
            ],
            script: [
                // async, defer, charset, src, type
                { src: '/assets/script.js', defer: true }
            ]
        },
        // <html> <body> <nav>
        nav: [
            { name: 'Index', link: '/' }
        ],
        // <html> <body> <div class="header">
        header: {
            // can be Array<string>/string/null/undefined .
            // string -> specify background image url
            // Array<string> -> randomly pick one each time render
            // null/undefined -> use default image '/assets/header.jpg'
            img: [
                '/assets/header.jpg'
            ],
            motto: {
                // can be Array<string>/string/null/undefined too .
                // even template string
                upper: 'Welcome to NeoBlog',
                // if you would like it to be dynamic, declare it as prop getter:
                get lower() {
                    return [
                        `powered by node ${process.version}`,
                        `running for ${Math.round(process.uptime())} seconds`,
                        'light weight bloggin platform',
                        `the neatest theme I've ever seen`
                    ]
                }
            }
        },
        // right side bar item groups
        side: [
            {
                // group title
                name: 'Powered By',
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
        footer: {
            meta: {
                // display `© ${config.title}` in footer
                // put string to override the text
                copy: true,
                // display 'Powered by NeoBlog' in footer
                platform: true,
                // display 'Themed by Teal' in footer
                theme: true
            }
        },
        isso: {
            // Override useragent’s preferred language. Isso has been translated in over 12 languages.
            // The language is configured by its ISO 639-1 (two letter) code.
            // You find a list of all supported languages on https://github.com/posativ/isso/tree/master/isso/js/app/i18n .
            lang: 'en',
            // /path/to/embed.js
            embed: 'https://isso.rocka.me/js/embed.min.js',
            // Isso usually detects the REST API automatically, but when you serve the JS script on a different location,
            // this may fail. Use data-isso to override the API location.
            prefix: 'https://isso.rocka.me',
            // Enable or disable voting feature on the client side.
            vote: true,
            // Enable or disable avatar generation.
            avatar: true,
            // Uses gravatar images instead of generating svg images.
            // You have to set `isso.avatar` to false when you want to use this,
            // otherwise both the gravatar and avatar svg image will show up.
            // Please also set option "gravatar" to true in the server configuration.
            gravatar: false,
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
            maxCommentsTop: 1,
            // Set to true when reply notifications on server is configured with reply-notifications = true.
            replyNotifications: true,
            maxCommentsNested: 5
        }
    }
};
