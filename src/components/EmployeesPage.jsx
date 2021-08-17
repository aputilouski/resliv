import {useState, useEffect} from "react"
import EmployeeCard from "./EmployeeCard"
import CreationForm from "./CreationForm"


const getEmployees = async () => {
	return await fetch('https://reqres.in/api/users?per_page=12').then(res => (res.json()));
}


const EmployeesPage = (props) => {

	const [isLoading, setLoading] = useState(true);
	const [employees, setEmployees] = useState([]);
	const [isCreationMode, activateCreationMode] = useState(false);


	useEffect(() => { 
	 	getEmployees().then(employees => {
		 	setEmployees(employees.data);
		})
		.catch(e => console.error(e))
		.finally(() => {
	 		setLoading(false);
		})

  	}, []);


	const addNewEmployee = (newEmployee) => {
		setEmployees([newEmployee, ...employees]);
		activateCreationMode(false);
	}

	return(
		<div className="card_container">
			{
				isLoading 
				? <div>Loading...</div>
				: <div>
				<div className="form_wrapper">
					{
						isCreationMode 
						? <CreationForm addNewEmployee={addNewEmployee} /> 
						: <button className="add_button" onClick={() => {activateCreationMode(true)}}>Add new</button>
					}
				</div> 
				{
					employees.map((employee, index) => {
						return <div key={employee.id} className="card_wrapper">
							<EmployeeCard {...employee} />
							<button onClick={() => {setEmployees(employees.filter(e => (e.id !== employee.id)));}}>
								Remove
							</button>
						</div>
					})
				}
				</div>
			}
		</div>
	);
}
export default EmployeesPage;