import React from 'react';
import './ProjectsGrid.styles.css';
import { PROJECTS } from '../../data/Projects.data';
import Project from '../Project/Project';

const ProjectsGrid = () => {
	const TITLES = [
		'Estimate No.',
		'Date',
		'Project Name',
		'No. of Models',
		'Total Cost',
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
				{PROJECTS.map((project, index) => {
					return <Project key={index} {...project} />;
				})}
			</div>
		</div>
	);
};

export default ProjectsGrid;
