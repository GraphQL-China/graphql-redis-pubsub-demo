import {GraphQLNonNull, GraphQLString} from 'graphql';
import {dish as DishModel} from '../models'
import {dish as DishType} from '../type';

const dishField = {
    type: DishType,
    args: {
        name: {
            type: new GraphQLNonNull(GraphQLString),
            description: 'the name of a dish',
        }
    },
    resolve(source, {name}, context, info) {
        const dish = {
            id: Math.random().toString(34).slice(2),
            name
        };
        return DishModel(context).set(dish);
    }
};

export default dishField;