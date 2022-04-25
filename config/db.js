import { createPool } from 'mysql2/promise';

const pool = createPool({
    //cli: mysql -h bzfuqvkhxyqifchtoo8u-mysql.services.clever-cloud.com -P 3306 -u uerptwfgyhsis2xy -p bzfuqvkhxyqifchtoo8u

    uri: 'mysql://uerptwfgyhsis2xy:i2RnOJ84DuA7rTaqJh0I@bzfuqvkhxyqifchtoo8u-mysql.services.clever-cloud.com:3306/bzfuqvkhxyqifchtoo8u',
    host: 'bzfuqvkhxyqifchtoo8u-mysql.services.clever-cloud.com',
    port: '3306',
    user: 'uerptwfgyhsis2xy',
    password: 'i2RnOJ84DuA7rTaqJh0I',
    database: 'bzfuqvkhxyqifchtoo8u',
});

// const pool = createPool({
//     host: 'localhost',
//     port: '3306',
//     user: 'root',
//     password: 'daviddiaz21',
//     database: 'tasklist',
// })

export { pool };