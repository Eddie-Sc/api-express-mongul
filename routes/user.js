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
//    res.send("Create new user") 

    collection.insertOne(req.body, (err, res) => {
        if (err) throw err;
    })
    res.send(" 1 document inserted.")
    res.send (req.body)

})

router

    .route("/:id")
    .get((req, res) => {
    //    res.send(`Get a User with ID: ${req.params.id}`)
    const query = {
        _id: ObjectId(req.params.id)
    }
        collection.findOne(query, (err, result) =>
        {if (err) throw err;
        res.send(result)
    })
    })

    .put((req, res) => {
        // res.send(`Update a User with ID: 
        // ${req.params.id}`)
        const query = { _id: ObjectId(req.params.id) }
        const newvalue = {
            $set: {
                "lastName": "King",
                "firstName": "Tim"
            }
        }
        collection.updateOne(query, newvalue,
            (err, result) => {
                if (err) throw err;
            })

            res.send("1 doc updated.")
    })
    .delete((req, res) => {
// res.send(`Delete a User with ID: 
// ${req.params.id}`)
const query = { _id: ObjectId(req.params.id) }
collection.deleteOne(query, (err, result) => {
    if (err) throw err;
})
res.send ("1 document deleted. ")
    })
module.exports = router