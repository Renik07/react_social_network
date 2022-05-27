import { useFormik } from "formik";
import * as Yup from "yup";
import style from "./MessagesForm.module.css";

const MessagesForm = (props) => {
	const formik = useFormik({
		initialValues: {
			textMessage: ""
		},
		onSubmit: (values, {resetForm})=> {
			props.addMessage(values.textMessage);
			resetForm( {values: ''} );
		},
		validationSchema: Yup.object({
			textMessage: Yup.string()
				.max(100, 'Must be 100 characters or less')
				.required('')
		})
	});

	return(
		<form onSubmit={formik.handleSubmit} className={style.send}>
			<input 
				name="textMessage" 
				onChange={formik.handleChange} 
				onBlur={formik.handleBlur}
				className={style.input} 
				type="text" 
				value={formik.values.newTextMessage} 
				placeholder="Type a message here"
				validationSchema={formik.validationSchema} />
				{formik.errors.textMessage &&  formik.touched.textMessage ? <p className={style.error}>{formik.errors.textMessage}</p> : null}
			<button className={style.button} type="submit">Send</button>
		</form>
	)
}

export default MessagesForm;