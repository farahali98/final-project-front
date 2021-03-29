import React, { useState, useEffect } from "react";
import { Button, Modal, Card, Form, Col } from "react-bootstrap";
import FoodCrud from "./FoodCrud";
import Axios from "axios";
import { useHistory } from "react-router-dom";
function StudentViewPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [location, setLocation] = useState("");
  const [image, setImage] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [url, setUrl] = useState("");
  const [modalShow, setModalShow] = React.useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [loading, setLoading] = useState(false);
  const [business, setBusiness] = useState([]);
  const [food,setFood]=useState([]);
 
  useEffect(() => {
    const id = localStorage.getItem("id");
    setLoading(true);
    if (id != null || !!id) {
      Axios.get(`http://localhost:8000/api/business/${id}`).then((response) => {
        // console.log(response.data.business.name);
        setName(response.data.business.name);
        setEmail(response.data.business.email);
        setPassword(response.data.business.password);
        setLocation(response.data.business.location);
        setImage(response.data.business.image);
        setPhoneNumber(response.data.business.phone_number);
        setUrl(response.data.business.url);
		setFood(response.data.business.food)

      });
      setLoading(false);
    }
  }, []);
 
  const updateInfo = () => {
    const id = localStorage.getItem("id");
    const data = new FormData();
    data.append("name", name);
    data.append("email", email);
    data.append("password", password);
    data.append("url", url);
    data.append("location", location);
    data.append("phone_number", phoneNumber);
    data.append("image", image);
    try {
      console.log("testtts");
      Axios.post(
        `http://localhost:8000/api/business/${id}?_method=PUT `,
        data,
        {
          headers: {
            "content-type": "multipart/form-data",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      ).then((response) => {
        // console.log(response);
      });
    } catch (err) {
      console.log(err);
    }
  };
  let history = useHistory();



  const logout = () => {
      localStorage.removeItem("token");
      localStorage.removeItem("id");
      history.push("/");
      window.location.reload(true);
  };

  return (
    <>
      <div style={{paddingTop:'10px'}}>
       
       
      <img
        style={{ height: "200px" }}
		 src={"http://localhost:8000/storage/" + image} />
		

      <h3 >{name}</h3>
     
    </div>
    <Button onClick={logout}>logout</Button>


    <Form>
						<Form.Row>
							<Form.Group as={Col} md="4">
								<Form.Label>Name</Form.Label>
								<Form.Control
									name="name"
									defaultValue={name}
									type="name"
									name="name"
									defaultValue={name}
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
									defaultValue={url}
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
									defaultValue={Location}
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
									value={email}
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
									value={password}
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
					
        <FoodCrud />
        </>
  );
}

export default StudentViewPage;
