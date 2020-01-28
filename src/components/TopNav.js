import * as React from 'react';
import { Link, withRouter } from 'react-router-dom';

function TopNav(){
    return <div className="">
        <Link to='/'>Home</Link>
        <Link to='/profile'>Profile</Link>
        <Link to='/login'>Login</Link>
        <Link to='/register'>Register</Link>
    </div>
}

export default withRouter(TopNav);