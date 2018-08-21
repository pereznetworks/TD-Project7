// message.js - messages, html snippets and a log function

const html = {
    home: `<h1>Testing Express Framework</h1>`,
    hello: `<h1>Testing..</h1><p><strong>will be removing after initial testing...</strong></p>`,
}

const status = {
    running: 'running on local port 3000',
    home: 'request for home pg, sending...',
    about: 'request for about pg, sending...'
}

function log(msg){
    console.log(msg);
}

// module export for log method and html, status object
module.exports.log = log;
module.exports.html = html;
module.exports.status = status;
