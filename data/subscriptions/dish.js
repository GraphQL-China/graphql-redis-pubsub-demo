import {dish as DishType} from '../type';
import {pubsub} from '../redis';

const dishCreated = {
    type: DishType,
    resolve(source, args, context, info) {
        return source;
    },
    subscribe(source, args, context, info) {
        return pubsub.asyncIterator('dishCreated');
    }
};
const dishUpdated = {
    type: DishType,
    resolve(source, args, context, info) {
        return source;
    },
    subscribe(source, args, context, info) {
        return pubsub.asyncIterator('dishUpdated');
    }
};
const dishDestroyed = {
    type: DishType,
    resolve(source, args, context, info) {
        return source;
    },
    subscribe(source, args, context, info) {
        return pubsub.asyncIterator('dishDestroyed');
    }
};

export {dishCreated, dishUpdated, dishDestroyed};