import StoreContext from '../../StoreContext';
import Home from './Home';


const HomeContainer = () => {
	return (
		<StoreContext.Consumer> 
			{ 
				(store) => {
					let state = store.getState();

					return <Home 
						homePage = {state.homePage}
					/>
				}
			}
		</StoreContext.Consumer>
	)
}

export default HomeContainer;