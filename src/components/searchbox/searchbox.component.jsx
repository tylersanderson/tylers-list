import React from 'react';

import { SearchboxContainer, SearchboxInput } from './searchbox.styles';

const SearchBox = ({ searchfield, searchChange }) => {
	return (
		<SearchboxContainer>
			<SearchboxInput
				type='search' 
				placeholder='search gigs'
				onChange={searchChange}
			/>
		</SearchboxContainer>
	);
}

export default SearchBox;