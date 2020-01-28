import * as React from 'react';
import JetCake from '../components';

export default function Home(props){
    return (
        <JetCake.Layout>
            <JetCake.Hero />
            <JetCake.Info />
        </JetCake.Layout>
    );
}