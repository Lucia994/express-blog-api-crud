//Import the express library
const express = require('express')
//Create an instance of the express app
const app = express()
//Define the port you want to use for the server listener
const port = 3000
const postsRouter = require("./routers/posts");
app.use(express.static("public"))

//Define a route of the root URL
app.get('/', (req, res) => {
    res.type("html") //It's not required, but we can specify the type
        .send(`Server del mio blog`)

})

app.use("/posts", postsRouter)

//Start the server listener
app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})
