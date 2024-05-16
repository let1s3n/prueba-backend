# Nodejs FES Template

# Environment vars
This project uses the following environment variables:

| Name                          | Description                         
| ----------------------------- | ------------------------------------
|DB_USER           | DB USER
|DB_PWD            | DB PASSWORD
|DB_NAME           | DB NAME
|DB_SERVER         | DB SERVER


# Pre-requisites
- Install [Node.js](https://nodejs.org/en/) version 18.17.1


# Getting started
- Clone the repository
```
git clone  <github template url> <project_name>
```
- Install dependencies
```
cd <project_name>
npm install
```
- Run the project for dev
```
npm run dev
```
- Build the project
```
npm run build
```
- Run the production build of the project
```
npm start
```
  Navigate to `http://localhost:80`

- API Document endpoints

  Pregunta 1 : http://localhost:80/pregunta1 

  Pregunta 2 : http://localhost:80/pregunta2

  Pregunta 3 : http://localhost:80/pregunta3

  Pregunta 4 : http://localhost:80/pregunta4

  Pregunta 5 : http://localhost:80/pregunta5

  Pregunta 6 : http://localhost:80/pregunta6


## Project Structure
The folder structure of this app is explained below:

| Name | Description |
| ------------------------ | --------------------------------------------------------------------------------------------------|
| **dist**                 | Contains the distributable (or output) from your TypeScript build.                                |
| **node_modules**         | Contains all  npm dependencies.                                                                   |
| **src**                  | Contains  source code that will be compiled to the dist dir.                                      | 
| **src/controllers**      | Controllers define functions to serve various express routes.                                     |
| **src/database**         | Controllers define functions to serve various express routes.                                     |
| **src/routes**           | Contain all express routes, separated by module/area of application.                              |
|**src**/app.ts            | Main express server configuration and setup.                                                      | 
|**src**/index.ts          | Entry point to express app.                                                                       |
| package.json             | Contains npm dependencies as well as [build scripts](#what-if-a-library-isnt-on-definitelytyped). |
| tsconfig.json            | Config settings for compiling source code only written in TypeScript.                             |


## Building the project
### Running the build
All the different build steps are orchestrated via [npm scripts](https://docs.npmjs.com/misc/scripts).
Npm scripts basically allow us to call (and chain) terminal commands via npm.

| Npm Script | Description |
| ------------------------- | ------------------------------------------------------------------------------------------------- |
| `start`                   | Runs full build and runs node on dist/index.js. Can be invoked with `npm start`                  |
| `dev`                   | Runs the project starting all watch tasks. Can be invoked with `npm run dev`                                         |
| `build`                   | Runs full build. Can be invoked with `npm run build`                                         |

# Common Issues