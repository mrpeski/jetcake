import * as React from 'react';
import { NavLink as Link, withRouter } from 'react-router-dom';

function TopNav(){
    return <div className="" style={{display: 'flex',
        padding: 10,
        justifyContent: 'space-evenly', backgroundColor: 'white'}}>
        <Link to='/'>Home</Link>
        <Link to='/profile'>Profile</Link>
        <Link to='/login'>Login</Link>
        <Link to='/register'>Register</Link>
    </div>
}

export default withRouter(TopNav);