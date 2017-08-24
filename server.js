/**
 * Created by mayankrd on 8/23/17.
 */

// initializing an express app
const express = require('express');
const app = express();

// mongoose
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/custdb'); // connect to local mongo databse

/* GraphQL
* configuring /graphql endpoint - entry point to interact with graphql
* */
const graphqlHTTP = require('express-graphql');
const schema = require('./graphql/schema');

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
}));

// configuring / endpoint
app.get('/', function (req, res) {
    res.send('Express Hello!');
});

// bind express app to port 3000
app.listen(3000, () => console.log('express app listening on port 3000'));