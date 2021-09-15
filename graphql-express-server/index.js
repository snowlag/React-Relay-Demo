var express = require('express');
const { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');
const schema = require("./Schema/schema")
const bodyParser = require('body-parser')
const cors = require('cors')
// GraphQL schema
// var schema = buildSchema(`
//     type Query {
//         message: String
//     }
// `);
// Root resolver
var root = {
    message: () => 'Hello World!'
};


// Create an express server and a GraphQL endpoint
var app = express();
app.use(cors()) 
app.use('/graphql', graphqlHTTP ({
    schema: schema,
    graphiql: true
}));
app.listen(4000, () => console.log('Express GraphQL Server Now Running On localhost:4000/graphql'));