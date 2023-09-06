import React from 'react'
import { Button, Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'


export default function Navi() {
    return (
        <Menu size='huge'>
            <Menu.Item
                name='home'
            />
            <Menu.Item
                name='messages'
            />

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
