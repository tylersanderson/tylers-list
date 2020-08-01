import React from 'react';
import Modal from '../Modal/Model'
import GigDetails from '../gig-details/gig-details.component';
import noImage from './noimage.jpg';

import {
  CardContainer,
  CardTitle,
  CardPay,
  CardStreet,
  CardImage,
} from './card.styles';

class Card extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isGigModalOpen: false,
		}
  }
  
  toggleGigModal = () => {
    this.setState(prevState => ({
      ...prevState,
      isGigModalOpen: !prevState.isGigModalOpen
    }))
  }
  
  render() {
    const {isGigModalOpen} = this.state;
    const gigImage = this.props.gigimage || noImage
    return(
      <div>
        <CardContainer onClick={this.toggleGigModal}>
          <CardImage>
            <img className='image' alt='gig' src={`${gigImage}`} />
          </CardImage>
          <div>
            <CardTitle>{this.props.gigname}</CardTitle>
            <CardPay>${this.props.gigpay}</CardPay>
            <CardStreet>{this.props.street}
            <br></br>
            {this.props.city}, {this.props.stateabv} {this.props.zipcode}
            </CardStreet>
          </div>
        </CardContainer>
        { isGigModalOpen &&
          <Modal>
            <GigDetails
              toggleGigModal={this.toggleGigModal}
              gignumber={this.props.gignumber}
              gigpostedby={this.props.gigpostedby}
              gigassignedto={this.props.gigassignedto} 
              gigname={this.props.gigname} 
              gigpay={this.props.gigpay}
              street={this.props.street}
              city={this.props.city}
              stateabv={this.props.stateabv}
              zipcode={this.props.zipcode}
              gignotes={this.props.gignotes}
              isgigcomplete={this.props.isgigcomplete}
              gigimage={this.props.gigimage}
            />
          </Modal>
        }
      </div>
    )
  }
}

export default Card;