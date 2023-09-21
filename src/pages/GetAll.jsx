import React, { useEffect, useState } from 'react'
import { UserService } from '../services/UserService';

export default function GetAll() {

    const [users, setUsers] = useState([]);

    useEffect(
        () => {
            let userService = new UserService();

            userService.getall().then(result => setUsers(result.data.data));
            console.log(users);
        }, []
    );
    return (
        <div>

            {users.map((user) => (<p>{user.username}</p>))}
        </div>
    )
}
