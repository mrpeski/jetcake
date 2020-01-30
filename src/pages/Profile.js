import * as React from 'react';
import JetCake from '../components';
import Service from '../network';

export default function Profile(props){
    const [profile, setState] = React.useState({
        details: '',
        photo: ''
    });

    React.useEffect(() => {
        async function init() {
            const details = await Service.fetchDetails();
            const photo = await Service.fetchPhoto();
            return Promise.resolve({ details, photo });
        }
        init().then((data) => {
            setState(data);
        });
    }, []);


    return (
        <JetCake.Layout>
            <div style={{ backgroundColor: '#ececec', display: 'flex', padding: '20px 0', minHeight: 'calc(100vh - 100px)'}}>
                <div style={{ width: 800, margin: 'auto', display: 'flex'}}>
                 <div>
                    { profile.photo ? <img src={profile.photo}/> : null }
                </div>
                <div>
                    Profile
                </div>
                </div>
            </div>
        </JetCake.Layout>
    )
}