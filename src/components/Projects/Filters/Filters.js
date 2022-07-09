import style from "./Filters.module.css";

const Filters = () => {
	return(
		<div className={style.filters}>
			<div className={style.header}>
				<h3>Filters</h3>
				<div className={style.clear}>Clear all filters</div>
			</div>
			<div className={style.body}>
				<div className={style.skills}>
					<div className={style.heading}>
						<h4>Skills</h4>
						<div className={style.clear}>Clear</div>
					</div>
					<input className={style.input} placeholder="Search skills" />
				</div>
				<div className={style.availabilty}>
					<div className={style.heading}>
						<h4>Availabilty</h4>
						<div className={style.clear}>Clear</div>
					</div>
					<div className={style.radioButtons}>
						<label><input type="radio" name="radio" value="value" />Hourly</label>
						<label><input type="radio" name="radio" value="value" />Part Time</label>
						<label><input type="radio" name="radio" value="value" />Full Time</label>
					</div>
				</div>
				<div className={style.projectType}>
					<div className={style.heading}>
						<h4>Project Type</h4>
						<div className={style.clear}>Clear</div>
					</div>
					<select name="Select a project type">
						<option selected="selected" disabled>Select a project type</option>
						<option>Option 1</option>
						<option>Option 2</option>
						<option>Option 3</option>
						<option>Option 4</option>
					</select>
				</div>
				<div className={style.rate}>
					<div className={style.heading}>
						<h4>Pay Rate / Hr ($)</h4>
						<div className={style.clear}>Clear</div>
					</div>
					<div className={style.range}>
						<input type='number' /> - <input type='number' />
					</div>
					<input className={style.inputRange} type="range" />
				</div>
				<div className={style.experience}>
					<div className={style.heading}>
						<h4>Experience Level</h4>
						<div className={style.clear}>Clear</div>
					</div>
					<select name="Select a experience level">
						<option selected="selected" disabled>Select a experience level</option>
						<option>Option 1</option>
						<option>Option 2</option>
						<option>Option 3</option>
						<option>Option 4</option>
					</select>
				</div>
				<div className={style.countries}>
					<div className={style.heading}>
						<h4>Countries</h4>
						<div className={style.clear}>Clear</div>
					</div>
					<select name="Select a country">
						<option selected="selected" disabled>Select a country</option>
						<option>Option 1</option>
						<option>Option 2</option>
						<option>Option 3</option>
						<option>Option 4</option>
					</select>
				</div>
			</div>
		</div>
	)
}

export default Filters;