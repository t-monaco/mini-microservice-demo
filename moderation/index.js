const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());

app.post('/events', async (req, res) => {
    const {
        type,
        data: { id, postId, content },
    } = req.body;


    switch (type) {
        case 'COMMENT_CREATED':
            
            const status = content.includes('orange') ? 'rejected' : 'apporved';

            await axios.post('http://event-bus-clusterip-srv:4005/events', {
                type: 'COMMENT_MODERATED',
                data: {
                    id,
                    postId,
                    status,
                    content,
                },
            });

            break;
    }

    res.send({});
});

app.listen(4003, () => {
    console.log('Lisntening 4003');
});
