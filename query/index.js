const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const posts = {};

const handleEvent = (type, data) => {
    const { id, title, postId, content, status } = data;

    const post = posts[postId];

    switch (type) {
        case 'POST_CREATED':
            posts[id] = { id, title, comments: [] };

            break;
        case 'COMMENT_CREATED':
            post.comments.push({ id, content, status });

            break;
        case 'COMMENT_UPDATED':
            const comment = post.comments.find((comment) => comment.id === id);

            comment.status = status;
            comment.content = content;

            break;
    }
};

app.get('/posts', (req, res) => {
    res.send(posts);
});

app.post('/events', (req, res) => {
    const { type, data } = req.body;

    handleEvent(type, data);

    res.send({});
});

app.listen(4002, async () => {
    console.log('Listening 4002');

    const res = await axios.get('http://event-bus-clusterip-srv:4005/events');

    for (let event of res.data) {
        console.log('processing event:', event.type);

        handleEvent(event.type, event.data);
    }
});
