import React from 'react';
import Item from '../Item/Item';

const ItemsGrid = ({ items }) => {
	const TITLES = [
		'Modell Name',
		'Material',
		'Layer Height',
		'Infill%',
		'Sub Total',
		'Quantity',
		'Line Total',
		'Printability Score'
	];

	return (
		<div className='projects-grid'>
			<div className='projects-grid-titles'>
				{TITLES.map((title, index) => {
					return (
						<div className='projects-grid-title' key={index}>
							{title}
						</div>
					);
				})}
			</div>
			<div className='projects-grid-items'>
				{items.map((item, index) => {
					return <Item key={index} {...item} />;
				})}
			</div>
		</div>
	);
};

export default ItemsGrid;
