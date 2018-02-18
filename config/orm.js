const connection = require("./connection.js");
// homemade orm to perform MySQL queries
const orm = {
    selectAll: (tableInput) => {
        const queryString = "SELECT * FROM " + tableInput + ";";
        return new Promise((resolve, reject) => {
            connection.query(queryString, (err, result) => {
                if (err) reject (err);
                resolve (result);
            })
        })
    },
    insertOne: (item, table) => {
        const queryString = "INSERT INTO " + table + ` (food_name, eaten) VALUES ("${item}", false);`;
        return new Promise((resolve, reject) => {
            connection.query(queryString, (err, result) => {
                if (err) reject (err);
                resolve (result);
            })
        })
    },
    eatOne: (itemId, table) => {
        const queryString = "UPDATE " + table + " SET ? WHERE ?;";
        const queryObj = [
            {
                eaten: true,
            },
            {
                id: itemId
            }
        ]
        return new Promise((resolve, reject) => {
            connection.query(queryString, queryObj, (err, result) => {
                if (err) reject (err);
                resolve (result);
            })
        })
    }
};
module.exports = orm;