import {GraphQLID, GraphQLInt, GraphQLNonNull, GraphQLObjectType, GraphQLString} from 'graphql';

export default new GraphQLObjectType({
    name: 'Dish',
    description: 'a dish is **delicious** dish',
    fields: {
        id: {
            type: new GraphQLNonNull(GraphQLID),
            description: 'the id of a dish',
        },
        name: {
            type: GraphQLString,
            description: 'the name of a dish',
        },
        price: {
            type: GraphQLInt,
            description: 'the price of a dish',
        }
    }
})
