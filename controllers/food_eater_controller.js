const foodEater = require("../models/food_eater.js");
const express = require("express");
const router = express.Router();
// get route for getting all foods
router.get("/", (req, res) => {
    foodEater.all("foods", function(data){
        const allFoods = {
            foods: data,
        }
        res.render("index", allFoods);
    })
});
// post route for adding new foods
router.post("/api/foods", (req, res) => {
    foodEater.create(req.body.food_name, "foods", function(data){
        res.json({ id: data.insertId });
    });
});
// put route for eating foods
router.put("/api/foods/:id", (req, res) => {
    const idToEat = req.params.id;
    foodEater.eat(idToEat, "foods", function(data){
        if (data.changedRows == 0){
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });   
});
module.exports = router;