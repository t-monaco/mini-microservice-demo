import React from 'react';

const CommentList = ({ comments }) => {
    const renderedComments = comments.map(({ id, content, status }) => {
        switch (status) {
            case 'pending':
                content = 'This comment is awaiting moderation';

                break;
            case 'rejected':
                content = 'This comment has been rejected';

                break;
            default:
        }

        return <li key={id}>{content}</li>;
    });

    return (
        <div>
            <span>{comments.length} comments</span>
            <ul>{renderedComments}</ul>
        </div>
    );
};

export default CommentList;
