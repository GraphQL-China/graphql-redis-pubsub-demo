import {GraphQLObjectType} from 'graphql';
import dish from './dish';

export default new GraphQLObjectType({
    name: 'Query',
    description: 'root query',
    fields: {
        dish
    }
})