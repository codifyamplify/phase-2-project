# Game Lister

# Description
- Game Lister is to provide a single-page-application with which the user can log video games they would like to play in the future. After all, life is busy and long stretches of time between free time can fog our memories.

# Goals
- The goal of Game Lister is to be a simple to use SPA with which the user can provide a game name and an image URL for a game cover / poster that will be saved into a list. 

# Installation
- Fork and clone the repo to your local machine. Click the "fork" button on the GitHub repo, click the green Code button and ensure "SSH" is selected then click the "copy" button or highlight and copy the repo link. In your machine's terminal create a new directory for the project with the "mkdir" + "your new directory name here" command. We will use "game-lister" as an example name for your directory. Type "cd game-lister" and press enter. Now type "git clone" + paste the SSH link here, and press enter. You have now cloned the project to your local machine.
- Game Lister uses NPM and json-server.
- Json-server is used to simulated a server. If you do not have json-server installed on your machine, open your terminal (your laptops terminal or the terminal in your Visual Code Studio or similar software) and paste this command and press enter:
- npm install -g json-server
- Wait for the process to complete on it's own. When it is finished you are ready to get your simulated server up and running. To start the server and to point it to a database of info it will use to simulate a server, paste this into your terminal and press enter:
- json-server --watch db.json
- In your terminal type "npm install" and press enter to install Node-Package-Manager.
- When finished run the command "npm start."
- You will be prompted to choose whether to run this command on a different port. Select yes and your app should start in your browser.

# Project Status
- Project is awaiting instructor review, and will possibly be revisited in order to expand functionality as new coding concepts are learned by the owner.

# Links and Resources
- Json-server installation help MacOS instructions
- https://www.npmjs.com/package/json-server

This project was created with react-create-app, and what follows is standard README.md input generated in the process.

========================================================

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
