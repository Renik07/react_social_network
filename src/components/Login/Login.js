import { ErrorMessage, Field, Form, Formik } from 'formik';
import style from './Login.module.css';

const Login = () => {
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
					<LoginForm />
				</div>
			</div>
		</div>
	)
}

const LoginForm = () => {

/* 	const validate = values => {
		const errors = {};
		if (!values.email) {
			errors.email = 'Required';
		} else if (
			!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
		) {
			errors.email = 'Invalid email address';
		}
		return errors;
	} */

	const submit = (values, { setSubmitting }) => {
		setTimeout(() => {
			alert(JSON.stringify(values, null, 2));
			setSubmitting(false);
		}, 400);
	}

	return(
		<div>
			<Formik
				initialValues={{ login: '', password: '', rememberMe: false }}
				/* validate={validate} */
				onSubmit={submit}
			>
				{({ isSubmitting }) => (
					<Form>
						<Field type="text" name="login" className={style.inputName} />
						<ErrorMessage name="text" component="div" />
						<Field type="password" name="password" className={style.inputPassword} />
						<ErrorMessage name="password" component="div" />
						<div className={style.checkbox}>
							<label>
								<Field type="checkbox" name="rememberMe" className={style.inputCheckbox} />
								Remember me
							</label>
						</div>
						<button type="submit" disabled={isSubmitting} className={style.button}>
							Submit
						</button>
					</Form>
				)}
			</Formik>
		</div>
	)
}


export default Login;