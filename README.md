# Tyler's List | PERN

This is a React app front end built with Redux.  It works with the tylers-list-api backend which consists of a PostgreSQL db, Node Express server and Redis db for JSON Web Tokens.  

## Demo
[Deployed on Heroku]
(https://tylers-list.herokuapp.com)

## Built using

#### Front-end

- [ReactJS](https://reactjs.org/) - Frontend framework
- [Redux](https://redux.js.org/) - State Management
- [React Router](https://reactrouter.com/) - General routing & navigation
- [Styled Components](https://www.styled-components.com/) - UI styling library

#### Back-end

- [Tyler's List API Repo](https://github.com/tylersanderson/tylers-list-api) - Repository for Tyler's List Back-end
- [Node.js](https://nodejs.org/en/) - Runtime environment for JS
- [PostgreSQL](https://www.postgresql.org/) - Opens-source SQL database to store data
- [JSON Web Token](https://jwt.io/) - A standard to secure/authenticate HTTP requests
- [Bcrypt.js](https://www.npmjs.com/package/bcryptjs) - For hashing passwords
- [Redis](https://redis.io/) - In memory database for JSON Web Tokens
- [Docker](https://www.docker.com/) - Development tool for creating, deploying and running applications using containers

## Features

- Authentication (login/register w/ username & password)
- Review/search all open gigs
- Take and post gigs
- Responsive UI

## Screenshots

#### Desktop/Tablet

![Desktop-1](https://github.com/tylersanderson/tylers-list/blob/master/screenshots/desktop1.jpg)
![Desktop-2](https://github.com/tylersanderson/tylers-list/blob/master/screenshots/desktop2.jpg)
![Desktop-3](https://github.com/tylersanderson/tylers-list/blob/master/screenshots/desktop3.jpg)

#### Mobile

![Mobile-1](https://github.com/tylersanderson/tylers-list/blob/master/screenshots/mobile1.jpg)
![Mobile-2](https://github.com/tylersanderson/tylers-list/blob/master/screenshots/mobile2.jpg)

## Usage

#### Env variable:

Create a .env file in server directory and add the following:

```
REACT_APP_API_URL = "your api URL here"

```

#### Client:

Run client development server:

```
cd client
npm install
npm start
```