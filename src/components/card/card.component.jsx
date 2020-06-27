import React from 'react';

import {
  CardContainer,
  CardTitle,
  CardPay,
  CardStreet,
  CardImage
} from './card.styles';

const Card = (props) => {
	return (
    <CardContainer>
      <CardImage>
        <img className='image' alt='robots' src={`${props.gigimage}`} />
      </CardImage>
			<div>
				<CardTitle>{props.gigname}</CardTitle>
        <CardPay>${props.gigpay}</CardPay>
        <CardStreet>{props.street}
        <br></br>
        {props.city}, {props.stateabv} {props.zipcode}
        </CardStreet>
        
      </div>
		</CardContainer>
	);
}

export default Card;