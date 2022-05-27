import { useFormik } from "formik";
import * as Yup from "yup";
import style from "./LoginForm.module.css";

const LoginForm = (props) => {

	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
			rememberMe: false
		},

		onSubmit: (values, {setSubmitting})=> {
			props.loginTC(values.email, values.password, values.rememberMe);
			console.log();
			/* resetForm( {values: ''} ); */
			/* setTimeout(() => {
				alert(JSON.stringify(values, null, 2));
				setSubmitting(false);
			}, 400); */

		},
		validationSchema: Yup.object({
			email: Yup.string()
				.max(20, 'Must be 20 characters or less')
				.required('Required'),
			password: Yup.string()
				.max(20, 'Must be 20 characters or less')
				.required('Required')
		})
	});
	
	return(
		<form onSubmit={formik.handleSubmit}>
			<input 
				name="email" 
				onChange={formik.handleChange} 
				onBlur={formik.handleBlur}
				className={style.inputName} 
				type="text" 
				value={formik.values.email} 
				placeholder="Login"
				validationSchema={formik.validationSchema} />
			{formik.errors.email &&  formik.touched.email ? <p className={style.error}>{formik.errors.email}</p> : null}
			<input 
				name="password"
				onChange={formik.handleChange} 
				onBlur={formik.handleBlur}
				className={style.inputPassword}
				type="password"
				value={formik.values.password}
				placeholder="Password"
				validationSchema={formik.validationSchema} />
			{formik.errors.password &&  formik.touched.password ? <p className={style.error}>{formik.errors.password}</p> : null}
			<div className={style.checkbox}>
				<label>
					<input 
						name="rememberMe"
						onChange={formik.handleChange} 
						onBlur={formik.handleBlur}
						className={style.inputCheckbox}
						type="checkbox"
						value={formik.values.rememberMe}
						placeholder="Password"
						validationSchema={formik.validationSchema} />
					Remember me
				</label>
			</div>
			<button className={style.button} type="submit">Submit</button>
		</form>
	)
}
export default LoginForm;