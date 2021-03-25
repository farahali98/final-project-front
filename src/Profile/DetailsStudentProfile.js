import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import * as yup from "yup";
// import { yupResolver } from "@hookform/resolvers";
import React, { useEffect, useState } from "react";
import { Button, Col, Card, Container } from "react-bootstrap";
import Axios from "axios";

// const phoneregex = /^((961)?(7(0|1|2|3|4|5|6|7|8|9))|(961|0)3)[0-9]{6}$/;

// const schema = yup.object().shape({
// 	firstName: yup
// 		.string()
// 		.matches(/^([^0-9]*)$/, " First Name should not contain numbers")
// 		.required("First Name is required"),
// 	lastName: yup.string().required("Last Name is required"),
// 	email: yup.string().email("invalid email form").required("Email is required"),
// 	password: yup.string().required("Password is required"),
// 	phoneNumber: yup
// 		.string()
// 		.matches(phoneregex, "Phone number is not valid")
// 		.required("phone number is required"),
// 	whatsappNumber: yup.string().required("Whatsapp Number is required"),
// 	nationality: yup.string().required("Nationality is required"),
// 	dateOfBirth: yup.string().required("Date Of Birth is required"),

// 	school: yup.string().required("School is required"),
// });

export default function DetailsStudentProfile(props) {
	const [name, setName] = useState("");
	const [email, setEmail] = useState('');
	const [getData, setGetData] = useState([]);
	const [password, setPassword] = useState('');
	const [location, setLocation] = useState('');
	const [image, setImage] = useState('');
	const [phonenumber, setPhoneNumber] = useState('');
	const [url, setUrl] = useState('');
	console.log(localStorage.getItem('id'))
	console.log('hello')

  const updateInfo = () => {
	  const id=localStorage.getItem('id');
		const data = FormData();
		data.append("name", name);
		data.append("email", email);
		data.append("password", password);
		data.append("url", url);
		data.append("location", location);
		data.append("phone_number", phonenumber);
		data.append("image", image);
		try {
			Axios.post(`http://localhost:8000/api/business/${id}?_method=PUT `, data, {
				//headers: {
				// 	'content-type': 'multipart/form-data',
				// 	'Authorization': "Bearer " + localStorage.getItem('token')
				// }
			}).then((response) => {
				console.log(response);

			})
		} catch (err) { console.log(err) }
	}
	console.log(name);
	return (
		<Container>
			<br />
			<Card>
				<Card.Body>
					<Form>
						<Form.Row>
							<Form.Group as={Col} md="4">
								<Form.Label>Name</Form.Label>
								<Form.Control
									name="name"
									defaultValue={props.name}
									type="name"
									name="name"
									defaultValue={props.firstName}
									onChange={(e) => setName(e.target.value)}
								/>
								<Form.Control.Feedback type="invalid" tooltip>
								</Form.Control.Feedback>
							</Form.Group>
							<Form.Group as={Col} md="4">
								<Form.Label>company url </Form.Label>
								<Form.Control
									name="url"
									type="link"
									name="url"
									defaultValue={props.url}
									onChange={(e) => setUrl(e.target.value)}
								
								/>
								<Form.Control.Feedback type="invalid" tooltip>
								</Form.Control.Feedback>
							</Form.Group>
							<Form.Group as={Col} md="4">
								<Form.Label>Location</Form.Label>
								<Form.Control
									name="location"
									type="link"
									name="location"
									defaultValue={props.Location}
									// error={!!errors.firstName}
									// helperText={errors?.firstName?.message}
									onChange={(e) => setLocation(e.target.value)}
								
								/>
								<Form.Control.Feedback type="invalid" tooltip>
								</Form.Control.Feedback>
							</Form.Group>


							<Form.Group as={Col} md="4">
								<Form.Label>Email address</Form.Label>

								<Form.Control
									type="email"
									name="email"
									value={props.email}
									onChange={(e) => setEmail(e.target.value)}

								/>



								<Form.Control.Feedback type="invalid" tooltip>
								</Form.Control.Feedback>
							</Form.Group>
							<Form.Group as={Col} md="4">
								<Form.Label>Password</Form.Label>
								<Form.Control
									type="password"
									name="password"
									value={props.password}
									onChange={(e) => setPassword(e.target.value)}

							
								/>

								<Form.Control.Feedback type="invalid" tooltip>
								</Form.Control.Feedback>
							</Form.Group>
							<Form.Group as={Col} md="4">
								<Form.Label>image</Form.Label>
								<Form.Control
									type="file"
									name="password"
									onChange={(e) => setImage(e.target.files[0])}

								
								/>

								<Form.Control.Feedback type="invalid" tooltip>
								</Form.Control.Feedback>
							</Form.Group>
							<Form.Group as={Col} md="4">
								<Form.Label>Phone Number</Form.Label>
								<Form.Control
									type="string"
									name="phoneNumber"
									value={props.PhoneNumber}
									onChange={(e) => setPhoneNumber(e.target.value)}

							
								/>

								<Form.Control.Feedback type="invalid" tooltip>
								</Form.Control.Feedback>
							</Form.Group>
						</Form.Row>
						<Button
							onClick={() => {
								updateInfo();
							}}
							type="submit"
						>
							Submit form
						</Button>
					</Form>
				</Card.Body>
			</Card>
		</Container>
	);
}
