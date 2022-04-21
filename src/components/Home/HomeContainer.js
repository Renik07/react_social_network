import { connect } from 'react-redux';
import Home from './Home';

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