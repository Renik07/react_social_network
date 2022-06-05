import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './ProfileTabs.css';
import feed from '../../../assets/images/ProfileTabs/icon-feed.png';
import info from '../../../assets/images/ProfileTabs/icon-info.png';
import jobs from '../../../assets/images/ProfileTabs/icon-jobs.png';
import bids from '../../../assets/images/ProfileTabs/icon-bids.png';
import portfolio from '../../../assets/images/ProfileTabs/icon-portfolio.png';
import reviews from '../../../assets/images/ProfileTabs/icon-reviews.png';
import payment from '../../../assets/images/ProfileTabs/icon-payment.png';
import Feed from '../Feed/Feed';
import Info from '../Info/Info';
import Jobs from '../Jobs/Jobs';
import Bids from '../Bids/Bids';

const ProfileTabs = () => {
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
					<img src={jobs} alt="jobs" />
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
				<Feed />
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
				<h2>Any content 1</h2>
			</TabPanel>
			<TabPanel>
				<h2>Any content 2</h2>
			</TabPanel>
			<TabPanel>
				<h2>Any content 2</h2>
			</TabPanel>
		</Tabs>
	)
}

export default ProfileTabs;