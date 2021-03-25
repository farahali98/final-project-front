import React, { useState, useEffect } from 'react'
import { Table, Button, Card, Modal,Form } from 'react-bootstrap'
import { Icon } from 'react-icons-kit'
import { ic_delete } from 'react-icons-kit/md/ic_delete'
import { pencil } from 'react-icons-kit/icomoon/pencil'
import {plus} from 'react-icons-kit/icomoon/plus'
import Axios from 'axios'
import EditFood from './EditFood'
import { date } from 'yup/lib/locale'
const FoodCrud = () => {
  const [food, setFood] = useState([]);
  const [modalShow, setModalShow] = React.useState(false);
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [image, setImage] = useState('');
  const [quantity, setQuantity] = useState('');
  const [cooked_at, setCooketAt] = useState('');
 


  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [display, setDisplay] = useState(false);
  const handleDisplay=()=>setDisplay(true);
  const handleHide=()=>setDisplay(false);




  useEffect(() => {
    Axios.get('http://localhost:8000/api/food/').then((response) => {
      setFood(response.data);
      // console.log(response.data);
    })
  }, [])

  const handleDelete = async (id) => {
    try {
      await Axios.delete(`http://localhost:8000/api/food/${id}`)
        .then((response) => {
          console.log(response)
        })
    } catch (err) { console.log(err) }
  }
  const handleUpdate = async (id) => {
    const data = new FormData();
    data.append("name", name);
    data.append("type", type);
    data.append("quantity", quantity);
    data.append("business_id", localStorage.getItem('id'));
    data.append("cooked_at", cooked_at);
    data.append("image", image);
    try {
      await Axios.post(`http://localhost:8000/api/food/${id}?_method=PUT `,data, {
        headers: {
          'Accept': 'application/json',
          'content-type': 'multipart/form-data',
        }
      })
        .then((response) => {
          console.log(response)
        })
    } catch (err) { console.log(err) }
  }
  const handleLogout=()=>{
    localStorage.setItem('id')
  }

  const handleAdd = () => {
    const id = localStorage.getItem('id')
    const data = new FormData();
    data.append("name", name);
    data.append("type", type);
    data.append("quantity", quantity);
    data.append("cooked_at", cooked_at);
    data.append("image", image);
    data.append("business_id", id);
    try {
      Axios.post(`http://localhost:8000/api/food/ `, data, {
        // headers: {
        //   'content-type': 'multipart/form-data',
        //   'Authorization': "Bearer " + localStorage.getItem('token')
        // }
      }).then((response) => {
        console.log(response);
      })
    } catch (err) { console.log(err) }
  }



  return (
    <div style={{ padding: '5%' }}>
    <Icon style={{color:'blue'}} onClick={handleDisplay} size={40} icon={plus} />
    <Modal show={show} onHide={handleClose}>
                      <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <Form>
                          <Form.Group controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="name" defaultValue={name}
                              onChange={(e) => setName(e.target.value)}
                            placeholder="Enter Food Name" />
                          </Form.Group>
                          <Form.Group controlId="formBasicType">
                            <Form.Label>Type</Form.Label>
                            <Form.Control type="text" placeholder="Enter Food Type"
                             defaultValue={type} onChange={(e) => setType(e.target.value)} />
                          </Form.Group>

                          <Form.Group controlId="formBasicType">
                            <Form.Label>Cooking Date</Form.Label>
                            <Form.Control
                              type="date"
                              name="cookingDate"
                              defaultValue={cooked_at}
                            onChange={(e) => setCooketAt(e.target.value)}                            />
                          </Form.Group>
                          <Form.Group controlId="formBasicQuantity">
                            <Form.Label>Quantity</Form.Label>
                            <Form.Control 
                            defaultValue={quantity}
                              onChange={(e) => setQuantity(e.target.value)}
                            
                            type="integer" placeholder="quanity"
                            />
                          </Form.Group>
                          <Form.Group controlId="formBasicQuantity">
                            <Form.Label>Image</Form.Label>
                            <Form.Control type="file" 
                              onChange={(e) => setImage(e.target.files[0])}
                            placeholder="upload image" />
                          </Form.Group>
                          <Button
                            onClick={() => {
                              handleAdd();
                            }}
                            type="button"
                          >
                            Submit form
</Button>                        </Form>

                      </Modal.Body>
                      <Modal.Footer>
                   
                      </Modal.Footer>
                    </Modal>
        <Table light bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Type</th>
              <th>Cooked At</th>
              <th>image</th>
              <th>operations</th>

            </tr>
          </thead>
          <tbody>
            {food.map((food) => {
              return <tr key={food.id}>
                <td>{food.id}</td>
                <td>{food.name}</td>
                <td>{food.type}</td>
                <td>{food.cooked_at}</td>
                <td><img style={{width:'100px',height:'100px'}}src={"http://localhost:8000/storage/" +food.image} /></td>
                <td style={{}}>
                  <div style={{ color: 'yellow' }}>
                    <Icon onClick={handleShow} size={35} icon={pencil} />
                   
                    <Modal show={show} onHide={handleClose}>
                      <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <Form>
                          <Form.Group controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="name" 
                            defaultValue={name}
                              onChange={(e) => setName(e.target.value)}
                            placeholder="Enter Food Name" />
                          </Form.Group>
                          <Form.Group controlId="formBasicType">
                            <Form.Label>Type</Form.Label>
                            <Form.Control type="text" placeholder="Enter Food Type"
                            defaultValue={type}
                              onChange={(e) => setType(e.target.value)} />
                          </Form.Group>

                          <Form.Group controlId="formBasicType">
                            <Form.Label>Cooking Date</Form.Label>
                            <Form.Control
                              type="date"
                              name="cookingDate"
                              defaultValue={cooked_at}
                            onChange={(e) => setCooketAt(e.target.value)}                            />
                          </Form.Group>
                          <Form.Group controlId="formBasicQuantity">
                            <Form.Label>Quantity</Form.Label>
                            <Form.Control 
                            defaultValue={quantity}
                              onChange={(e) => setQuantity(e.target.value)}
                            
                            type="integer" placeholder="quanity"
                            />
                          </Form.Group>
                          <Form.Group controlId="formBasicQuantity">
                            <Form.Label>Image</Form.Label>
                            <Form.Control type="file" 
                              onChange={(e) => setImage(e.target.files[0])}
                            placeholder="upload image" />
                          </Form.Group>
                          <Button
                            onClick={() => {
                              handleUpdate(food.id);
                            }}
                            type="button"
                          >
                            Submit form
</Button>                        </Form>

                      </Modal.Body>
                      <Modal.Footer>
                   
                      </Modal.Footer>
                    </Modal>
                  </div>
                  <div style={{ color: 'red' }}>
                    <Icon onClick={() => handleDelete(food.id)} size={40} icon={ic_delete} />
                  </div>
                </td>

              </tr>
            })}

          </tbody>
        </Table>

    </div>
  )
}

export default FoodCrud
