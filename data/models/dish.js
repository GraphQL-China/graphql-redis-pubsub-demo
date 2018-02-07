import Sequelize from 'sequelize';
import Model from '../sequelize';
import {pubsub} from '../redis';

const dishModel = Model.define("dish", {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    price: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    }
}, {
    hooks: {
        afterCreate(instance, options) {
            pubsub.publish('dishCreated', instance);
        },
        afterDestroy(instance, options) {
            pubsub.publish('dishDestroyed', instance);
        },
        afterUpdate(instance, options) {
            pubsub.publish('dishUpdated', instance);
        },
    }
});

export default dishModel;