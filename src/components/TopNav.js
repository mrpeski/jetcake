import * as React from 'react';
import { NavLink as Link, withRouter } from 'react-router-dom';
import Service from '../network';

function Auth() {
    let uid = window.localStorage.getItem('uid');
    const logOut = () => {
        Service.logOut();
    }
    return <>
     {
         uid ? 
         <>
            <Link to='/profile' exact>Profile</Link>
            <button style={{ backgroundColor: 'transparent', border: 'none', fontSize: '100%', cursor: 'pointer' }} onClick={logOut}>Log Out</button>
         </> :
         <>
            <Link to='/login' exact>Login</Link>
            <Link to='/register' exact>Sign Up</Link>
         </>
    }
    </>;
}

function TopNav(){
    // let uid = window.localStorage.getItem('uid');
    return <div className="" style={{display: 'flex',
        padding: 10,
        justifyContent: 'space-evenly', backgroundColor: 'white'}}>
        <Link to='/' exact>Home</Link>
        <Auth />
    </div>
}

export default withRouter(TopNav);