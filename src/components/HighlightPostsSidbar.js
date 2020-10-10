import React from 'react';

function HighlightPostsSidebar({posts}) {
    return (
        posts.map(post => {
            const { blog_header} = post.post.data;
            return (
                <div className="post" key={post.post.id}>
                    <h3>{blog_header[0].text}</h3>
                </div>
            )
        })
    )
};

export default HighlightPostsSidebar;