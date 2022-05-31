import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './ProfileTabs.css';

const ProfileTabs = () => {
	return (
		<Tabs>
			<TabList className='react-tabs__tab-list'>
				<Tab>Feed</Tab>
				<Tab>Info</Tab>
				<Tab>Jobs</Tab>
				<Tab>Bids</Tab>
				<Tab>Portfolio</Tab>
				<Tab>Reviews</Tab>
				<Tab>Payment</Tab>
			</TabList>

			<TabPanel>
				<h2>Any content 1</h2>
			</TabPanel>
			<TabPanel>
				<h2>Any content 2</h2>
			</TabPanel>
			<TabPanel>
				<h2>Any content 1</h2>
			</TabPanel>
			<TabPanel>
				<h2>Any content 2</h2>
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