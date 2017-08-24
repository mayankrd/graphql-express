/**
 * Created by mayankrd on 8/24/17.
 */

// using axios to send a simple http get request to json-server
const axios = require('axios');

// importing required modules from graphql
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
} = require('graphql');

// customer type
const CustomerType = new GraphQLObjectType({
    name: 'Customer',
    fields: () => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        age: { type: GraphQLInt }
    })
});

// root query
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        customer:{
            type: CustomerType,
            args: {
                id: {type: GraphQLString}
            },
            resolve(parentValue, args){
                return axios.get('http://localhost:3000/customers/'+ args.id)
                    .then(res => res.data);
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});