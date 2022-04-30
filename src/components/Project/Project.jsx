import React from 'react';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import './Project.styles.css';
import 'react-circular-progressbar/dist/styles.css';
import { Link } from 'react-router-dom';

const Project = ({ id, est, date, name, models, cost, score }) => {
	return (
		<Link to={`/projects/${id}`} style={{ textDecoration: 'none' }}>
			<div className='project-item'>
				<div className='project-item-est project-item-value'>{est}</div>
				<div className='project-item-date project-item-value'>
					{date}
				</div>
				<div className='project-item-name project-item-value'>
					{name}
				</div>
				<div className='project-item-models project-item-value'>
					{models}
				</div>
				<div className='project-item-cost project-item-value'>
					{cost}
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
		</Link>
	);
};

export default Project;
