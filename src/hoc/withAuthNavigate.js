import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

let mapStateToPropsForNavigate = (state) => {
	return {
		isAuth: state.auth.isAuth
	}
}

export const withAuthNavigate = (Component) => {

	const NavigateComponent = (props) => {
		
		if (!props.isAuth) return <Navigate to='/login' />;
		
		return <Component {...props} />
	}

	let ConnectedAuthNavigateComponent = connect(mapStateToPropsForNavigate)(NavigateComponent);

	return ConnectedAuthNavigateComponent;

}
