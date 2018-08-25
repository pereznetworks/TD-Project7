// message.js - messages, html snippets and a log function

const status = {
    running: 'running on local port 3000',
    home: 'request for home pg, sending...',
    about: 'request for about pg, sending...',
    projects: 'request for a project pg, sending...',
    routeStatus: `\nA page or path was requested, but there's been a problem.\nError code:`,
    projectStatus: `\nLooks like a project page was requested. But there's been a problem:\nError code:`
}

function logError(msg, code, msgCode){
    console.log(`${msg} ${code}: ${msgCode}\n`);
}

function log(msg){
    console.log(msg);
}

// module export for log method and html, status object
module.exports.log = log;
module.exports.logError = logError;
module.exports.status = status;
