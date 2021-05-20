import React, { useState } from 'react';
import axios from 'axios';

const PostCreate = () => {
    const [title, setTitle] = useState('');

    const onSubmit = async (event) => {
        event.preventDefault();

        await axios.post('http://posts.com/posts/create', {
            title,
        });

        setTitle('');
    };

    return (
        <div>
            <form action='' onSubmit={onSubmit}>
                <div className='form-group'>
                    <label htmlFor='' className='form-label'>
                        Title
                    </label>
                    <input
                        className='form-control'
                        type='text'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <br />
                <button className='btn btn-primary'>Submit</button>
            </form>
        </div>
    );
};

export default PostCreate;
