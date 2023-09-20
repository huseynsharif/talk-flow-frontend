import { useFormik } from 'formik';
import React, { useState } from 'react'
import * as Yup from 'yup'
import { Button, Container, Form, Label } from 'semantic-ui-react'
import { UserService } from '../services/UserService';
import { useNavigate } from 'react-router-dom';


export default function LogIn() {

  const userService = new UserService();
  const navigate = useNavigate();
  let [data, setData] = useState({ success: false, message: "", data: {} });


  const formik = useFormik(
    {
      initialValues: {
        username: "",
        password: ""
      },
      validationSchema: Yup.object({
        username: Yup.string().required("Required"),
        password: Yup.string().required("Required"),
      }),
      onSubmit: (values) => {
        userService.login(values).then(result => {
          setData(result.data);
          if (result.data.success) {
              navigate("/homepage")
          }
        })
      }
    }
  )

  return (
    <div> <Container style={{ display: "flex", justifyContent: "center", marginTop: "20px", marginBottom: "200px" }}>
      <Form onSubmit={formik.handleSubmit} style={{ width: "400px" }} >

        <Form.Field>
          <label>Username</label>
          <input
            id='username'
            placeholder='Username'
            type='text'
            onChange={formik.handleChange}
            value={formik.values.username}
            onBlur={formik.handleBlur}

          />
          {formik.touched.username && formik.errors.username ? <Label pointing basic color='red' mini>{formik.errors.username}</Label> : null}
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input
            id='password'
            placeholder='Password'
            type='password'
            onChange={formik.handleChange}
            value={formik.values.password}
            onBlur={formik.handleBlur}

          />
          {formik.touched.password && formik.errors.password ? <Label pointing basic color='red' mini>{formik.errors.password}</Label> : null}
        </Form.Field>

        <Button type='submit' primary>Submit</Button>
        {!data.success ? <p>{data.message}</p> : null}

      </Form>

    </Container></div>
  )
}
