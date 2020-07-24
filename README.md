# A Tutorial: Building A Portfolio Site, using Node.js and Express, JSON data, and PUG templates

## ***Slowly turning this into a tutorial project***

   *Out of this project, I will create several other projects.*

   *the actual repo for my live portfolio site is now private, for obvious reasons =)*

   *this tutorial does not go into how to setup hosting nor how to launch the app online*

   ***TODO: Create a Bootstrap version of this project***

   ***TODO: Create a React version of this project***

# A Portfolio Site for your of Web Apps

- built as part of Full Stack Java Script, Team TreeHouse Tech Degree, Unit 7  

- this site is built using Node.js, Express Framework, and Pug for html template rendering

- built from this code : my current portfolio site hosted on Heroku: https://dap-dev.herokuapp.com

## New Features Wish List

- implement back-end and UI for adding more featured projects and project data

## Prep and Build Steps:

### Step 1: Featuring Your Web App, Web Server or Projects

- Verify that all projects to be featured pass a quality check and are all shined up for display

- ideally have finished projects, that are ready to go live
  - ideally Github public repo or some other public place for visitors to see your code
  - a live internet link to the demo of or to show the app or service running

### Step 2: Images and Screenshots of Projects

- Profile pic of yourself or logo, avatar that will be displayed with your portfolio

- best to take widescreen screen shots of you app or service
  - full imgs to show each site's various pages

- check out my portfolio for an idea of what these are
  - https://dap-dev.herokuapp.com

### Step 3: create json data for projects and profile

- imported using app.locals

- hint: rename the sample data.json and profile.json to data.bak.json and profile.bak.json
  - when ready, just create your own data/profile.json files using the same json syntax

- if keeping data in a different folder and/or using different names
  - place path to and name of your json data files in respective places in importData.js

- the importData.js will automatically import your json data for use in the app
  - for now...
    - dont change portfolio.projects and portfolio.profile
      - these object references are used through-out the code
  - once more familiar with the code...
    - then change the object names and every references to them

***todo: include some sample explanation or demo code here***

### Step 4: set up routes and rendering for valid paths

- If you did step 3: correctly, you wont need to doing anything here.
  - In a real world app, a developer and dev-ops will need to know these routes inside and out.
  - You will need know how the routes are setup, how these work, and what happens the routes don't work.

- The static routes are loaded by...
  - routes/index.js
  - routes/about.js

- The dynamic routes for each featured project are loaded by...
  - routes/projects.js
    - this uses the object imported from importData.js to create any routes needed

- Console logging is built-in
  - so the web server will log what it is doing
    - routes/message.js is an easy way to set up console messaging
      - imported by app.js
      - used by static routes (index.js) and dynamic routes (projects.js)
      - in a real world production web server, this will most likely be handled by the hosting platform
        - I use Heroku, but there are many others; like Joyent for example.

- ***todo: add code to enable when in development mode, but disabled in production mode***
- ***todo: add code to write console logging to log file in development mode***

### STEP 5: rendering for static, index and about,

- project and profile data passed to pug files via res.local
  - ***todo: include some sample explanation or demo code here***

- project and profile data properties added to all pug files
  - ***todo: include some sample explanation or demo code here***

### STEP 6: error handling

- uses custom error module: routes/message.js
  - console logging of errors
  - different err logged and data properties and profile data passed to error.pug
    - when called from /projects/:id
    - or for invalid paths

- ***todo: include some sample explanation or demo code here***

### Step 7: include use of node.js path module

- ***todo: include some explanation or demo code here that shows why 'PATHS' is needed***

### STEP 8: This is private, unpublished, NPM package

- launches express app in development environment
    - npm start

- ***todo: include NPM how-to and sample explanation or demo code here***

- ***todo: include use of Firefox and/or Chrome Dev Tools how-to here***

## COMPONENTS by file:

### Javascript

#### ./app.js :

- main express app

#### ./routes/index.js and projects.js :

- routes for /, /about and /projects

#### ./routes/message.js :

- modified from Express Basics version
  - added custom msg key/values
  - and added a logErrors function
  - for console and error logging

#### ./importData.js :

- to import project, profile json data

### JSON Data

#### ./profile.json :

- personal and contact info data used in
  - layout.pug, about.pug and sidebar in layout.pug

#### ./data.json :

- project data used in part through-out all pug files
  - and in project.pug and projects.pug

### CSS Styling

#### ./public/css/styles.css :

- placed my custom styles at end of styles.css

### PUG templates

#### ./views/layout.pug :

- sets up the basic layout of all the pages in the site

#### ./views/project and projects.pug :

- for rendering project views, your profile page, and project data properties as needed

#### ./views/index.pug and about.pug :

- add profile and project data properties as needed

#### ./views/error.pug :

- for rendering custom status 404 pages
- using error.status, error.message and error.stack properties

#### ./img/profilePic :

- add my own profile img and favicon img

#### ./img/project :

- screen-shots of tech-degree projects 1 thru 5
