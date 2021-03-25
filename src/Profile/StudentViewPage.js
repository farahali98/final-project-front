import React, { useState, useEffect } from "react";
import EditStudentProfile from "./EditStudentProfile";
import { Button, Modal, Card, Form, Col } from "react-bootstrap";
import StudentInfo from "./StudentInfo";
// import "./view.css";
import FoodCrud from './FoodCrud'
import { LoadScript } from "@react-google-maps/api";
import Axios from "axios";
import FooterPage from '../components/FooterPage';
function StudentViewPage() {
  // const [id, setId] = useState('');
  const [name, setName] = useState("");
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [location, setLocation] = useState('');
  const [image, setImage] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [url, setUrl] = useState('');
  const [modalShow, setModalShow] = React.useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const id = localStorage.getItem('id')
    setLoading(true)
    
    Axios.get(`http://localhost:8000/api/business/${id}`)
      .then(
        response => {
          setName(response.data.business.name)
          setEmail(response.data.business.email)
          setPassword(response.data.business.password)
          setLocation(response.data.business.location)
          setImage(response.data.business.image)
          setPhoneNumber(response.data.business.phone_number)
          setUrl(response.data.business.url)
        }
      )
    setLoading(false)
  }, []);

  const updateInfo = () => {
    const id = localStorage.getItem('id')
    const data = new FormData();
    data.append("name", name);
    data.append("email", email);
    data.append("password", password);
    data.append("url", url);
    data.append("location", location);
    data.append("phone_number", phoneNumber);
    data.append("image", image);
    try {
      console.log('testtts')
      Axios.post(`http://localhost:8000/api/business/${id}?_method=PUT `, data, {
        headers: {
          'content-type': 'multipart/form-data',
          'Authorization': "Bearer " + localStorage.getItem('token')
        }
      }).then((response) => {
        // console.log(response);
      })
    } catch (err) { console.log(err) }
  }
  return (
    <>
      <>
        {!loading && <div className="container">
          <div className="main-body">
            <div className="row gutters-sm">



              <>
               
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Card>
                      <Card.Body>
                        <Form>
                          <Form.Row>
                            <Form.Group as={Col} md="4">
                              <Form.Label>Name</Form.Label>
                              <Form.Control
                                name="name"
                                defaultValue={name}
                                type="text"
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
                                defaultValue={location}
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
                                defultvalue={email}
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
                                defultvalue={password}
                                onChange={(e) => setPassword(e.target.value)}


                              />

                              <Form.Control.Feedback type="invalid" tooltip>
                              </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="4">
                              <Form.Label>image</Form.Label>
                              <Form.Control
                                type="file"
                                name="image"
                                onChange={(e) => setImage(e.target.files[0])}

                              />

                              <Form.Control.Feedback type="invalid" tooltip>
                              </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="4">
                              <Form.Label>Phone Number</Form.Label>
                              <Form.Control
                                type="tel"
                                name="phonenumber"
                                defultname="tel"
                                defultvalue={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                              />
                            </Form.Group>
                          </Form.Row>
                          <Button
                            onClick={() => {
                              updateInfo();
                            }}
                            type="button"
                          >
                            Submit form
						</Button>
                        </Form>
                      </Card.Body>
                    </Card>



                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
          </Button>
                    <Button variant="primary" onClick={handleClose}>
                      Save Changes
          </Button>
                  </Modal.Footer>
                </Modal>
              </>

             <div className="col-md-4 mb-3">
								<div className="card">
									<div className="card-body">
										<div className="d-flex flex-column align-items-center text-center">
											<img
												src={"http://localhost:8000/storage/" + image}
												alt="Student Profile Photo"
												className="rounded-circle"
												width={150}
											/>
											<div className="mt-3">
												<h4>
													{name}
												</h4>

                        <Button style={{marginBottom:'10%'}}variant="primary" onClick={handleShow}>
                         edit      </Button>

												{"   "}
												<Button style={{marginBottom:'10%'}} variant="secondary">Logout</Button>
											</div>
										</div>
									</div>
								</div>
							</div> 
              <div className="col-md-8">
                <div className="card mb-3">
                  <div className="card-body">
                    <StudentInfo field="Name" value={name} />
                    <StudentInfo field="company url" value={url} />
                    <StudentInfo field="Email" value={email} />
                    <StudentInfo field="Phone Number" value={phoneNumber} />
                    <StudentInfo field="location" value={location} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>}
      </>
      <>


        <FoodCrud />
        <FooterPage/>
      </>
    </>
  );
}

export default StudentViewPage;
