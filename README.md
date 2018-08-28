# A Portfolio of my Apps

    built as part of Full Stack Java Script, Team TreeHouse Tech Degree  

    this site is built using Node.js, Express Framework,
    and Pug for html template rendering

    deployed on Heroku: https://dap-dev.herokuapp.com

# STATUS: PROJECT COMPLETE

    Requirements: all requirements complete

    Exceeds: all 3 complete

# COMPONENTS by file:

        ./app.js :

            main express app

        ./routes/index.js and projects.js :

            routers for /, /about and /projects

        ./routes/message.js :

            modified from Express Basics version
              added custom msg key/values
              and added a logErrors function
                for console and error logging

        ./importData.js :

            to import project, profile json data

        ./profile.json :

            personal and contact info data used in
              layout.pug, about.pug and sidebar in layout.pug

        ./data.json :

            project data used in part through-out all pug files
              and in project.pug and projects.pug

        ./public/css/styles.css :

            placed my custom styles at end of styles.css

        ./views/layout.pug :

            added my own favicon

        ./views/project and projects.pug :

            for rendering project views, add profile
              and project data properties as needed

        ./views/index.pug and about.pug :

            add profile and project data properties as needed

        ./views/error.pug :

            for rendering custom status 404 pages
              using error.status, error.message and error.stack properties

        ./img/profilePic :

            add my own profile img and favicon img

        ./img/project1 through 5 :

            screen-shots of tech-degree projects 1 thru 5

# COMING SOON:

    Will be adding more projects.

    implement back-end and front-end UI for adding featured projects and project data

# REQUIREMENTS:

    Step 1A: Featuring Projects 1 thru 5

    make sure we have a live link for each "front-end" project

      Project 1 : Random Quotes Generator
          Live Link:  https://pereznetworks.github.io/TechDegree-Project1/
          GitHub : https://github.com/pereznetworks/TechDegree-Project1

      Project 2 : Pagination and Content Filtering
          Live Link:  https://pereznetworks.github.io/TechDegree-Project2/
          GitHub : https://github.com/pereznetworks/TechDegree-Project2

      Project 3 : An Interactive Form
          Live Link:  https://pereznetworks.github.io/TD-Project3/
          GitHub : https://github.com/pereznetworks/TD-Project3

      Project 4 : Tic Tac Toe
          Live Link:  https://pereznetworks.github.io/TD-Project4/
          GitHub : https://github.com/pereznetworks/TD-Project4

      Project 5 : Employee Directory
          Live Link:  https://pereznetworks.github.io/TD-Project5/
          GitHub : https://github.com/pereznetworks/TD-Project5

      Step 1B: QA Front-end Projects

          All Projects QA checked and all shined up for display

    Step 2: have screen shots for all front-end Projects 1 - 5

      and a widescreen full imgs to show each site's various pages

    Step 3: create json data for projects and profile

      import to app.locals

      using my own custom module: importData.js

      access data in pug templates

    Step 4: set up routes and rendering for valid paths

      static routes, index and about

      dynamic routes for project pages

    STEP 5: rendering for static, index and about,

      project and profile data passed to pug files via res.local

      project and profile data properties added to all pug files

    STEP 6: error handling complete and tested

      using my own custom error module: message.js

      console logging of errors

      different err logged and data properties and profile data passed to error.pug

          when called from /projects/:id

          or for invalid paths

    Step 7: include use of node.js path module

# Exceeds

    STEP 8: Extra features

      Exceeds Step 1: npm start launches express app

      Exceeds Step 2: use error.status, error.message and error.stack properties in custom error page

      Exceeds Step 3: custom styles added to bottom of css/style.css

    STEP 9: Deployed to Heroku
