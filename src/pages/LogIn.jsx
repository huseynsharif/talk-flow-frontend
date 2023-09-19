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
        nickname: "",
        password: ""
      },
      validationSchema: Yup.object({
        nickname: Yup.string().required("Required"),
        password: Yup.string().required("Required"),
      }),
      onSubmit: (values) => {
        console.log(values);
        userService.login(values).then(result => {
          setData(result.data);
          console.log(result.data);
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
          <label>Nickname</label>
          <input
            id='nickname'
            placeholder='Nickname'
            type='text'
            onChange={formik.handleChange}
            value={formik.values.nickname}
            onBlur={formik.handleBlur}

          />
          {formik.touched.nickname && formik.errors.nickname ? <Label pointing basic color='red' mini>{formik.errors.nickname}</Label> : null}
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
