let initialState = {
	projects: [
		{
			id: 1,
			company: "Facebook",
			title: "Simple Classified Site",
			location: "USA",
			fulltime: "Full Time",
			price: "$300 - $350",
			desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus hendrerit metus, ut ullamcorper quam finibus at. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus hendrerit metus, ut ullamcorper quam finibus at.",
			skills: ["Wordpress", "PHP", "Zeplin", "Illustrator", "CSS"]
		},
		{
			id: 2,
			company: "Space X",
			title: "Ios Shopping mobile app",
			location: "Spain",
			fulltime: "Part Time",
			price: "$1300 - $2350",
			desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus hendrerit metus, ut ullamcorper quam finibus at.",
			skills: ["React Native", "PHP", "Node", "JavaScript", "Wordpress", "PHP", "Zeplin", "Illustrator", "CSS"]
		},
		{
			id: 3,
			company: "Google",
			title: "Android mobile app",
			location: "Russia",
			fulltime: "Full Time",
			price: "$900 - $1250",
			desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus hendrerit metus, ut ullamcorper quam finibus at. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus hendrerit metus, ut ullamcorper quam finibus at.",
			skills: ["HTML", "CSS/SCSS", "JavaScript", "React", "Redux"]
		}
	]
}

const projectsReducer = (state = initialState, action) => {
	switch(action) {
		default:
			return state;
	}
}

export default projectsReducer;