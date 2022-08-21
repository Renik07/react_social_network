let initialState = {
		jobs: [
			{
				id: 1,
				fullname: "John Doe",
				title: "Senior UI / UX designer",
				location: "Finland",
				fulltime: "fulltime",
				price: "$30 / hr",
				desc: "Lorem ipsum",
				skills: ["Figma", "Photoshop", "Zeplin"]
			},
			{
				id: 2,
				fullname: "Alice Cooper",
				title: "Middle PHP Developer",
				location: "Spain",
				fulltime: "Part Time",
				price: "$40 / hr",
				desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus hendrerit metus, ut ullamcorper quam finibus at.",
				skills: ["PHP", "Node", "JavaScript"]
			},
			{
				id: 3,
				fullname: "Mike Mayers",
				title: "Junior React-developer",
				location: "Russia",
				fulltime: "Full Time",
				price: "$10 / hr",
				desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus hendrerit metus, ut ullamcorper quam finibus at. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus hendrerit metus, ut ullamcorper quam finibus at.",
				skills: ["HTML", "CSS/SCSS", "JavaScript", "React", "Redux"]
			}
		]
}

const jobsReducer = (state = initialState, action) => {
	switch(action.type) {
		default:
			return state;
	}
}

export default jobsReducer;