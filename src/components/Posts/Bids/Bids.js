import style from './Bids.module.css';

const Bids = () => {
	return(
		<div className={style.bids}>
			<div className={style.card}>
				<h3 className={style.title}>Travel Wordpress Theme</h3>
				<div className={style.date}>5 Hour Lefts</div>
				<div className={style.budget}>
					<div className={style.budgetCol}>
						<div className={style.budgetText}>Bids</div>
						<div className={style.budgetPrice}>4</div>
					</div>
					<div className={style.budgetCol}>
						<div className={style.budgetText}>Avg Bid (USD)</div>
						<div className={style.budgetPrice}>$510</div>
					</div>
					<div className={style.budgetCol}>
						<div className={style.budgetText}>Project Budget (USD)</div>
						<div className={style.budgetPrice}>$500 - $600</div>
					</div>
				</div>
				<div className={style.buttons}>
					<div className={style.bidders}>
						<div className={style.num}>3</div>
						<div className={style.text}>Bidders</div>
					</div>
					<div className={style.edit}></div>
					<div className={style.delete}></div>
				</div>
			</div>
			<div className={style.card}>
				<h3 className={style.title}>Travel Wordpress Theme</h3>
				<div className={style.date}>5 Hour Lefts</div>
				<div className={style.budget}>
					<div className={style.budgetCol}>
						<div className={style.budgetText}>Bids</div>
						<div className={style.budgetPrice}>4</div>
					</div>
					<div className={style.budgetCol}>
						<div className={style.budgetText}>Avg Bid (USD)</div>
						<div className={style.budgetPrice}>$510</div>
					</div>
					<div className={style.budgetCol}>
						<div className={style.budgetText}>Project Budget (USD)</div>
						<div className={style.budgetPrice}>$500 - $600</div>
					</div>
				</div>
				<div className={style.buttons}>
					<div className={style.bidders}>
						<div className={style.num}>3</div>
						<div className={style.text}>Bidders</div>
					</div>
					<div className={style.edit}></div>
					<div className={style.delete}></div>
				</div>
			</div>
			<div className={style.card}>
				<h3 className={style.title}>Travel Wordpress Theme</h3>
				<div className={style.date}>5 Hour Lefts</div>
				<div className={style.budget}>
					<div className={style.budgetCol}>
						<div className={style.budgetText}>Bids</div>
						<div className={style.budgetPrice}>4</div>
					</div>
					<div className={style.budgetCol}>
						<div className={style.budgetText}>Avg Bid (USD)</div>
						<div className={style.budgetPrice}>$510</div>
					</div>
					<div className={style.budgetCol}>
						<div className={style.budgetText}>Project Budget (USD)</div>
						<div className={style.budgetPrice}>$500 - $600</div>
					</div>
				</div>
				<div className={style.buttons}>
					<div className={style.bidders}>
						<div className={style.num}>3</div>
						<div className={style.text}>Bidders</div>
					</div>
					<div className={style.edit}></div>
					<div className={style.delete}></div>
				</div>
			</div>
		</div>
	)
}

export default Bids;