const foodEater = require("../models");
const express = require("express");
const router = express.Router();
// get route for getting all foods
router.get("/", (req, res) => {
    let foodsAndCooks = {
        foods: [],
        cooks: []
    }
    // is there a better way to do this? I needed to pass both models to the render function
    foodEater.Food.findAll({}).then(function(foods){
        // once we have all the food go get the cooks
        foodEater.Cook.findAll({}).then(function(cooks){
            // now that we have the cooks make an object of foods and cooks
            foodsAndCooks = {
                foods: foods,
                cooks: cooks,
            }
            // pass the object to express handlebars
            res.render("index", foodsAndCooks);
        })
    })
});
// post route for adding new cook
router.post("/api/cooks", (req, res) => {
    foodEater.Cook.create({
        cook_name: req.body.cook_name,
    }).then(function(cooks){
        res.json(cooks);
    })
})
// post route for adding new foods
router.post("/api/foods", (req, res) => {
    foodEater.Food.create({
        food_name: req.body.food_name,
        eaten: false,
        CookId: req.body.CookId,
        cook_name: req.body.cook_name
    }).then(function(foods){
        res.json(foods);
    })
});
// put route for eating foods
router.put("/api/eat/:id", (req, res) => {
    let idToEat = req.params.id;
    foodEater.Food.update({
        eaten: true,
    }, {
        where: {
            id: idToEat,
        }
    }).then(function(foods){
        res.json(foods)
    })
});
// put route for un-eating foods
router.put("/api/uneat/:id", (req, res) => {
    let idToUneat = req.params.id;
    foodEater.Food.update({
        eaten: false,
    }, {
        where: {
            id: idToUneat,
        }
    }).then(function(foods){
        res.json(foods)
    })
});
module.exports = router;