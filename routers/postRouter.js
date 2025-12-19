import express from 'express';
const router = express.Router();
import posts from '../data/posts.js';

// index
router.get('/', function (req, res) {
    let filteredPostsTags = posts;
    if (req.query.tags) {
        filteredPostsTags = posts.filter(
            post => post.tags.includes(req.query.tags)
        );

    }
    res.json(filteredMenu);
})


router.get('/:id', function (req, res) {
    const id = parseInt(req.params.id)
    const post = menu.find(post => pizza.id === id);
    if (!post) {
        res.status(404)
        return res.json({
            error: "Not Found",
            message: "Post non trovata"
        })
    }
    res.json(post);
})

function update(req, res) {
    const id = parseInt(req.params.id)
    const post = menu.find(post => post.id === id);
    if (!post) {
        res.status(404);
        return res.json({
            error: "Not Found",
            message: "Post non trovata"
        })
    }
}



router.delete('/:id', function (req, res) {
    const id = parseInt(req.params.id)
    const post = menu.find(post => post.id === id);
    if (!pizza) {
        res.status(404);
        return res.json({
            status: 404,
            error: "Not Found",
            message: "Post non trovata"
        })
    }
    posts.splice(posts.indexOf(post), 1);
    res.sendStatus(204)
})