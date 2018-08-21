// require modules
const fs = require('fs');
const util = require('util');

// methods and functions

// error Handler function, not exported.... yet..
    function logError(error, message, module, debug){

      const defaultFolderPath = './data/';
      const debugLogFilename = `${getCurrentTimeStamp('fullYearMonthDate')}.log`;
      const errorLogFilename = 'scraper-error.log';
      let errorMessage = message;


      if (debug && debug.type === 'debug'){
        const debuglog = `debug: ${module}, ${debug.message}, ${debug.code}, ${getCurrentTimeStamp('timestamp')}\r\n`;
        appendData(defaultFolderPath, `${debugLogFilename}`, debuglog);
      } else if (error && error.code !== `EEXIST`){
        const errorlog = `error: ${module}, ${errorMessage}, ${error.code}, ${getCurrentTimeStamp('timestamp')}\r\n`;
        appendData(defaultFolderPath, `${errorLogFilename}`, errorlog);
      }
    } // end handleError()

// method to check for a ../data folder, if none, create one
    function verifyDefaultPath(pathtoDataFolder, logDebug){
      if (logDebug){
        const debug = {
          message: 'veryifying default folder path',
          moduile: 'verifyDefaultPath',
          code: 'true'
        };
      }
      // variables
      const defaultFolderPath = 'data';
      let dataFolder = defaultFolderPath;
      // if path to data folder IS specified, use it, if not use default data folder path
       if (pathtoDataFolder){
        dataFolder = pathtoDataFolder;
       }
      // makes dir, if already exist send error: EEXIST
      fs.mkdir( dataFolder, logError);

    } // end checkforDataFolder()

    function getCurrentTimeStamp(setting){

    var currentDate = new Date();
      if (setting === 'timestamp'){
        // add leading zero's for hh, mm and dd, then take last 2 digits
        return `${new Date()}`;
      } else if (setting == 'time'){
        // but, add leading zero's for mm and dd, then take last 2 digits
        var hh = ('0' + currentDate.getHours()).slice(-2);
        var mm = ('0' + currentDate.getMinutes()).slice(-2);
        var ss = ('0' + currentDate.getMinutes()).slice(-2);
        return `${hh}:${mm}:${ss}`;
      } else if (setting = 'fullYearMonthDate'){
        // full year is always 4 digits
        var yyyy =  currentDate.getFullYear();
        // but, add leading zero's for mm and dd, then take last 2 digits
        var mm = ('0' + (currentDate.getMonth()+1)).slice(-2);
        var dd = ('0' + currentDate.getDate()).slice(-2);
        return `${yyyy}-${mm}-${dd}`;
      }
    } // end getCurrentTimeStamp

// method for saving the data, if no ext, none included, encodes as utf-8
    function save(__dirname, filename, data){
      fs.writeFileSync(__dirname + filename, data , function(err) {
          if(err) {return console.log(err);}
          console.log("The file was saved!")
        })
    }

// method for loading data from file
// not used in current version.. but will be implementing in future...
// note the 'utf-8', option for telling readFileSync what data to expect
    function load(__dirname, filename){
      console.log('loading file..' + __dirname + filename);
      return fs.readFileSync( __dirname + filename, 'utf8');
    }

    function appendData(__dirname, filename, data){
      let fd;
      try {
        fd = fs.openSync(__dirname + filename, 'a');
        fs.appendFileSync(fd, data, 'utf8');
      } catch (err) {
        /* Handle the error */
        console.log(`error appending data: ${err}`);
      } finally {
        if (fd !== undefined)
          fs.closeSync(fd);
      }
    }
// exports
module.exports.getCurrentTimeStamp = getCurrentTimeStamp;
module.exports.verifyDefaultPath = verifyDefaultPath;
module.exports.save = save;
module.exports.load = load;
module.exports.appendData = appendData;
module.exports.logError = logError;
