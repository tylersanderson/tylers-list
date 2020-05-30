
import React from 'react';
import Card from '../card/card.component';

import { CardlistContainer } from './cardlist.styles';

const robots = [
  {
    id: 1,
    gigname: 'Tree Trimming - Three Ash Trees Need Maintenance',
    username: 'Bret',
    gigpay: '$100',
    street: '1000 Main Street',
    city: 'Lincoln',
    stateabv: 'NE',
    zipcode: '68510'
  },
  {
    id: 2,
    gigname: 'Ervin Howell',
    username: 'Antonette',
    pay: 'Shanna@melissa.tv'
  },
  {
    id: 3,
    gigname: 'Clementine Bauch',
    username: 'Samantha',
    pay: 'Nathan@yesenia.net'
  },
  {
    id: 4,
    gigname: 'Patricia Lebsack',
    username: 'Karianne',
    pay: 'Julianne.OConner@kory.org'
  },
  {
    id: 5,
    gigname: 'Chelsey Dietrich',
    username: 'Kamren',
    pay: 'Lucio_Hettinger@annie.ca'
  },
  {
    id: 6,
    gigname: 'Mrs. Dennis Schulist',
    username: 'Leopoldo_Corkery',
    pay: 'Karley_Dach@jasper.info'
  },
  {
    id: 7,
    gigname: 'Kurtis Weissnat',
    username: 'Elwyn.Skiles',
    pay: 'Telly.Hoeger@billy.biz'
  },
  {
    id: 8,
    gigname: 'Nicholas Runolfsdottir V',
    username: 'Maxime_Nienow',
    pay: 'Sherwood@rosamond.me'
  },
  {
    id: 9,
    gigname: 'Glenna Reichert',
    username: 'Delphine',
    pay: 'Chaim_McDermott@dana.io'
  },
  {
    id: 10,
    gigname: 'Clementina DuBuque',
    username: 'Moriah.Stanton',
    pay: 'Rey.Padberg@karina.biz'
  }
];

const CardList = () => {
	return (
		<CardlistContainer>
		{
			robots.map((user, i) => {
			return (
				<Card 
					key={i}
					id={robots[i].id} 
					gigname={robots[i].gigname} 
          gigpay={robots[i].gigpay}
          street={robots[i].street}
          city={robots[i].city}
          stateabv={robots[i].stateabv}
          zipcode={robots[i].zipcode}
					/>
			)
		})	
	}
	</CardlistContainer>
	) 
}

export default CardList;