import { useFormik } from 'formik';
import React, { useState } from 'react'
import * as Yup from 'yup'
import { Container, Form, Label } from 'semantic-ui-react'
import { UserService } from '../services/UserService';
import { useNavigate } from 'react-router-dom';
import Loading from '../elements/Loading';

export default function LogIn() {

  const userService = new UserService();
  const navigate = useNavigate();
  let [loginResult, setLoginResult] = useState({ success: false, message: "", data: {} });
  const [isLoading, setIsLoading] = useState(false);

  const formik = useFormik(
    {
      initialValues: {
        username: "",
        password: ""
      },
      validationSchema: Yup.object({
        username: Yup.string().required("Required"),
        password: Yup.string().required("Required")
      }),
      onSubmit: (values) => {
        setIsLoading(true);
        console.log(isLoading);
        userService.login(values).then(result => {
          setLoginResult(result.data);
          localStorage.setItem('id', JSON.stringify(result.data.data.id));
          localStorage.setItem('username', JSON.stringify(result.data.data.username).slice(1, -1));
          localStorage.setItem('token', JSON.stringify(result.data.data.token).slice(1, -1));
          localStorage.setItem('isLoggedIn', JSON.stringify(true));


          if (result.data.success) {
            navigate("/homepage")
          }
        })
        setIsLoading(false);
      }
    }
  )

  return (
    <div> <Container style={{ display: "flex", justifyContent: "center", marginTop: "20px", marginBottom: "200px" }}>
      <Form onSubmit={formik.handleSubmit} style={{ width: "400px" }} >

        <Form.Field >
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
      
          <button type='submit' disabled={isLoading} className='login-signup-submit-button'> <span>Login</span></button>
        {!loginResult.success ? <p>{loginResult.message}</p> : null}

        {isLoading ? <Loading /> : null}  {/*ishlemir*/}
      </Form>

    </Container></div>
  )
}
