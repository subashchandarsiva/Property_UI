# Propert Management APP - UI

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### About the HOMES UI Application

This is front single page application - which runs in port 3000 , makes a request to the backend Express server to get the homes details, create home details, update home details and to delete the homes from the organization.

We need to start the HOMES API and then we need to start the HOMES CWA app - which enables the front end and back end connection. If the HOMES API is not started - we will see Errors/Error Page

This FE application is developed using ReactJS, GraphQL(to consume the GraphQL Queries), BootStrap4 and JavaScript(also HTML5,CSS3 - in few areas)

### Flow for local working

- After the project is cloned from Git Repo - run "npm install" or you can choose yarn to install the dependencies.
- Once the dependencies are installed - start the application by running "npm start".
- After the above setups - you can try "https://localhost:3000" to see the UI screen.
- Just a note to ensure the backend must be running - if not you will see Error message
