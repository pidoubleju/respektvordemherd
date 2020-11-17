import React from 'react';
import PostList from '../components/PostList';
import Heading from '../components/atoms/Heading';
import {useLocation, useHistory} from 'react-router-dom'

function SearchResults() {
	const location = useLocation();
	let history = useHistory();
	if (!location.state) {
		history.push('/home');
	}
	return (
		<div className='category background-dark fill-height'>
			<div className='container'>
				<Heading type="1" headingData={{ text: 'Suchergebnisse' }} />
				{location.state && location.state.results.length > 0 &&
					<PostList posts={location.state.results} />
				}
				{location.state && location.state.results.length === 0 &&
					<Heading type="4" headingData={{ text: `Für den Begriff "${location.state.searchTerm}" wurden keine Einträge gefunden` }} />
				}
			</div>
		</div>
	);
}

export default SearchResults;
