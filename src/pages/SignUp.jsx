import { useFormik } from 'formik';
import React, { useState } from 'react'
import * as Yup from 'yup'
import { Button, Container, Form, Label } from 'semantic-ui-react'
import { UserService } from '../services/UserService';
import { useNavigate } from 'react-router-dom';


export default function SignUp() {

    const userService = new UserService();
    const navigate = useNavigate();
    let [data, setData] = useState({ success: false, message: "", data: {} });
    const [isLoading, setIsLoading] = useState(false);


    const formik = useFormik(
        {
            initialValues: {
                username: "",
                email: "",
                password: "",
                cpassword: ""
            },
            validationSchema: Yup.object({
                username: Yup.string().min(2, "Must be 2 character or more.").max(15, "Must be 15 character or less.").required("Required"),
                email: Yup.string().email("Invalid email adress.").required("Required"),
                password: Yup.string().required("Required"),
                cpassword: Yup.string().required("Required")
            }),
            onSubmit:  (values) => {
                setIsLoading(true)
                userService.addUser(values).then(result => {

                    setData(result.data)
                    setIsLoading(false)
                    if (result.data.success) {
                        navigate("/login")
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
                    <label>Email</label>
                    <input
                        id='email'
                        placeholder='email'
                        type='email'
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        onBlur={formik.handleBlur}

                    />
                    {formik.touched.email && formik.errors.email ? <Label pointing basic color='red' mini>{formik.errors.email}</Label> : null}
                </Form.Field>
                <Form.Field>
                    <label>Password</label>
                    <input
                        id='password'
                        placeholder='password'
                        type='password'
                        onChange={formik.handleChange}
                        value={formik.values.password}
                        onBlur={formik.handleBlur}

                    />
                    {formik.touched.password && formik.errors.password ? <Label pointing basic color='red' mini>{formik.errors.password}</Label> : null}
                </Form.Field>
                <Form.Field>
                    <label>Confirm password</label>
                    <input
                        id='cpassword'
                        placeholder='cpassword'
                        type='password'
                        onChange={formik.handleChange}
                        value={formik.values.cpassword}
                        onBlur={formik.handleBlur}

                    />
                    {formik.touched.cpassword && formik.errors.cpassword ? <Label pointing basic color='red' mini >{formik.errors.cpassword}</Label> : null}
                </Form.Field>
                <button type='submit' disabled={isLoading} className='login-signup-submit-button'> <span>Sign up</span></button>
                {!data.success ? <p>{data.message}</p> : null}


            </Form>

        </Container>
        </div>
    )
}
