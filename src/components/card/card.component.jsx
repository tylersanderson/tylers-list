import React from 'react';

import {
  CardContainer
} from './card.styles';

const Card = (props) => {
	return (
		<CardContainer>
			<img classname='image' alt='robots' src={`https://robohash.org/${props.id}?size=200x200`} />
			<div>
				<h2>{props.name}</h2>
				<p>{props.email}</p>
			</div>
		</CardContainer>
	);
}

export default Card;