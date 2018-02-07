# graphql-redis-pubsub-demo
## About
this is a demo project which demonstrates `GraphQL` query, mutation and subscription with `reids`

## Getting Started
1. start your local **redis** server
2. cd to this project directory
3. run `yarn && yarn start`
4. open your brower with [apollo-graphiql](http://localhost:3000/graphiql) or [graphcool-playground](http://localhost:3000/playground) (recommended)

## Current Problems
1. `subscriptions-transport-ws` does not tackle the `context` correctly, [link](https://github.com/apollographql/subscriptions-transport-ws/issues/300)
2. `graphiqlExpress` in `apollo-server-express` does not tackle multiple operation names correctly with `subscription`, [link](https://github.com/graphql/graphiql/issues/605)

## Todos
1. wait for fixture of the `context` problem
2. wait for fixture of the `multiple operation` problem

## Branches

1. `mysql` branch: built with `sequelize` ORM and `mysql` (I prefer `mariadb`), and you can change the `sequelize` connection to whatever `RDBMS` as you like.