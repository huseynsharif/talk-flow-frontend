import React, { useEffect, useState } from 'react'
import { Menu } from 'semantic-ui-react'
import { useNavigate } from 'react-router-dom'
import SignedOut from './SignedOut';
import SignedIn from './SignedIn';


export default function Navi() {

    const navigate = useNavigate();
    // let [isLoggedIn, setIsLoggedIn] = useState(false);
    // useEffect(
    //     () => {
    //         let a = localStorage.getItem('isLoggedIn');
    //         if (a) {
    //             setIsLoggedIn(a);
    //         }
    //         else {
    //             setIsLoggedIn(false)
    //         }

    //     }, []
    // )

    let isLoggedIn = localStorage.getItem('isLoggedIn')
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
            <Menu.Menu position='right'>
                {isLoggedIn == "false" || isLoggedIn == null ? <SignedOut /> : <SignedIn />}</Menu.Menu>
        </Menu>
    )
}
