import React from 'react'
import { Button, Menu } from 'semantic-ui-react'
import { Link, useNavigate } from 'react-router-dom'

export default function SignedOut() {


    return (

        <div>
            <Menu position='right'>
                <Menu.Item>
                    <Link to={"/signup"}>
                        <Button primary>Sign Up</Button>
                    </Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to={"/login"}>
                        <Button>Log in</Button>
                    </Link>

                </Menu.Item>
            </Menu>
        </div>
    )
}
