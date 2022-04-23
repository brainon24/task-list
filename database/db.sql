
CREATE DATABASE tasklist;

USE tasklist;

CREATE TABLE task (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    description VARCHAR(450) NOT NULL,
    status VARCHAR(20) NOT NULL,
    responsible VARCHAR(20) NOT NULL,
    createdAT TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

describe task;