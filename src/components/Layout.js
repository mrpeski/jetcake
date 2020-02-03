import * as React from 'react';
import JetCake from '../components';
import { GlobalStyle } from '../components/Styled';
import { Helmet } from 'react-helmet';

export default function Layout(props){
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>JetCake Cupcakes</title>
                <link rel="canonical" href="http://localhost:3000" />
            </Helmet>
            <GlobalStyle />
            <JetCake.TopNav />
                { props.children }
            <JetCake.Footer />
        </>
    );
}