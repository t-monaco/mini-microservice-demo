import axios from 'axios';
import React, { useState } from 'react';

const CommentCreate = ({ postId }) => {
    const [content, setContent] = useState('');

    const onSubmit = async (event) => {
        event.preventDefault();

        await axios.post(`http://posts.com/posts/${postId}/comments`, {
            content,
        });

        setContent('');
    };

    return (
        <div>
            <form onSubmit={onSubmit} className='form-group'>
                <label htmlFor='' className='form-label'>
                    New Comment
                </label>
                <input
                    className='form-control'
                    type='text'
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                />
                <br />
                <button className='btn btn-primary'>Submit</button>
            </form>
        </div>
    );
};

export default CommentCreate;
