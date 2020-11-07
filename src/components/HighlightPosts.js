import React, { useEffect, useReducer } from 'react';
import HighlightPostsSidebar from './HighlightPostsSidbar';
import { useHistory } from 'react-router-dom';
import '../styles/components/Highlightposts.css';
import { motion } from 'framer-motion';

export const ACTIONS = {
	SET_POSTS: 'set-posts',
	SET_ACTIVE: 'set-active',
};

function reducer(state, action) {
	switch (action.type) {
	case ACTIONS.SET_ACTIVE:
		return { activePost: action.payload.activePost };
	default:
		return state;
	}
}

function HighlightPosts({ posts }) {
	let history = useHistory();
	const [state, dispatch] = useReducer(reducer, {
		activePost: {},
	});


	function viewPostDetail({post}) {
		history.push(`/category/${post.tags[0]}/${post.uid}`);
	}

	useEffect(() => {
		dispatch({ type: ACTIONS.SET_ACTIVE, payload: { activePost: posts[0] } });
	}, [posts]);

	function renderActivePost(post) {
		if (!post || Object.keys(post).length < 1) {
			return;
		}
		const { galerie, blog_header, abschnitt_1_text: teaser } = post.post.data;
		const { alt, url } = galerie[0].galerie_bild;
		return (
			<div className='post flex' key={post.post.id} onClick={() => { viewPostDetail(post) }}>
				<motion.div initial={{scale: 0.9, y: 200}} animate={{ scale: 1.0, y: 0 }} transition={{ duration: 0.3 }}
							className='wrapper'>
					<h1 className='post-header'>{blog_header[0].text}</h1>
					<p className='teaser-text'>{teaser[0].text}</p>
				</motion.div>
				<motion.img  initial={{x: 70}} animate={{ x: 0 }} transition={{ duration: 0.3 }}
							src={url} alt={alt} />
			</div>
		);
	}

	return (
		<div className='highlight-posts container flex justify-center'>
			<div className='wrapper relative w-100'>
				<div className='highlight-post'>
					{renderActivePost(state.activePost)}
				</div>
				<HighlightPostsSidebar
					posts={posts.filter(
						(post) => posts.indexOf(post) !== posts.indexOf(state.activePost)
					)}
					dispatch={dispatch}
				/>
			</div>
		</div>
	);
}

export default HighlightPosts;
