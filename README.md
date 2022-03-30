# Getting Started

This project was bootstrapped with [Single-spa](https://single-spa.js.org/).
This application contains 3 small independent microfrontends. Each microapp is written with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

Standard scripts for React app are available in the project:

- `npm start`
- `npm run build`
- `npm run eject`

To launch this app in the development mode enter `npm start`.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Learn More

You can learn more in the [Single-spa](https://single-spa.js.org/). \
To learn React, check out the [React documentation](https://reactjs.org/).

### Description

There are 3 independent applications in the project.
Each application is responsible for its part on the page:
- Header
- Main
- Footer

All applications are united by a common (primitive) state, which is contained in the 'window' object.

The state can be managed from different parts of the application and will change.

In this example, it is possible to change the value of the counter inside the 'Main' component or from the 'Footer' application.
From 'Footer' you can change user state, by sending request on [JSON Placeholder](https://jsonplaceholder.typicode.com/users). 
And you see changed store in 'Main'. \
The 'Header' will also display the value from the global state