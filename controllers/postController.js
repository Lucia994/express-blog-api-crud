import posts from '../data/posts.js'

function index(req, res) {

    // let filteredPostsTags = posts;
    // if (req.query.tags) {
    //     filteredPostsTags = posts.filter(
    //         post => post.tags.includes(req.query.tags)
    //     );

    // }
    // res.json(filteredPostsTags);
}

function show(req, res) {

    const id = parseInt(req.params.id)
    const post = posts.find(post => post.id === id);
    if (!post) {
        res.status(404)
        return res.json({
            error: "Not Found",
            message: "Post non trovato"
        })
    }
    res.json(post);
}

function store(req, res) {
    const newId = posts[posts.length - 1].id + 1;
    const newPost = {
        id: newId,
        title: req.body.title,
        img: req.body.img,
        content: req.body.content,
        tags: req.body.tags
    }
    posts.push(newPost);

    console.log(posts);

    res.status(201);
    res.json(newPost);
}

function update(req, res) {
    const id = parseInt(req.params.id)
    const post = posts.find(post => post.id === id);
    if (!post) {
        res.status(404);
        return res.json({
            error: "Not Found",
            message: "Post non trovato"
        })
    }
    post.title = req.body.title;
    post.content = req.body.content;
    post.img = req.body.img;
    post.tags = req.body.tags;
    console.log(posts)
    res.json(post);

}

function modify(req, res) {
    const id = parseInt(req.params.id)
    res.send('Modifica parziale del post ' + id);
}

function destroy(req, res) {
    const id = parseInt(req.params.id)
    const post = posts.find(post => post.id === id);
    if (!post) {
        res.status(404);
        return res.json({
            status: 404,
            error: "Not Found",
            message: "Post non trovato"
        })
    }
    posts.splice(posts.indexOf(post), 1);
    console.log(posts);
    res.sendStatus(204)

}

const postController = { index, show, store, update, modify, destroy }

export default postController;