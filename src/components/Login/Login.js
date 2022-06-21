import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { loginThunkCreator } from '../../redux/authReducer';
import LoginForm from '../forms/LoginForm/LoginForm';
import style from './Login.module.css';

const Login = (props) => {

	if (props.isAuth) return <Navigate to='/profile/' />;

	return (
		<div className={style.login}>
			<div className={style.container}>
				<div className={style.column1}>
					<h2 className={style.title}>Workwise</h2>
					<p className={style.text}>
						Workwise, is a global freelancing platform and social networking 
						where businesses and independent professionals connect and 
						collaborate remotely
					</p>
				</div>
				<div className={style.column2}>
					<div className={style.signIn}>Sign In</div>
					<h3 className={style.subtitle}>Sign In</h3>
					<LoginForm {...props} loginTC={props.loginTC}/>
				</div>
			</div>
		</div>
	)
}

let mapStateToProps = (state) => {
	return {
		isAuth: state.auth.isAuth
	}
}

export default connect(mapStateToProps, {loginTC: loginThunkCreator})(Login);
