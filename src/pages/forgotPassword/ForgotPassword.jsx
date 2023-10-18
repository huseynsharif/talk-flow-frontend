import React, { useState } from 'react'
import { Container, Form, Label } from 'semantic-ui-react'

export default function ForgotPassword() {
    const [email, setEmail] = useState("");
    let [loginResult, setLoginResult] = useState({ success: false, message: "", data: {} });
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div> <Container style={{ display: "flex", justifyContent: "center", marginTop: "20px", marginBottom: "200px" }}>
      <Form >

        <Form.Field >
          <label for="email">Please, enter the email</label>
          <input
            id='email'
            placeholder='email'
            type='email'
            onChange={(value)=>setEmail(value)}
            
          />
        </Form.Field>
        <button type='submit' disabled={isLoading} className='login-signup-submit-button'> <span>Send email</span></button>
        {!loginResult.success ? <p>{loginResult.message}</p> : null}

        
      </Form>

    </Container></div>
  )
}
