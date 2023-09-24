import { useFormik } from 'formik'
import React from 'react'
import { Button, Container, Form, Label } from 'semantic-ui-react'
import * as Yup from 'yup'



export default function Rooms() {

  const formik = useFormik({
    initialValues: {
      roomName: ""
    },
    validationSchema: Yup.object({
      roomName: Yup.string().required("Required")
    }),
    onSubmit: (values) => {
      
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
      <Button type='submit' primary>Join</Button>

    </Form>

  </Container></div>
  )
}
