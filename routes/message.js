/* modified from Express Basics version
    added custom msg key/values
    and added a logErrors function
      for console and error logging */

// message.js - status messages and 2 logging functions

const status = {
    running: 'running on local port: ',
    home: 'request for home pg, sending...',
    about: 'request for about pg, sending...',
    projects: 'request for a project pg, sending...',
    routeStatus: `\nA page or path was requested, but there's been a problem.\nError code:`,
    projectStatus: `\nLooks like a project page was requested. But there's been a problem:\nError code:`
}

function logError(msg, code, msgCode, stack){
    console.log(`${msg} ${code}: ${msgCode}\n${stack}`);
}

function log(msg){
    console.log(msg);
}

// module export for log method and html, status object
module.exports.log = log;
module.exports.logError = logError;
module.exports.status = status;
