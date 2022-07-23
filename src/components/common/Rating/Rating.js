import { useState } from "react";
import style from "./Rating.module.css";

const Rating = () => {
	
	const [currentValue, setCurrentValue] = useState(null);
	const [hoverValue, setHoverValue] = useState(null);
	const [reviews, setReviews] = useState(5);
	const [val, setVal] = useState(5.00.toFixed(2));

	const handleMouseClick = value => {
		setCurrentValue(value);
		setReviews(6);
		setVal(((25 + value) / 6).toFixed(2));
	}

	return(
		<section className={style.rating}>
			<div className={style.stars}>
				{[...Array(5)].map((_, i) => <div 
					key={i} 
					onClick = {() => handleMouseClick(i + 1)}
					onMouseOver = {() => setHoverValue(i + 1)}
					onMouseLeave = {() => setHoverValue(null)}
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