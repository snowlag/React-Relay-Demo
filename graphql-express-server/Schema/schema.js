const graphql = require('graphql')
const { GraphQLObjectType , GraphQLString , GraphQLSchema , GraphQLID , GraphQLInt , GraphQLList  , GraphQLOb} = graphql
const _  = require("lodash")

//sample data
var books =[
    {
        Name : "Harry Potter",
        Genre : "Fantasy",
        id: "1",
        authorid: "3432"
    },
    {
        Name : "Jungle Book",
        Genre : "Adventure",
        id: "2",
        authorid: "143213"
    },
    {
        Name : "Naruto",
        Genre : "Anime",
        id: "13",
        authorid: "3432"
    }
]


var authors = [
    {
        Name : "JK Rowling",
        Age : 34,
        id: "3432"
    },
    {
        Name : "Ankit",
        Age : 21,
        id: "143213"
    },
    {
        Name : "Magna",
        Age : 35,
        id: "1fcdsfds"
    }
]



const BookType = new GraphQLObjectType({
    name : 'Book',
    fields: () => ({
        id :{type:  GraphQLID},
        Name: {type: GraphQLString},
        Genre: {type: GraphQLString},
        authorid: {type:  GraphQLID},
        author: {
            type: AuthorType,
            resolve(parent , args){
                return _.find(authors , {id : parent.authorid})
            }
        
        }

    })
})



const AuthorType = new GraphQLObjectType({
    name : 'Author',
    fields: () => ({
        id :{type:  GraphQLID},
        Name: {type: GraphQLString},
        Age: {type: GraphQLString},
        books: {
            type : new GraphQLList(BookType),
            resolve(parent , args){
                return _.filter(books , {authorid: parent.id})
            }
        }

    })
})

const RootQuery = new GraphQLObjectType({
    name : "RootQueryType",
    fields: {
        book: {
            type: BookType,
            args: { id : {type:  GraphQLID}},
            resolve(parent , args){
               console.log(args.id)
               console.log( _.find(books , {id : args.id}))
               return  _.find(books , {id : args.id})
            }
        },
        author: {
            type: AuthorType,
            args: { id : {type:  GraphQLID}},
            resolve(parent , args){
                console.log(args.id)
                console.log( _.find(authors , {id : args.id}))
                return  _.find(authors , {id : args.id})
             }
        },
        authors : {
            type: new GraphQLList(AuthorType),
            args: {first : {type: GraphQLInt}},
            resolve(parent , args){
                console.log("Requested authors")
                return authors.slice(0 , args.first)
            }
        },

        books: {
            type: new GraphQLList(BookType),
            args: {first : {type: GraphQLInt}},
            resolve(parent , args){
                return books.slice(0 , args.first)
            }
        }
    }
})


const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addAuthor: {
            type: AuthorType,
            args: {
                name: {type : GraphQLString},
                age: {type: GraphQLInt},
                id: {type: GraphQLID}
            },
            resolve(parent , args){
                console.log("Added author")
                authors.push({
                    Name: args.name,
                    Age: args.age,
                    id: args.id
                })
                return authors[authors.length-1]
                
            }
        },


        addBook: {
            type: BookType,
            args: {
                name: {type : GraphQLString},
                genre: {type: GraphQLString},
                id: {type: GraphQLID},
                authorid: {type : GraphQLID}
            },
            resolve(parent , args){
                console.log(args)
                books.push({
                    Name: args.name,
                    Genre: args.genre,
                    id: args.id,
                    authorid: args.authorid
                })
                return books[books.length-1] 
            }
        },

        editAuthor: {
            type: AuthorType,
            args: {          
                id: {type: GraphQLID},
                name: {type: GraphQLString},
                age : {type: GraphQLInt}
            },
            resolve(parent , args){
              objIndex = authors.findIndex((obj => obj.id == args.id))
              if(objIndex != -1){
                console.log("Before update: ", authors[objIndex])
                authors[objIndex].Name = args.name
                authors[objIndex].Age = args.age
                return authors[objIndex]

              }else{
                return null
              }
              
            }
        },

        editBook: {
            type: BookType,
            args: {          
                id: {type: GraphQLID},
                name: {type: GraphQLString},
                genre : {type: GraphQLString},
            },
            resolve(parent , args){
              objIndex = books.findIndex((obj => obj.id == args.id))
              if(objIndex != -1){
                console.log("Before update: ",books[objIndex])
                books[objIndex].Name = args.name
                books[objIndex].Genre = args.genre
                 return books[objIndex]

              }else{
                  return null
              }
              
            }
        },
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation : Mutation
})