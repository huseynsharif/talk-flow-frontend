import { useFormik } from 'formik';
import React from 'react'
import * as Yup from 'yup'
import { Button, Container, Form , Label} from 'semantic-ui-react'
import { UserService } from '../services/UserService';


export default function SignUp() {

    const userService = new UserService();
    const formik = useFormik(
        {
            initialValues: {
                nickname: "",
                email: "",
                password: "",
                cpassword: ""
            },
            validationSchema: Yup.object({
                nickname: Yup.string().min(2, "Must be 2 character or more.").max(15, "Must be 15 character or less.").required("Required"),
                email: Yup.string().email("Invalid email adress.").required("Required"),
                password: Yup.string().required("Required"),
                cpassword: Yup.string().required("Required")
            }),
            onSubmit: (values) => {
                console.log(values);
                userService.addUser(values)
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
                <Button type='submit' primary>Submit</Button>
            </Form>

        </Container>
        </div>
    )
}
