import * as React from 'react';
import JetCake from '../components';
import { GlobalStyle } from '../components/Styled';


export default function Layout(props){
    return (
        <>
            <GlobalStyle />
            <JetCake.TopNav />
                { props.children }
            <JetCake.Footer />
        </>
    );
}