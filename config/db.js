import { createPool } from 'mysql2/promise';

const pool = createPool({
    uri: 'mysql://uvoieb2qnwegknlr:mmedQi1Of3RTM1q63YQZ@bqkorgv1uheeffz3u40h-mysql.services.clever-cloud.com:3306/bqkorgv1uheeffz3u40h',
    host: 'bqkorgv1uheeffz3u40h-mysql.services.clever-cloud.com',
    port: '3306',
    user: 'uvoieb2qnwegknlr',
    password: 'mmedQi1Of3RTM1q63YQZ',
    database: 'bqkorgv1uheeffz3u40h',
});

// const pool = createPool({
//     host: 'localhost',
//     port: '3306',
//     user: 'root',
//     password: 'daviddiaz21',
//     database: 'tasklist',
// })

export { pool };