const EmployeeCart = ({avatar, email, first_name, last_name}) => {
	return (
		<div className="card">
			<img src={avatar} alt=""/>
			<ul>
				<li>
					First name: {first_name}
				</li>
				<li>
					Last name: {last_name}
				</li>
				<li>
					Email: {email}
				</li>
			</ul>
		</div>
	);

}
export default EmployeeCart;