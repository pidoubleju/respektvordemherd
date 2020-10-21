import React from 'react';
import { ACTIONS } from './HighlightPosts';

function HighlightPostsSidebar({posts, dispatch}) {
    return (
        <div className="post-sidebar flex">
            {posts.map(post => {
                const { blog_header} = post.post.data;
                return (
                    <div className="post" key={post.post.id} onClick={() => dispatch({type: ACTIONS.SET_ACTIVE, payload: {activePost: post} })}>
                        <h4>{blog_header[0].text}</h4>
                    </div>
                )
            })}
        </div>
    )
};

export default HighlightPostsSidebar;