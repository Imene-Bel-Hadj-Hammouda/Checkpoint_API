import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Route, Switch } from 'react-router'
import App from './App'
import Description from './Description'

function UserList () {
    const [users, setusers] = useState(null)
    useEffect(() => {
        
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res=>setusers(res.data))
        
    }, [])
    return (
        <Switch>

            <Route exact path='/'render={(props)=> <App users={users} {...props}></App>}></Route>
            <Route path='/description/:id' render={()=><Description users={users}></Description>}/>
    </Switch>
    )
}

export default UserList
