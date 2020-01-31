# Blockchain Demo

A simple web application that demonstrates how blockchain works

##Demo

Live Demo:

##Project description

This app is a simple blochchain model with the below functionalities:
* Generating genesis block with pre-defined difficulty level.
* Adding block to the chain.
* Configuring difficulty level.
* Able to change data in the existing block.
* A mutation in previous block making its hash invalid and also leading invalid previous hash to all subsequent blocks.
* Able to re-mine the invalid blocks after mutating.
 
## Built With

* ReactJS: App framework.
* Redux: state management pattern + library for Reactjs application.
* Web Workers: used to run scripts in background threads.
* Webpack Worker-loader: a webpack loader that registers a script as a Web Worker.
* Ethers : for cryptographic functions.
* React-transition-group: for making animations when appearing or hiding.
* SASS: for styling.

## Setup
```
npm install
or
yarn install
```
## Compiles and live-reloads for development
```
npm start
or
yarn start
```
## Compiles and minifies for production
```
npm run build
```
