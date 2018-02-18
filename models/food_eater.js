const orm = require("../config/orm.js");
const express = require('express');
// foodEater to export the functions we use to create and eat the food
const foodEater = {
    all: (table, cb) => {
        orm.selectAll(table).then(data => {
            cb(data);
        });
    },
    create: (item, table, cb) => {
        orm.insertOne(item, table).then(data => {
            cb(data);
        });
    },
    eat: (itemId, table, cb) => {
        orm.eatOne(itemId, table).then(data => {
            cb(data);
        });
    }
};
module.exports = foodEater;
