const {query} = require("express")
const express = require("express")
const router = express.Router()

const { collection, ObjectId } = require("../config/database")

router.get("/", (req, res) => {
    //res.send("User List")
    collection.find().toArray((err, result) => {
        if (err) throw err;
        res.json(result)
    })
})

router.post("/", (req, res) => {
    const doc = {
        firstName: "Sue",
        lastName: "McSue"
    }

    collection.insertOne(doc, (err, res) => {
        if (err) throw err;
    })
    res.send(" 1 document inserted.")
})

router

    .route("/:id")
    .get((req, res) => {
       // res.send(`Get a User with ID: ${req.params.id}`)
    })
    .put((req, res) => {
        //res.send(`Update a User with ID: ${req.params.id}`)
    })
    .delete((req, res) => {
//res.send(`Delete a User with ID: ${req.params.id}`)
    })
module.exports = router