const express = require("express")
const router = express.Router();
// const port = 3000
const postslist = require("../data/postslist");


//Add a route to get blog posts 
//Index
router.get('/', (req, res) => {
    res.json(postslist);
})

/*Show (read)*/
router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const post = postslist.find(post => post.id === id);
    res.json(post)
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