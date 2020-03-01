### ScrapperMongoDB
# All the News That's Fit to Scrape
Web app using Moongoose, Cheerio and MongoDB to provide you with the latest global news right at your finger tips. The source is from National Public Radio (NPR) and you have the ability to leave your thoughts, comments ir ideas in the note section. Enjoy!

Click here to visit the live website:
https://????.herokuapp.com/

## Table of Content
+ [Instructions](#instructions)
+ [Technologies Used](#tecnologies)
+ [Game Features](#features)
+ [Improvements](#improvements)
+ [creators](#contributors)

## <a name="instructions"> Instructions </a>
To get started you will need these applications:
+ [Node](https://nodejs.org/en/download/) 
+ [npm](https://docs.npmjs.com/cli/install)
+ [MongoDB](https://www.mongodb.com/download-center#community)

```
    npm install 

    install dependencies situated in package.json

    "dependencies": {
      "axios": "^0.19.2",
      "cheerio": "^1.0.0-rc.3",
      "express": "^4.17.1",
      "express-handlebars": "^3.1.0",
      "moment": "^2.24.0",
      "mongoose": "^5.9.2",
      "morgan": "^1.9.1"
    },
    "devDependencies": {
      "handlebars": "^4.5.0"
    }
```
## <a name="technologies"> Technologies Used </a>
* **Express** : Node.js web application framework
* **Express Handlebars** : handlebars view engine for Express
* **MongoDB** : database
* **Mongoose** : supports both promises and callbacks.
* **Cheerio** : parses markup and provides an API for traversing/manipulating the data structure.
* **axios** : promise based HTTP client for the browser and node.js

## <a name="features"> Game Features </a>
**Home Page** Instructions and create/login account.

![Home](./public/img/###)

**Sign-Up Page** Create an encrypted account which will be stored in our database.

![Register](./public/img/###)

**Log-In Page** - Log into game console

![Login](./public/img/333)

**Command Center Page** Command center page of user's account and current status.  

![Command Center](./public/img/###)

## <a name="improvements"> Improvements </a>
* Work-in-progress to add authentication etc.
* Refine and broaden the scrape functionality
* opportunity to simplify the codes further

## <a name="contributors"> Contributor: </a><br />
* James Goh - https://github.com/jgohbb
