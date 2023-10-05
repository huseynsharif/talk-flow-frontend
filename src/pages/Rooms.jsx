import { useFormik } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Container, Form, Label } from 'semantic-ui-react'
import * as Yup from 'yup'
import { RoomService } from '../services/RoomService'



export default function Rooms() {

  const navigate = useNavigate();


  const formik = useFormik({
    initialValues: {
      roomName: ""
    },
    validationSchema: Yup.object({
      roomName: Yup.string().required("Required")
    }),
    onSubmit: (values) => {
      localStorage.setItem('room-name', JSON.stringify(values.roomName).slice(1, -1).trim())
      let roomService = new RoomService();
      roomService.findRoomIdByRoomName(values.roomName).then(result => {
        localStorage.setItem('room-id', JSON.stringify(result.data.data))
        navigate('/chatroom')
      })
      
    }
    
  });

  return (
    <div><Container style={{ display: "flex", justifyContent: "center", marginTop: "20px", marginBottom: "200px" }}>
    <Form onSubmit={formik.handleSubmit} style={{ width: "400px" }} >

      <Form.Field>
        <label>Room Name</label>
        <input
          id='roomName'
          placeholder='Please enter the room name'
          type='text'
          onChange={formik.handleChange}
          value={formik.values.roomName}
          onBlur={formik.handleBlur}
        />
      </Form.Field>
      <Form.Field inline>
      {formik.touched.roomName && formik.errors.roomName ? <Label pointing basic color='red' mini>{formik.errors.roomName}</Label> : null}
      </Form.Field>
      <Button type='submit' primary disabled={!formik.values.roomName}>Join</Button>

    </Form>

  </Container></div>
  )
}
