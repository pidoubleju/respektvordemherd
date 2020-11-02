import React from 'react';
import PostPreview from './PostPreview';
import Grid from './Grid';

function PostList({ posts }) {
	const postElements = posts.map((post) => <PostPreview key={post.id} data={post} />);
	return <Grid items={postElements} />;
}

export default PostList;
