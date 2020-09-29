# URL Shortener
A simple web application to shorten URL

## Features
- shorten URL
- copy new URL

## Environment SetUp
1. [Node.js](https://nodejs.org/en/) 10.22.0
2. [Express](https://expressjs.com/en/starter/installing.html) 4.17.1
3. [nodemon](https://nodemon.io/) 2.0.4
4. [MongoDB](https://www.mongodb.com/try/download/community) 4.2.9

## Installation and Execution
### Setup MongoDB
1. Turn on the DB
```
[~] $ cd ~/mongodb/bin/
[~/mongodb/bin] $ ./mongod --dbpath ~/mongodb-data
```
2. Create a database named "url-shortener"
```
add url-shortener
```

### Activate Project
1. Clone this git to local
```
[~] $ git clone https://github.com/klkuocx/URL_Shortener.git
```

2. Get into the directory
```
[~] $ cd URL_Shortener
```

3. Install packages
```
[~/URL_Shortener] $ npm install
```

4. Run the project
```
[~/URL_Shortener] $ npm run seed
[~/URL_Shortener] $ npm run start
```