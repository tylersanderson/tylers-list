import React from 'react';

import {
  CardContainer,
  CardTitle,
  CardPay,
  CardStreet
} from './card.styles';

const Card = (props) => {
	return (
		<CardContainer>
			<img className='image' alt='robots' src={`https://robohash.org/${props.id}?size=200x200`} />
			<div>
				<CardTitle>{props.gigname}</CardTitle>
        <CardPay>{props.gigpay}</CardPay>
        <CardStreet>{props.street}
        <br></br>
        {props.city}, {props.stateabv} {props.zipcode}
        </CardStreet>
        
      </div>
		</CardContainer>
	);
}

export default Card;