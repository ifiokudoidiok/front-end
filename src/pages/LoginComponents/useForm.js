import { useState, useEffect } from 'react';


const useForm = (callback, validate) => {

	const [values, setValues] = useState({});
	const [errors, setErrors] = useState({});
	const [visibility, setVisibility] = useState(false);
	const [isLoading, setLoadingState] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);


	useEffect(() => {
		if (!Object.values(errors).includes(true) && isSubmitting) {
			setLoadingState(true);
			callback();
		}
	}, [errors, isSubmitting, callback]);


	useEffect(() => {
		if(validate) {
			setErrors(validate(values));
		}
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
			setIsSubmitting(true);
			setErrors(validate(values));
		} else {
			setLoadingState(true);
			callback();
		}
	};

	const resetForm = () => {
		setValues({});
	}

	const toggleVisibility = () => {
		if(values.password) {
			setVisibility(!visibility)
		}
	}

	return {
		toggleVisibility,
		handleChange,
		handleSubmit,
		resetForm,
		values,
		errors,
		isLoading,
		visibility
	}
};

export default useForm;