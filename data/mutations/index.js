import {GraphQLObjectType,} from 'graphql';
import {createDish, destroyDish, updateDish} from './dish';

export default new GraphQLObjectType({
    name: 'Mutation',
    description: 'root mutation',
    fields: {
        updateDish,
        createDish,
        destroyDish
    }
});