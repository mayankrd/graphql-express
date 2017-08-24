[![npm](https://rawgit.com/aleen42/badges/master/src/npm.svg)](https://cdn.rawgit.com/aleen42/badges/master/src/npm.svg) [![github](https://rawgit.com/aleen42/badges/master/src/github.svg)](https://cdn.rawgit.com/aleen42/badges/master/src/github.svg)
# graphql-express
Node.js - GraphQL / Express / JSON Server / Axios based data query platform starter kit

## Getting Started

```
git clone repo
npm install
npm run dev:server
npm run json:server

```
###### Browse to http://localhost:3001/graphql
###### Use GraphiQL to send the request
#### Sample request:
```
{
  customer(id: "5")
  {
    name,
    age
  }
}
```

## Built With

* [Node.js®](https://nodejs.org/en/) - A JavaScript runtime
* [GraphQL](http://graphql.org/) - A query language for APIs 
* [JSON Server](https://github.com/typicode/json-server) 
* [Axios](https://github.com/mzabriskie/axios)

## Acknowledgments

* Hat tip to anyone who's code was referred
