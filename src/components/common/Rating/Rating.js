import { useState } from "react";
import style from "./Rating.module.css";

const Rating = () => {
	
	const [currentValue, setCurrentValue] = useState(0);
	const [hoverValue, setHoverValue] = useState(0);
	const [reviews, setReviews] = useState(5);
	const [val, setVal] = useState(5.00.toFixed(2));
	const stars = [...new Array(5)];

	const handleMouseClick = value => {
		setCurrentValue(value);
		setReviews(6);
		setVal(((25 + value) / 6).toFixed(2));
	}

	const handleMouseOver = value => {
		setHoverValue(value);
	}

	const handleMouseLeave = () => {
		setHoverValue(undefined);
	}

	return(
		<section className={style.rating}>
			<div className={style.stars}>
				{stars.map((_, i) => <div 
					key={i} 
					onClick = {() => handleMouseClick(i + 1)}
					onMouseOver = {() => handleMouseOver(i + 1)}
					onMouseLeave = {() => handleMouseLeave()}
					className={(currentValue || hoverValue) > i ? style.starGreen : style.starDefault}>★</div>)
				}
			</div>
			<div className={style.reviews}>
				<span>{ val }</span> of <span>{ reviews }</span> Reviews
			</div>
		</section>
	)
}

export default Rating;