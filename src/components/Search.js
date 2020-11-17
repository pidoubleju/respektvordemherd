import React, {useState} from 'react';
import { client } from '../prismic-configuration';
import Prismic from 'prismic-javascript';
import {useHistory} from 'react-router-dom';

function Search() {
    const [searchMode, setSearchMode] = useState('passive');
    const [searchContent, setSearchContent] = useState('');
    let history = useHistory();

    function startSearch(e) {
        // Check for enter keyup
        if (e.keyCode !== 13) {
            return;
        }
        client.query([
            Prismic.Predicates.at('document.type', 'post'),
            Prismic.Predicates.fulltext('document', searchContent)
        ]).then(result => {
            history.push({pathname: '/search', state: {results: result.results, searchTerm: searchContent}});
            setSearchContent('');
        })
    }


    return (
        <div className="search">
            <svg onClick={() => { setSearchMode(searchMode === 'active' ? 'passive' : 'active') }}  width="30" height="30" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            {searchMode === 'active' &&
                <input type="text" value={searchContent} onKeyUp={startSearch} onChange={(e) => { setSearchContent(e.target.value) }}/>
            }
        </div>
    )
}

export default Search;
