import * as React from 'react';

export default function Hero(props){
    return <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', position: 'relative'}}>
                <div className="" style={{ background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(3px)', width:'100%', height:'100%', zIndex: 2, position: 'absolute'}}>
                    <h1 style={{ color: 'white', textAlign: 'center' }}>Hero</h1>
                    <p style={{ color: 'white', textAlign: 'center' }}>Lorem ipsum dolor...</p>
                </div>
                <img src="/cakes.jpg" style={{ maxWidth: '100%', zIndex: 1}}/>
            </div>
}

