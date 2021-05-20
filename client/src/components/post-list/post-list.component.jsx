import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CommentCreate from '../comment-create/comment-create.component';
import CommentList from '../comment-list/comment-list.component';

const PostList = () => {
    const [posts, setPosts] = useState({});

    const fetchPosts = async () => {
        const res = await axios.get('http://posts.com/posts');

        setPosts(res.data);
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    const renderedPosts = Object.values(posts).map(({ id, title, comments }) => {
        return (
            <div
                className='card'
                style={{ width: '30%', marginBottom: '20px' }}
                key={id}
            >
                <div className='card-body d-flex flex-column justify-content-between'>
                    <h3>{title}</h3>
                    <CommentList comments={comments} postId={id} />
                    <CommentCreate postId={id} />
                </div>
            </div>
        );
    });

    return (
        <div className='d-flex flex-row flex-wrap justify-content-between'>
            {renderedPosts}
        </div>
    );
};

export default PostList;
