import { connect } from 'react-redux';
/* import StoreContext from '../../StoreContext'; */
import Home from './Home';


/* const HomeContainer = () => {
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
} */

let mapStateToProps = (state) => {
	return {
		homePage: state.homePage
	}
}

let mapDispatchToProps = (dispatch) => {
	return {

	}
}

let HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);

export default HomeContainer;