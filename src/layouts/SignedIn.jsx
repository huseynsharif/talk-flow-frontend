import React, { useEffect, useState } from 'react'
import { Dropdown, Menu, Image } from 'semantic-ui-react'


export default function SignedIn() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const handleLogOut = () => {
    localStorage.clear();
    
    setIsLoggedIn(false)
    window.location.reload();
  }
  return (
    <div>

      <Menu.Item>
        <Image bordered avatar spaced="right" src="https://i.pinimg.com/736x/f1/0f/f7/f10ff70a7155e5ab666bcdd1b45b726d.jpg"></Image>
        <Dropdown pointing="top right" text={localStorage.getItem('username')}>
          <Dropdown.Menu>
            {/* <Dropdown.Item text="INFO" icon="info" /> */}

            <Dropdown.Item onClick={handleLogOut}text="Log out" icon="sign-out" />
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>

    </div>
  )
}
