import React from 'react'
import { Menu } from 'semantic-ui-react'
import {useNavigate } from 'react-router-dom'
import SignedOut from './SignedOut';


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
                    name='room'
                    onClick={() => navigate("/rooms")}
                />
                <Menu.Item
                    name='Chat'
                    onClick={() => navigate("/chat")}
                />
            </Menu.Menu>
            <Menu.Menu position='right'><SignedOut/></Menu.Menu>   
            </Menu>
    )
}
