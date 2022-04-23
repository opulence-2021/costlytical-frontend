export const PROJECTS = [
	{
		id: 1,
		name: 'Stationary Set',
		est: 'CE-003',
		date: '01/02/2022',
		models: 5,
		cost: 2500,
		score: 100,
		creator: 'John Harry',
		items: [
			{
				id: 1,
				model: 'Base V2',
				material: 'PLA+',
				layer: '0.28mm',
				infill: '20%',
				sub_total: 1000,
				qty: 1,
				score: 78
			},
			{
				id: 2,
				model: 'Propeller V2',
				material: 'PLA+',
				layer: '0.28mm',
				infill: '20%',
				sub_total: 250,
				qty: 2,
				score: 75
			}
		]
	},
	{
		id: 2,
		name: 'Infusion pump',
		est: 'CE-002',
		date: '10/01/2021',
		models: 6,
		cost: 5500,
		score: 75,
		creator: 'John Harry',
		items: [
			{
				id: 1,
				model: 'Base V2',
				material: 'PLA+',
				layer: '0.28mm',
				infill: '20%',
				sub_total: 1000,
				qty: 1,
				score: 78
			},
			{
				id: 2,
				model: 'Propeller V2',
				material: 'PLA+',
				layer: '0.28mm',
				infill: '20%',
				sub_total: 250,
				qty: 2,
				score: 75
			},
			{
				id: 3,
				model: 'Breaker',
				material: 'PLA+',
				layer: '0.28mm',
				infill: '20%',
				sub_total: 2150,
				qty: 3,
				score: 24
			},
			{
				id: 4,
				model: 'Conductor',
				material: 'PLA+',
				layer: '0.28mm',
				infill: '20%',
				sub_total: 450,
				qty: 12,
				score: 90
			}
		]
	},
	{
		id: 3,
		name: 'Water pump',
		est: 'CE-001',
		date: '01/01/2021',
		models: 2,
		cost: 1500,
		score: 69,
		creator: 'John Harry',
		items: [
			{
				id: 1,
				model: 'Base V2',
				material: 'PLA+',
				layer: '0.28mm',
				infill: '20%',
				sub_total: 1000,
				qty: 1,
				score: 78
			},
			{
				id: 2,
				model: 'Propeller V2',
				material: 'PLA+',
				layer: '0.28mm',
				infill: '20%',
				sub_total: 250,
				qty: 2,
				score: 75
			}
		]
	}
];

export const get_project = (id) => {
	return PROJECTS.find((project) => project.id == id);
};
