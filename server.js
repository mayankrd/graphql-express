/**
 * Created by mayankrd on 8/23/17.
 */

// initializing an express app
const express = require('express');
const app = express();

// graphql
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');

// graphql schema
const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

// graphql root or resolver
const root = { hello: () => 'Hello world!' };

// configuring /graphql endpoint
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));

// configuring / endpoint
app.get('/', function (req, res) {
    res.send('Express Hello');
});

// bind app to port 3000
app.listen(3000, () => console.log('express app listening on port 3000'));