const foodEater = require("../models");
const express = require("express");
const router = express.Router();
// get route for getting all foods
router.get("/", (req, res) => {
    foodEater.Food.findAll({}).then(function(foods){
        const allFoods = {
            foods: foods,
        }
        res.render("index", allFoods)
    })
});
// post route for adding new foods
router.post("/api/foods", (req, res) => {
    foodEater.Food.create({
        food_name: req.body.food_name,
        eaten: false
    }).then(function(foods){
        res.json(foods)
    })
});
// put route for eating foods
router.put("/api/foods/:id", (req, res) => {
    const idToEat = req.params.id;
    foodEater.Food.update({
        eaten: true,
    }, {
        where: {
            id: req.params.id
        }
    }).then(function(foods){
        res.json(foods)
    })
});
module.exports = router;