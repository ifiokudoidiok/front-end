import { useState, useEffect } from 'react';


const useForm = (callback, validate,) => {

	const [values, setValues] = useState({});
	const [errors, setErrors] = useState({});
	const [visibility, setVisibility] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);

	useEffect(() => {

		if (!Object.values(errors).includes(true) && isSubmitting) callback();
	
	}, [errors, isSubmitting]); // eslint-disable-line

	useEffect(() => {

		if(validate) setErrors(validate(values));

	}, [values, validate])


	const handleChange = (event) => {
		event.persist();
		setValues(values => ({ 
			...values, 
			[event.target.id]: event.target.value 
		}));
	};

	const handleSubmit = (event) => {
		if (event) event.preventDefault();
		
		if(validate) {
			setErrors(validate(values));
			setIsSubmitting(true);
		} else {
			callback();
		}
	};

	const resetForm = () => setValues({});

	const toggleVisibility = () => {
		if(values.password) setVisibility(!visibility)
	}

	return {
		errors,
		values,
		visibility,
		resetForm,
		handleChange,
		handleSubmit,
		toggleVisibility,
	}
};

export default useForm;