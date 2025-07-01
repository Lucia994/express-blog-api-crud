const express = require("express")
const router = express.Router();
const port = 3000

//Add a route to get blog posts 
//Index
router.get('/', (req, res) => {
    const posts = [
        {
            title: "Ciambellone",
            content: "",
            img: `http://localhost:${port}/images/ciambellone.jpeg`,
            tags: ["", ""]

        },
        {
            title: "Cracker barbabietola",
            content: "",
            img: `http://localhost:${port}/images/cracker_barbabietola.jpeg`,
            tags: ["", ""]

        },
        {
            title: "Pane fritto dolce",
            content: "",
            img: `http://localhost:${port}/images/pane_fritto_dolce.jpeg`,
            tags: ["", ""]

        },
        {
            title: "Pasta barbabietola",
            content: "",
            img: `http://localhost:${port}/images/pasta_barbabietola.jpeg`,
            tags: ["", ""]

        },
        {
            title: "Torta paesana",
            content: "",
            img: `http://localhost:${port}/images/torta_paesana.jpeg`,
            tags: ["", ""]

        }
    ];

    res.json(posts);
})

/*Show (read)*/ 
router.get ('/:id', (req, res) =>{
     const id = req.params.id
    res.send(`You want to show post's details with id:${id}`)

})
/*Store (create)*/
router.post('/', (req, res) => {
    res.send(`Save a new post into db`)
})
/*Update (update)*/
router.put('/:id', (req, res) => {
    const id = req.params.id
    res.send(`You want to update post with id:${id}`)

})
/*Modify (update) */
router.patch('/:id', (req, res) => {
    const id = req.params.id
    res.send(`You want to update post with id:${id}`)

})
/*Destroy (delete) */
router.delete('/:id', (req, res) => {
    const id = req.params.id
    res.send(`You want to delete post with id:${id}`)
})

module.exports = router;