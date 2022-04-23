import React from 'react';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import './ProjectHeader.styles.css';

const ProjectHeader = ({ name, creator, est, cost, score }) => {
	return (
		<div className='project-header'>
			<div className='project-header-item column'>
				<span className='project-name'>{name}</span>
				<span>Created by {creator}</span>
			</div>
			<div className='project-header-item est'>Estimate No : {est}</div>
			<div className='project-header-item'>Total Value : RS. {cost}</div>
			<div className='project-header-item score'>
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

export default ProjectHeader;
