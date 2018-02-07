import {GraphQLObjectType} from 'graphql';
import retrieveDish from './dish';

export default new GraphQLObjectType({
    name: 'Query',
    description: 'root query',
    fields: {
        retrieveDish
    }
})