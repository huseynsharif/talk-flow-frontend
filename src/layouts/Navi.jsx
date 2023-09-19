import React from 'react'
import { Button, Menu } from 'semantic-ui-react'
import { Link, useNavigate } from 'react-router-dom'


export default function Navi() {

    const navigate = useNavigate();


    return (
        <Menu size='huge'>
            <Menu.Menu>
                <Menu.Item
                    name='home' 
                    onClick={() => navigate("/homepage")}
                />
                <Menu.Item  
                    name='message' 
                    onClick={() => navigate("/message")}
                />
            </Menu.Menu>


            <Menu.Menu position='right'>
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
            </Menu.Menu>
        </Menu>
    )
}
