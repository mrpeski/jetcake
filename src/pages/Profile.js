import * as React from 'react';
import JetCake from '../components';

export default function Profile(props){
    return (
        <JetCake.Layout>
            <div style={{ backgroundColor: '#ececec', display: 'flex', padding: '20px 0', minHeight: 'calc(100vh - 100px)'}}>
                <div style={{ width: 800, margin: 'auto', display: 'flex'}}>
                 <div>
                    Thumbnail
                </div>
                <div>
                    Profile
                </div>
                </div>
            </div>
        </JetCake.Layout>
    )
}