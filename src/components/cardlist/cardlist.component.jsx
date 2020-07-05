
import React from 'react';
import Card from '../card/card.component';

import { CardlistContainer } from './cardlist.styles';

const CardList = ({gigsArray}) => {
	return (
		<CardlistContainer>
		{
			gigsArray.map((gigs, i) => {
			return (
				<Card 
          key={i}
          gignumber={gigsArray[i].gignumber}
          gigpostedby={gigsArray[i].gigpostedby}
          gigassignedto={gigsArray[i].gigassignedto} 
					gigname={gigsArray[i].gigname} 
          gigpay={gigsArray[i].gigpay}
          street={gigsArray[i].street}
          city={gigsArray[i].city}
          stateabv={gigsArray[i].stateabv}
          zipcode={gigsArray[i].zipcode}
          gignotes={gigsArray[i].gignotes}
          isgigcomplete={gigsArray[i].isgigcomplete}
          gigimage={gigsArray[i].gigimage}
          />
			)
		})	
	}
	</CardlistContainer>
	) 
}

export default CardList;