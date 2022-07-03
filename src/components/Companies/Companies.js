import style from './Companies.module.css';
import Company from './Сompany/Сompany';

const Companies = (props) => {

	return (
		<div className={style.container}>
			<h2 className={style.title}>All Companies</h2>
			
			<div className={style.wrapper}>
				{[...new Array(16)].map((_, index) => <Company key={index} />)}
			</div>
		</div>
	)
}

export default Companies;