import Sequelize from 'sequelize';
import debug from 'debug';

const logger = debug('redis-pubsub:sequelize');
// TODO change to your db connection
const sequelize = new Sequelize('thor', 'thor', 'Mjollnir42%', {
    host: 'localhost',
    port: 3307,
    dialect: 'mysql',
    dialectOptions: {
        charset: 'utf8mb4',
        collate: "utf8mb4_unicode_ci",
        supportBigNumbers: true,
        bigNumberStrings: true
    },
    define: {
        'underscored': true,
        'charset': 'utf8mb4'
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    force: true,
    logging: (msg) => {
        logger(msg);
    },
});

export default sequelize;