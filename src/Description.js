 import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Description = ({match,users}) => {
     const [user, setUser] = useState(users.find(el=>el.id === match.params.id))
     console.log(setUser)
    return (
        <div>
        
           <h1>{user && user.email}</h1> 
        <Link to='/' >Home</Link>
        </div>
    )
}

export default Description
