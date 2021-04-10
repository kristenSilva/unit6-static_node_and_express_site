# unit6-static_node_and_express_site-v1
 
Static Node.js and Express Site

A portfolio site to showcase projects. The site will contain a modern landing page, an about page to share contact info, practice your elevator pitch and talk a little about yourself, and a series of project pages to show off and detail at least your first five projects from the Treehouse Techdegree.

A JSON file stores all data about the projects created.

Pug is used to complete provided templates that utilize the JSON to generate the markup that is ultimately displayed in the browser.

Node.js and Express used to:

1. Import the required dependencies
2. Link the JSON with the Pug templates
3. Set up routes to handle requests
4. Set up the middleware to utilize static files like CSS
5. Handle errors
6. Set up a server to serve the project

**Complete style changes starting on line 370 of `style.css`
1. Landing pictures magnify when user hovers 
2. Landing pictures have a box shadow
**Minor style changes embedded within pre-existing lines
1. Font changes
    *Font-family for `h1, h2, h3, h4, h5, p` changed to "Gill Sans", sans-serif on line 35 of `style.css`
    *`.sidecar p` font-size changed to 19px
    *`.portfolio-intro p` font-size changed to 135%
    *`.project-info-box p` font-size changed to 20px

Other additions
1. Target attribute set to `_blank` on all links that lead to path outside of portfolio: Github repo, Live demo, social media links
2. Personalized error pages for 404 and 500 errors (`page-not-found.pug` and `error.pug` respectively)
3. `package.json` file set up to run app on `npm start` command