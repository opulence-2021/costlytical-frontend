import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import './UserCard.styles.css';

const UserCard = () => {
	return (
		<div className='user-card'>
			<div className='user-card-image'> </div>
			<div className='user-card-details'>
				<h4 className='m-0'>John Henry</h4>
				<h6 className='m-0'>user</h6>
			</div>
			<div className='user-card-icon'>
				<FaExternalLinkAlt />
			</div>
		</div>
	);
};

export default UserCard;
