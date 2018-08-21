/* IDEA: utility to build a multi-layered site
   so this will be node.js app
   build a utility to create, update, and even change existing and add new project detail data
   evetually...
      integrate...
      frameworks, like express
      html rendering, like pug
      route testing, like postman

   IDEA: once the commandline version works....
   build a UI thats works along with commandline utility
   first as a express server
   then using react.js
      a console for commands and also to view real-time logging
      a UI to update the site and data
      a UI to preview the site

   IDEA: set up a constructor class with prototype methods
   and also use an IIFE module
*/

/* TODO: for now... just get the current code to work:
   most of the code below is just brain-storming
   flush out how to create new vs append project data json file
   then work out other features...
*/

// require module I wrote in project6
const helperUtils = './helperUtils.js';


// method for error handling and verbose logging mode

    const errOrDebug = (error, message, module, debug) => {

        // error and logging functions can be placed here
        // can setup a flag to enable a 'verbose' mode for debugging
        // will have to build debug and err checking into each method

        /* IDEA : enhance helperUtils
           build QA, debug and error handling module as part of core
           to use as template or module to build other node.js apps with
           are there built in messaging in the javascript commands being used that can be 'caught'?

           NOTE: to use helperUtils.logError()...
              have to pass the following from every method that calls it
                error, even if error is blank,
                a message string, a module/method string,
                and debug object

               cool! I am wrapping my helperUtils methods in a local function
        */

        if (error){

          console.err('oops, there was an error\n', error.code, error.message);
          helperUtils.logError(error, message, module, debug);

        } else if (debug) {

          console.log('debug mode is turned on\n', debug.code, debug.message);
          console.log(`logging to ${pathToLogFile}\`${timeStamp}.log`)

          helperUtils.logError(error, message, module, debug);
        }

    };

// open file, read data into and returb currentDataObject

    const getJsonData = (pathToDataFile, debug) => {

    // will be using method from my own store.js library
    // read json data into object
    // probably will be try/catch
      if (ok) {
        return currentDataObject;
      } else if (debug){
        return errOrDebug(error, message, module, debug);
      } else {
        return errOrDebug(error, message, module, debug);
      }

    }; // end getJsonData()

// set nextId to id of last object in projects array

    const setNextId = (currentDataObject, debug) => {

      // forget the array method for this, but it will look something like...
      if (ok) {
        return currentDataObject[lastIndexItem.id];
      } else if (debug){
        return errOrDebug(error, message, module, debug);
      } else {
        return errOrDebug(error, message, module, debug);
      }

    }; // end setNextId()

// append new project data back to json data file

    const appendJsonData = (nextId, newProjectData, debug) => {
        // open file for appending
        // will be using method from my own store.js library
        // append new json data, after last object in projects array (nextId - 1)
        // close file

        if (ok) {
          return "ok, message";
        } else if (debug){
          return errOrDebug(error, message, module, debug);
        } else {
          return errOrDebug(error, message, module, debug);
        }

    }; // end saveJsonData()

// append new project data to projects array in data.json file
// rigth now, every thing start in this function

    const appendNewProjectData = (pathToDataFile, debug) => {

      // declaring format to match data.json projects array
      // IDEA: make this a constructor class

          const projectData = {
            "id":0,
            "project_name": "",
            "description": "",
            "technologies":[],
            "live_link":"",
            "github_link":"",
            "image_urls":[]
           };

           // setting up the debug object that will get passed around
           const debug = {
             enabled = false,
             code = '',
             message = ''
           };

        // get arguments from commanline
        argumentsString = process.argv.slice(2).toString().toLowerCase();

        // parse argumentsString
        const toFirstSpaceOrComma = ''; // TODO: replace with some clever RegExp
        pathToDataFile = argumentsString.match(toFirstSpaceOrComma);

        // parse argumentsString
        const fromFirstSpaceOrComma = ''; // TODO: replace with some clever RegExp
        debug.enabled = argumentsString.match(fromFirstSpaceOrComma);

        // open file, read data into object
        const currentDataObject = getJsonData(pathToDataFile);
        // set nextIdnumber
        const nextIdnumber = nextId(currentDataObject);

        // use nextIdnumber  to build a "new project folder name" var
        // based on current naming convention
        const nextProjectFolder = `Project${nextIdnumber}`;

        /* steps to build new project details object
        // 1: get img urls
           // use current file naming convention
           // read folder path to find img folder paths for each file
           // read into an image_urls array
        // 2: read Project Name, description from a file or from argv
           // read technologies list into technologies array
           // set a projectName and projectDescription string var
        // 3: create an object = nextProjectObject
           // assign and set property values for...
           // id, project name, description, and eacg img folder path string
        */

        const newProjectData = new ProjectData;
        newProjectData[nextId.project_name] = projectName;
        // assign other property values here...

        saveJsonData(nextIdnumber, newProjectData);


        if (ok) {
          return 'ok.message'
        } else if (debug){
          return errOrDebug(error, message, module, debug);
        } else {
          return errOrDebug(error, message, module, debug);
        }
    }; // getNewProjectData()
