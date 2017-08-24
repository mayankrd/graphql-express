/**
 * Created by mayankrd on 8/24/17.
 */
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
} = require('graphql');

// hardcoded data
const customer = [
    { id: '1', name: 'John Doe', email: 'john@yahoo.com', age: 33 },
    { id: '2', name: 'Ron Roe', email: 'ron@yahoo.com', age: 31 },
    { id: '3', name: 'Nancy Nano', email: 'nancy@yahoo.com', age: 32 },
    { id: '4', name: 'Jolly Jackson', email: 'jolly@yahoo.com', age: 30 },
    { id: '5', name: 'Rock Rockstar', email: 'rock@yahoo.com', age: 34 }
];

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
                for(let i=0; i<customer.length; i++){
                    if(customer[i].id == args.id){
                        return customer[i];
                    }
                }
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});