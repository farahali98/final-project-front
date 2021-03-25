import React,{useState,useEffect} from 'react'
import DetailsStudentProfile from './DetailsStudentProfile';
import { Button, Modal} from "react-bootstrap";
import Axios from 'axios';
const EditStudentProfile = (props) => {
  // console.log(props)
    return (
    <Modal
       {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Editing Profile
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
        <DetailsStudentProfile
        					name={props.name}
                  email={props.email}
                  url={props.url}
                  password={props.password}
                  phoneNumber={props.phoneNumber}
                  image={props.image}
                  location={props.location}
                  />

        </p>
      </Modal.Body>
    </Modal>
  );
}

  
    

export default EditStudentProfile