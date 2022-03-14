import { createPool } from 'mysql2/promise';

const pool = createPool({
    host: 'bsfnc0gafyysw3twouo8-mysql.services.clever-cloud.com',
    port: '3306',
    user: 'ulrz3s1l8tajvlsx',
    password: 'bcQmpc8x28RacGvBG8Y3',
    database: 'bsfnc0gafyysw3twouo8',
})

// const pool = createPool({
//     host: 'localhost',
//     port: '3306',
//     user: 'root',
//     password: 'daviddiaz21',
//     database: 'tasklist',
// })

export { pool };