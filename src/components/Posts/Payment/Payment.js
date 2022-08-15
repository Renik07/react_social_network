import React from 'react';
import style from "./Payment.module.css";
import amex from "../../../assets/images/Payment/amex.png";
import discover from "../../../assets/images/Payment/discover.png";
import visa from "../../../assets/images/Payment/visa.png";
import mastercard from "../../../assets/images/Payment/mastercard.png";
import { useFormik } from "formik";
import * as Yup from "yup";

const Payment = () => {

	const formik = useFormik({
		initialValues: {
			cardNumber: "",
			firstName: "",
			lastName: "",
			mm: "",
			yy: "",
			cvc: ""
		},

		onSubmit: (values, {setSubmitting, setStatus})=> {
			/* resetForm( {values: ''} ); */
			setTimeout(() => {
				alert(JSON.stringify(values, null, 2));
				setSubmitting(false);
			}, 400);
		},

		validationSchema: Yup.object({
			cardNumber: Yup.string()
				.required('Required')
				.min(16, 'Must be 16 characters')
				.max(16, 'Must be 16 characters'),
			firstName: Yup.string()
				.required('Required'),
			lastName: Yup.string()
				.required('Required'),
			mm: Yup.string()
				.max(20, 'Must be 2 characters')
				.required('Required'),
			yy: Yup.string()
				.max(20, 'Must be 2 characters')
				.required('Required'),
			cvc: Yup.string()
				.max(20, 'Must be 3 characters')
				.required('Required'),
		})
	})

  return (
    <div className={style.payment}>
      <div className={style.card}>
				<h3 className={style.title}>Add Billing Method</h3>
				<div className={style.protection}>
					<div className={style.protectionText}>With workwise payment protection , only pay for work delivered.</div>
				</div>
				<div className={style.creditCard}>
					<div className={style.creditCardHeader}>
						<div className={style.cardTitle}>Credit or Debit Cards</div>
						<div className={style.cards}>
							<img src={amex} alt='amex' />
							<img src={discover} alt='discover' />
							<img src={visa} alt='visa' />
							<img src={mastercard} alt='mastercard' />
						</div>
					</div>
					<form onSubmit={formik.handleSubmit}>
						<div className={style.grid}>
							<input name="cardNumber" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.cardNumber} className={style.inputCard} type="number" placeholder='Card Number'/>
							<input name="firstName" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.firstName} className={style.inputCard} type="text" placeholder='First Name'/>
							<input name="lastName" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.lastName} className={style.inputCard} type="text" placeholder='Last Name'/>
							<input name="mm" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.mm} className={style.inputCard} type="number" placeholder='MM'/>
							<input name="yy" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.yy} className={style.inputCard} type="number" placeholder='YY'/>
							<input name="cvc" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.cvc} className={style.inputCard} type="number" placeholder='CVC (Security Code)'/>
							{formik.errors.cvc &&  formik.touched.cvc ? <p className={style.error}>{formik.errors.cvc}</p> : null}
						</div>
						<button className={style.button} type="submit">Continue</button>
					</form>
				</div>
      </div>
    </div>
  );
};

export default Payment;
