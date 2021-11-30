var express = require('express');
var router = express.Router();
let hallModel = require('../models/diningHall.model');
let dishModel = require('../models/dish.model');

router.get('/', (req, res) => {
    dishModel.find()
      .then(dishes => res.json(dishes))
      .catch(err => res.status(400).json("error: " + err))
  });

router.get('/getHalls', (req, res) => {
    const dishName = req.body.dishName;
    dishModel.findOne({name: dishName})
        .then(async dish => {
            if (dish == null) {return res.status(400).json("no such dish exists")}
            else {
                var halls = [];
                for (i = 0; i < dish.halls.length; i++)
                {
                    var hall = await hallModel.findById(dish.halls[i])
                        .then(hall => {
                            if (hall == null) {return res.status(400).json("hall error")}
                            else {
                                return hall;
                            }
                        })
                        .catch((err) => {
                            return res.status(400).json("Database Error")
                        });
                    halls.push(hall);
                }
                res.json(halls);
            }
        })
        .catch(err => {
            res.status(400).json("Error: " + err);
        })
})

module.exports = router;