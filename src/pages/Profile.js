import * as React from 'react';
import JetCake from '../components';
import Service from '../network';
import Forms from '../forms';
import { Helmet } from 'react-helmet';


export default function Profile(props){
    const [profile, setState] = React.useState({
        details: {
            dob: '', 
            email: '',
            phonenumber: '',
            password: '', 
            sec_1: '', 
            sec_2: '', 
            sec_3: ''
        },
        photo: ''
    });

    const [modalOpen, setModal] = React.useState(false);



    React.useEffect(() => {
        async function init() {
            const details = await Service.fetchDetails();
            const photo = await Service.fetchPhoto();
            // debugger;
            return Promise.resolve({ 
                details: details ? details : profile.details, 
                photo: photo ? photo : profile.photo
            });
        }
        init().then((data) => {
            setState(data);
        }).catch((e) => {
            console.log(e)
        });
    });

    let { dob, email, phonenumber, sec_1, sec_2, sec_3 } = profile.details;
    let updateKey = window.localStorage.getItem('uid');

    function handleImage(e) {
        let photo = e.target.files[0];
        Service.updatePhoto(updateKey, photo);
    }
    
    return (
        <JetCake.Layout>
            <Helmet>
                <title>JetCake Cupcakes | Profile</title>
                <link rel="canonical" href="http://localhost:3000/profile" />
            </Helmet>

            {modalOpen ? <JetCake.Modal>
                <JetCake.Button onClick={() => setModal(!modalOpen)} style={{ position: 'absolute', top: 30, right: 30 }}>Close</JetCake.Button>
                <Forms.Register updateKey={updateKey} entity={{...profile.details, photo: profile.photo}}/>
            </JetCake.Modal> : null}

            <div style={{ backgroundColor: '#ececec', display: 'flex', padding: '40px 0', minHeight: 'calc(100vh - 100px)'}}>
                <div style={{ width: 800, margin: 'auto', display: 'flex'}}>
                 <div>
                    { profile.photo ? 
                        <img src={profile.photo} alt={profile.email} style={{ maxWidth: 200}}/> 
                    : null }
                    <JetCake.Button onClick={() => { let el = document.getElementById('photo'); el.click() }}>Change Photo</JetCake.Button>
                    <JetCake.Input type="file" name="photo" id="photo" onChange={handleImage} accept="image/*" style={{ display: 'none' }} />
                    <JetCake.Button onClick={() => setModal(!modalOpen)}>Edit Profile</JetCake.Button>
                </div>
                <div className={'profile-details'}>
                    <div>
                        <p>Birthday:</p>
                        { dob ? <p>{dob}</p> : null }
                    </div>
                    <div>
                        <p>Email:</p>
                        { email ? <p>{email}</p> : null }
                    </div>
                    <div>
                    <p>Phone Number:</p>
                    { phonenumber ? <p>{phonenumber}</p> : null }
                    </div>
                    <div>
                        <h4>Security</h4>
                        <div>
                            <p>What is your favorite color?</p>
                            { sec_1 ? <p>{sec_1}</p> : null }
                        </div>
                        <div>
                            <p>Which state were you born?</p>
                            { sec_2 ? <p>{sec_2}</p> : null }
                        </div>
                        <div>
                            <p>When will you stop writing code?</p>
                            { sec_3 ? <p>{sec_3}</p> : null }
                        </div>
                    </div>
                    
                    
                </div>
                </div>
            </div>
        </JetCake.Layout>
    )
}