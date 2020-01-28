import * as React from 'react';

const Login = React.lazy(() => import('./Login'));
const Register = React.lazy(() => import('./Register'));

export default {
        Login: (props) => <Login {...props} />,
        Register: (props) => <Register {...props} />,
}