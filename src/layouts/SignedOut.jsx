import React from 'react'
import { Button, Menu } from 'semantic-ui-react'
import { Link, useNavigate } from 'react-router-dom'

export default function SignedOut() {


    return (

        <div>
            <Menu position='right'>
                <Menu.Item>
                    <Link to={"/signup"}>
                        <button class="nav-signup-button">
                            Sign up
                            <div class="hoverEffect">
                                <div>
                                </div>
                            </div></button>
                    </Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to={"/login"}>
                        <button class="nav-login-button">
                            Log in
                        </button>
                    </Link>

                </Menu.Item>
            </Menu>
        </div>
    )
}
