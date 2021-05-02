const express = require('express');

const router = express.Router();

const Post = require('../models/Post');

router.get('/', (req, res) => {
    res.send('We are on the posts')
});

router.get('/specific', (req, res) => {
    res.send('We are SPECIFIC on the posts')
});

router.post('/', async(req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });


    try {
        const savedPost = await post.save();
        res.json(savedPost);
    } catch {
        res.json({ message: error });
    }

})

module.exports = router;