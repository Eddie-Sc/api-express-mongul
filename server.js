const express = require("express")

const app = express()

const userRouter = require("./routes/user")

app.use("/users", userRouter)


// needed for adding a document

const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({

    extended: true

}))

app.use(bodyParser.json())


app.listen(4000)


app.get("/", (req, res) => {

    res.send("hi")

})

