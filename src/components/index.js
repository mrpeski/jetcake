import * as React from 'react';
import { Input, Button, Label, H1, p as P, Fold, Overlay, Footer as StyledFooter } from './Styled';

const Nav = React.lazy(() => import('./TopNav'));
const Hero = React.lazy(() => import('./Hero'));
const Info = React.lazy(() => import('./Info'));
const Footer = React.lazy(() => import('./Footer'));
const Layout = React.lazy(() => import('./Layout'));
const Modal = React.lazy(() => import('./Modal'));


export default {
        TopNav: (props) => <Nav {...props} />,
        Hero: (props) => <Hero {...props} />,
        Info: (props) => <Info {...props} />,
        Footer: (props) => <Footer {...props}/>,
        StyledFooter: (props) => <StyledFooter {...props}/>,
        Layout: (props) => <Layout {...props} />,
        Input: (props) => <Input {...props} />,
        Button: (props) => <Button {...props} />,
        Label: (props) => <Label {...props} />,
        H1: (props) => <H1 {...props} />,
        p: (props) => <P {...props} />,
        Fold: (props) => <Fold {...props} />,
        Overlay: (props) => <Overlay {...props} />,
        Modal: (props) => <Modal {...props} />
}