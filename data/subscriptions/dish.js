import {dish as DishType} from '../type';
import {dish as DishModel} from '../models'
import {client, pubsub} from '../redis'; // for apollo implementation it did not share the schema ctx

const dishField = {
    type: DishType,
    resolve(source, args, context, info) {
        return DishModel({pubsub, client}).get();
    },
    subscribe(source, args, context, info) {
        return pubsub.asyncIterator('updated');
    }
};

export default dishField;