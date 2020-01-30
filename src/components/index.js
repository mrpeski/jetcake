import * as React from 'react';
import { Input, Button, Label } from './Styled';

const Nav = React.lazy(() => import('./TopNav'));
const Hero = React.lazy(() => import('./Hero'));
const Info = React.lazy(() => import('./Info'));
const Footer = React.lazy(() => import('./Footer'));
const Layout = React.lazy(() => import('./Layout'));

export default {
        TopNav: (props) => <Nav {...props} />,
        Hero: (props) => <Hero {...props} />,
        Info: (props) => <Info {...props} />,
        Footer: (props) => <Footer {...props} />,
        Layout: (props) => <Layout {...props} />,
        Input: (props) => <Input {...props} />,
        Button: (props) => <Button {...props} />,
        Label: (props) => <Label {...props} />
}