import {useState} from "react"


let id = 13;
const geterateId = () => {
	return ++id;
}


const CreationForm = (props) => {

	const [employee, setEmployeeValues] = useState({
		avatar: "https://klike.net/uploads/posts/2020-04/1587719791_1.jpg",
		first_name: "",
		last_name: "",
		email: ""
	});
	const [errors, setErrors] = useState({});


	const handleChange = (event) => {
		setEmployeeValues({...employee, [event.target.name]: event.target.value});
	}


	const handleSubmit = (event) => {
		event.preventDefault();
		if (validate()) {
			props.addNewEmployee({...employee, id: geterateId()});
		}
	}

	const validate = () => {
		const errors = {};
		let isValid = true;

		if (!employee.first_name) {
			errors["first_name"] = "Please enter employee name.";
		}

		if (!employee.last_name) {
			errors["last_name"] = "Please enter employee last name.";
		}

		if (!employee.avatar) {
			errors["avatar"] = "Please add employee avatar.";
		} else {
			const pattern = new RegExp(/^https?:\/{2}(.)+\.(jpg|jpeg|gif|png)$/);
			if (!pattern.test(employee.avatar)) {
			  errors["avatar"] = "Please enter valid avatar address.";
			}
		}

		if (!employee.email) {
			errors["email"] = "Please enter employee email.";
		} else {
			const pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
			if (!pattern.test(employee.email)) {
			  errors["email"] = "Please enter valid email address.";
			}
		}

		if (Object.keys(errors).length) {
			isValid = false;
			setErrors(errors);
		}

		return isValid;
	}


	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label htmlFor="first_name">First name:</label>
				<div className="form-input">
					<input name="first_name" id="first_name" type="text" onChange={handleChange} value={employee.first_name} />
					{errors?.first_name && <div className="error-message">{errors.first_name}</div>}
				</div>
			</div>
			<div>
				<label htmlFor="last_name">Last name:</label>
				<div className="form-input">
					<input name="last_name" id="last_name" type="text" onChange={handleChange} value={employee.last_name}/>
					{errors?.last_name && <div className="error-message">{errors.last_name}</div>}
				</div>
			</div>
			<div>
				<label htmlFor="email">Email:</label>
				<div className="form-input">
					<input name="email" id="email" type="email" onChange={handleChange} value={employee.email}/>
					{errors?.email && <div className="error-message">{errors.email}</div>}
				</div>
			</div>
			<div>
				<label htmlFor="avatar">Avatar link:</label>
				<div className="form-input">
					<input name="avatar" id="avatar" type="text" onChange={handleChange} value={employee.avatar}/>
					{errors?.avatar && <div className="error-message">{errors.avatar}</div>}
				</div>
			</div>
			<button type="submit">Add</button>
		</form>
	);
}
export default CreationForm;