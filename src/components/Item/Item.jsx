import React from 'react';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';

const Item = ({ model, material, layer, infill, sub_total, qty, score }) => {
	return (
		<div className='project-item'>
			<div className='project-item-model project-item-value'>{model}</div>
			<div className='project-item-material project-item-value'>
				{material}
			</div>
			<div className='project-item-layer project-item-value'>{layer}</div>
			<div className='project-item-models project-item-value'>
				{infill}
			</div>
			<div className='project-item-cost project-item-value'>
				RS. {sub_total}
			</div>
			<div className='project-item-cost project-item-value'>{qty}</div>
			<div className='project-item-cost project-item-value'>
				RS. {sub_total * qty}
			</div>
			<div className='project-item-score project-item-value'>
				<div style={{ width: 50 }}>
					<CircularProgressbar
						value={score}
						text={`${score}%`}
						styles={buildStyles({
							pathColor: '#59cb59',
							textColor: 'black',
							textWeight: 'bold'
						})}
					/>
				</div>
			</div>
		</div>
	);
};

export default Item;
