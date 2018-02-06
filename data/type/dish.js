import {GraphQLID, GraphQLNonNull, GraphQLObjectType, GraphQLString} from 'graphql';

export default new GraphQLObjectType({
    name: 'Dish',
    description: 'a dish is **delicious** dish',
    fields: {
        id: {
            type: new GraphQLNonNull(GraphQLID),
        },
        name: {
            type: new GraphQLNonNull(GraphQLString),
        }
    }
})
