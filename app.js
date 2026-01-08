import express from "express";
import postRouter from "./routers/postsRouter.js";
import postController from "./controllers/postController.js";
import errorsHandler from "./middlewares/errorHandler.js";
import notFound from "./middlewares/notFound.js";

const app = express();
const port = 3000;


app.use(express.static('public'));
app.use("/posts", postRouter)

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Server del mio blog");

});

//Global middlewares 
app.use(errorsHandler);
app.use(notFound);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})