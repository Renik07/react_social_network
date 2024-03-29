import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './ProfileTabs.css';
import feed from '../../../assets/images/ProfileTabs/icon-feed.png';
import info from '../../../assets/images/ProfileTabs/icon-info.png';
import jobss from '../../../assets/images/ProfileTabs/icon-jobs.png';
import bids from '../../../assets/images/ProfileTabs/icon-bids.png';
import portfolio from '../../../assets/images/ProfileTabs/icon-portfolio.png';
import reviews from '../../../assets/images/ProfileTabs/icon-reviews.png';
import payment from '../../../assets/images/ProfileTabs/icon-payment.png';
import Feed from '../Feed/Feed';
import Info from '../Info/Info';
import Jobs from '../Jobs/Jobs';
import Bids from '../Bids/Bids';
import Portfolio from '../Portfolio/Portfolio';
import Reviews from '../Reviews/Reviews';
import Payment from '../Payment/Payment';

const ProfileTabs = (props) => {
	const jobs = props.jobs.map((job, i) => {
		return <Feed key={i} job={job} />
	})
	return (
		<Tabs>
			<TabList>
				<Tab>
					<img src={feed} alt="feed" />
					<div>Feed</div>
				</Tab>
				<Tab>
					<img src={info} alt="info" />
					<div>Info</div>					
					</Tab>
				<Tab>
					<img src={jobss} alt="jobs" />
					<div>Jobs</div>					
					</Tab>
				<Tab>
					<img src={bids} alt="bids" />
					<div>Bids</div>					
					</Tab>
				<Tab>
					<img src={portfolio} alt="portfolio" />
					<div>Portfolio</div>					
					</Tab>
				<Tab>
					<img src={reviews} alt="reviews" />
					<div>Reviews</div>					
					</Tab>
				<Tab>
					<img src={payment} alt="payment" />
					<div>Payment</div>					
					</Tab>
			</TabList>

			<TabPanel>
				{ jobs }
			</TabPanel>
			<TabPanel>
				<Info />
			</TabPanel>
			<TabPanel>
				<Jobs />
			</TabPanel>
			<TabPanel>
				<Bids />
			</TabPanel>
			<TabPanel>
				<Portfolio />
			</TabPanel>
			<TabPanel>
				<Reviews />
			</TabPanel>
			<TabPanel>
				<Payment />
			</TabPanel>
		</Tabs>
	)
}

export default ProfileTabs;