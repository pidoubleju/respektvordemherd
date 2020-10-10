import React, {useState, useEffect} from 'react';
import HighlightPostsSidebar from './HighlightPostsSidbar';


function HighlightPosts({posts}) {
    const [postCollection, setPosts] = useState({
        activePost: 0,
        secondaryPosts: []
    });

    useEffect(() => {
        const secondaryPosts = posts.filter(post => {
            return posts.indexOf(post) !== postCollection.activePost
        });
        setPosts({...postCollection, secondaryPosts: secondaryPosts});
    }, [])


    function renderActivePost(post) {
        const { galerie, blog_header, abschnitt_1_text: teaser } = post.post.data;
        const { alt, url} = galerie[0].galerie_bild;
        return (
            <div className="post" key={post.post.id}>
                <h1>{blog_header[0].text}</h1>
                <p>{teaser[0].text}</p>
                <img src={url} alt={alt} />
            </div>
        )
    }
    
    return (
        <div className="highlight-posts container">
            { renderActivePost(posts[postCollection.activePost]) }
            <HighlightPostsSidebar posts={postCollection.secondaryPosts}/>
        </div>
    )
}

export default HighlightPosts;