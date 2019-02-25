

[Demo](http://cbarraza-socialfeed.surge.sh/)

# Social Feed React App

## Description

Project includes a social feed based on a Stream API (http://dev.massrelevance.com/docs/api/v1.0/stream/#ref-params-standard) and options to set Feed URL, Number of posts to display and Update interval.

At the `/src/components/` you may find a SocialFeed component that receives feedUrl, numberPosts and updateInterval as attributes. This component also includes some basic unit testing using [react-testing-library](https://testing-library.com/react) and Jest based con the [create-react-app](https://facebook.github.io/create-react-app/docs/getting-started) scripts. SocialFeed component contains an example of i18n with by using a higher order component (available at `/src/components/SocialFeed/HOC`).

### Default values 
`feedUrl = http://api.massrelevance.com/MassRelDemo/kindle.json`
`numberPosts = 3`
`UpdateInterval = 2`

## Setup

Open root folder and run `npm install`.

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
