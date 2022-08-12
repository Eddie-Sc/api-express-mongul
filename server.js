const express = require("express")

const app = express()


// needed for adding a document

const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({

    extended: true

}))

app.use(bodyParser.json())

const userRouter = require("./routes/user")

app.use("/users", userRouter)


app.listen(4000)


app.get("/", (req, res) => {

    res.send("index page")

})

