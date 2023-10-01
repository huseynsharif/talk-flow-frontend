import React from 'react'
import { Menu } from 'semantic-ui-react'
import { useNavigate } from 'react-router-dom'
import SignedOut from './SignedOut';
import SignedIn from './SignedIn';


export default function Navi() {

    const navigate = useNavigate();

    let isLoggedIn = localStorage.getItem('isLoggedIn')
    return (

        <Menu size='huge' className='nav'>
            <Menu.Menu>
                <Menu.Item
                    name='home'
                    onClick={() => navigate("/homepage")}
                />
                
                <Menu.Item
                    name='Chat'
                    onClick={() => navigate("/rooms")}
                />
            </Menu.Menu>
            <Menu.Menu position='right'>
                {isLoggedIn == "false" || isLoggedIn == null ? <SignedOut /> : <SignedIn />}</Menu.Menu>
        </Menu>
    )
}
